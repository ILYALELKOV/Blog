import { H2, Icon } from '../../../../components'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const PostContentContainer = ({ className, post: { title, imageUrl, content, publishedAt } }) => {
	return (
		<div className={className}>
			<img src={imageUrl} alt={title} />
			<H2>{title}</H2>
			<div className="special-panel">
				<div className="published-at">
					<Icon id="fa-calendar-o" margin="0 7px 0 0" size="18px" />
					{publishedAt}
				</div>
				<div className="buttons">
					<Icon id="fa-pencil-square-o" margin="0 10px 0 0" size="21px" />
					<Icon id="fa-trash-o" size="21px" />
				</div>
			</div>
			<div className="post-text">{content}</div>
		</div>
	)
}

export const PostContent = styled(PostContentContainer)`
	& img {
		float: left;
		margin: 0 20px 10px 0;
	}

	& .special-panel {
		display: flex;
		justify-content: space-between;
		margin: -20px 0 20px;
	}

	& .published-at {
		display: flex;
		font-size: 18px;
	}

	& i {
		position: relative;
		top: -1px;
	}

	& .buttons {
		display: flex;
	}

	& .post-text {
		font-size: 18px;
	}
`

PostContentContainer.propTypes = {
	post: PropTypes.shape({
		title: PropTypes.string,
		imageUrl: PropTypes.string,
		content: PropTypes.string,
		publishedAt: PropTypes.string
	}),
	className: PropTypes.string
}