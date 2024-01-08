import { useState } from 'react'
import { Icon } from '../../../../components'
import { Comment } from './components'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserId, selectUserRole } from '../../../../selectors'
import { addCommentAsync } from '../../../../actions'
import { useServerRequest } from '../../../../hooks'
import { ROLE } from '../../../../constans'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const CommentsContainer = ({ className, comments, postId }) => {
	const [newComment, setNewComment] = useState('')
	const userId = useSelector(selectUserId)
	const dispatch = useDispatch()
	const requestServer = useServerRequest()
	const userRole = useSelector(selectUserRole)

	const onNewCommentAdd = (userId, postId, content) => {
		dispatch(addCommentAsync(requestServer, userId, postId, content))
		setNewComment('')
	}
	const isGuest = userRole === ROLE.GUEST

	return (
		<div className={className}>
			{!isGuest && (
				<div className="new-comment">
					<textarea
						name="comment"
						value={newComment}
						onChange={({ target }) => setNewComment(target.value)}
						placeholder="...Комментарий"
					></textarea>
					<Icon
						id="fa-paper-plane-o"
						size="18px"
						margin="0 0 0 10px"
						onClick={() => onNewCommentAdd(userId, postId, newComment)}
					/>
				</div>
			)}

			<div className="comments">
				{comments.map(({ id, author, content, publishedAt }) => (
					<Comment postId={postId} id={id} key={id} author={author} content={content} publishedAt={publishedAt} />
				))}
			</div>
		</div>
	)
}

export const Comments = styled(CommentsContainer)`
	width: 580px;
	margin: 0 auto;

	& .new-comment textarea {
		resize: none;
		width: 550px;
		height: 120px;
		font-size: 18px;
	}

	& .new-comment {
		display: flex;
		width: 100%;
		margin: 20px 0 0;
	}
`

CommentsContainer.propTypes = {
	className: PropTypes.string,
	comments: PropTypes.array,
	postId: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}
