import PropTypes from 'prop-types'
import styled from 'styled-components'

// eslint-disable-next-line
const ButtonContainer = ({ children, className, width, ...props }) => {
	return (
		<button className={className} {...props}>
			{children}
		</button>
	)
}

export const Button = styled(ButtonContainer)`
	width: ${({ width = '100%' }) => width};
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	height: 32px;
	border: 1px solid #000;
	background-color: #eee;
	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	}
`
ButtonContainer.propTypes = {
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
	className: PropTypes.string,
	width: PropTypes.string
}
