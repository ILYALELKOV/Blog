import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'

const Content = styled.div`
	padding: 120px 0;
`

const H2 = styled.h2`
	text-align: center;
`

const Header = () => {
	return <h1>шапка</h1>
}

const Footer = () => {
	return <h1>футер</h1>
}

export const Blog = () => {
	return (
		<>
			<Header />
			<Content>
				<H2>Hello from React</H2>
				<Routes>
					<Route path="/" element={<div>Главная страница</div>} />
					<Route path="/login" element={<div>Авторизация</div>} />
					<Route path="/register" element={<div>Регистрация</div>} />
					<Route path="/users" element={<div>Пользователи</div>} />
					<Route path="/post" element={<div>Новая статья</div>} />
					<Route path="/post/:postId" element={<div>Статья</div>} />
					<Route path="*" element={<div>Ошибка</div>} />
				</Routes>
			</Content>
			<Footer />
		</>
	)
}
