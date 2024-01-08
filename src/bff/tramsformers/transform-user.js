export const transformUser = (dbUser) => ({
	id: dbUser.id,
	password: dbUser.password,
	login: dbUser.login,
	registeredAt: dbUser.registed_at,
	roleId: dbUser.role_id
})
