import { Error } from '../error/error'
import { useSelector } from 'react-redux'
import { selectUserRole } from '../../selectors'
import { ERROR } from '../../constans'
import { checkAccess } from '../../utils'
import PropTypes from 'prop-types'

export const PrivateContent = ({ children, access, serverError = null }) => {
	const userRole = useSelector(selectUserRole)

	const accessError = checkAccess(access, userRole) ? null : ERROR.ACCESS_DENIED
	const error = serverError || accessError

	return error ? <Error error={error} /> : children
}

PrivateContent.propTypes = {
	children: PropTypes.node,
	serverError: PropTypes.string,
	access: PropTypes.array
}
