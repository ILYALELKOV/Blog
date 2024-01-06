import { useEffect, useState } from 'react'
import { PostCard } from './components'
import { useServerRequest } from '../../hooks'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([])
	const requestServer = useServerRequest()

	useEffect(() => {
		requestServer('fetchPosts').then((posts) => {
			setPosts(posts.res)
		})
	}, [requestServer])

	return (
		<div className={className}>
			<div className="post-list">
				{posts.map(({ id, title, publishedAt, commentsCount, imageUrl }) => (
					<PostCard
						key={id}
						id={id}
						title={title}
						publishedAt={publishedAt}
						commentsCount={commentsCount}
						imageUrl={imageUrl}
					/>
				))}
			</div>
		</div>
	)
}

export const Main = styled(MainContainer)`
	& .post-list {
		display: flex;
		flex-wrap: wrap;
		padding: 20px;
	}
`

MainContainer.propTypes = {
	className: PropTypes.string
}