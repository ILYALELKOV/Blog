import { transformPost } from '../tramsformers'

export const getPosts = (page, limit) =>
	fetch(`http://localhost:3005/posts?_page=${page}&_limit=${limit}`)
		.then((loadedPost) => Promise.all([loadedPost.json(), loadedPost.headers.get('Link')]))
		.then(([loadedPost, links]) => ({
			posts: loadedPost && loadedPost.map(transformPost),
			links
		}))
