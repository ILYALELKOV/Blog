import { authorize, fetchRoles, logout, register, removeUser, updateUserRole } from './operations'
import { fetchUsers } from './operations/fetch-users'

export const server = {
	authorize,
	logout,
	register,
	fetchUsers,
	fetchRoles,
	updateUserRole,
	removeUser
}
