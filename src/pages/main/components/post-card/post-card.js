import { Icon } from '../../../../components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export const PostCardContainer = ({ className, id, title, publishedAt, commentsCount, imageUrl }) => {
	return (
		<div className={className}>
			<Link to={`/post/${id}`}>
				<img src={imageUrl} alt={title} />
				<div className="post-card-footer">
					<h4>{title}</h4>
					<div className="post-card-info">
						<div className="published-at">
							<Icon id="fa-calendar-o" margin="0 7px 0 0" size="18px" inactive="true" />
							{publishedAt}
						</div>
						<div className="comments-count">
							<Icon id="fa-comment-o" margin="0 7px 0 0" size="18px" inactive="true" />
							{commentsCount}
						</div>
					</div>
				</div>
			</Link>
		</div>
	)
}

export const PostCard = styled(PostCardContainer)`
	display: flex;
	flex-direction: column;
	width: 280px;
	margin: 20px;
	border: 1px solid #000;

	& img {
		display: block;
		width: 100%;
	}

	& h4 {
		margin: 0;
	}

	& .post-card-footer {
		padding: 5px;
		border-top: 1px solid #000;
	}

	& .post-card-info {
		display: flex;
		justify-content: space-between;
		margin-top: 5px;
	}

	& .published-at {
		display: flex;
	}

	& .comments-count {
		display: flex;
	}
`

PostCardContainer.propTypes = {
	className: PropTypes.string,
	id: PropTypes.string,
	title: PropTypes.string,
	publishedAt: PropTypes.string,
	commentsCount: PropTypes.number,
	imageUrl: PropTypes.string
}
