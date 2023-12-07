import PropTypes from 'prop-types'
import { ControlPanel, Logo } from './components'
import styled from 'styled-components'

const Discription = styled.div`
	font-style: italic;
`

const HeaderContainer = ({ className }) => (
	<header className={className}>
		<Logo />
		<Discription>
			Веб-технологии
			<br /> Написание кода
			<br /> Разбор ошибок
		</Discription>
		<ControlPanel />
	</header>
)

export const Header = styled(HeaderContainer)`
	width: 1000px;
	height: 120px;
	display: flex;
	justify-content: space-between;
	position: fixed;
	top: 0;
	padding: 20px 40px;
	box-shadow: 0 -2px 17px #000;
	background-color: #fff;
`

HeaderContainer.propTypes = {
	className: PropTypes.string
}
