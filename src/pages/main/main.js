import { useEffect, useState } from 'react'
import { Pagination, PostCard } from './components'
import { useServerRequest } from '../../hooks'
import { PAGINATION_LIMIT } from '../../constans'
import { getLastPageFromLinks } from './utils'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MainContainer = ({ className }) => {
	const [posts, setPosts] = useState([])
	const [page, setPage] = useState(1)
	const [lastPage, setLastPage] = useState(1)
	const requestServer = useServerRequest()

	useEffect(() => {
		requestServer('fetchPosts', page, PAGINATION_LIMIT).then(({ res: { posts, links } }) => {
			setPosts(posts)
			setLastPage(getLastPageFromLinks(links))
		})
	}, [requestServer, page])

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
			{lastPage > 1 && <Pagination lastPage={lastPage} setPage={setPage} page={page} />}
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
