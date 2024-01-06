import { Icon } from '../../../../components'
import { CLOSE_MODAL, openModal, removePostAsync } from '../../../../actions'
import { useDispatch } from 'react-redux'
import { useServerRequest } from '../../../../hooks'
import { useNavigate } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SpecialPanelContainer = ({ className, id, publishedAt, editButton }) => {
	const dispatch = useDispatch()
	const requestServer = useServerRequest()
	const navigate = useNavigate()

	const onPostRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить статью?',
				onConfirm: () => {
					dispatch(removePostAsync(requestServer, id)).then(() => navigate('/'))
					dispatch(CLOSE_MODAL)
				},
				onCancel: () => dispatch(CLOSE_MODAL)
			})
		)
	}

	return (
		<div className={className}>
			<div className="published-at">
				{publishedAt && <Icon id="fa-calendar-o" margin="0 7px 0 0" size="18px" inactive="true" />}
				{publishedAt}
			</div>
			<div className="buttons">
				{editButton}
				{publishedAt && <Icon id="fa-trash-o" margin="0 0 0 7px" size="21px" onClick={() => onPostRemove(id)} />}
			</div>
		</div>
	)
}

export const SpecialPanel = styled(SpecialPanelContainer)`
	display: flex;
	justify-content: space-between;
	margin: ${({ margin }) => margin};

	& .published-at {
		display: flex;
		font-size: 18px;
	}

	& .buttons {
		display: flex;
	}

	& i {
		position: relative;
		top: -1px;
	}
`

SpecialPanelContainer.propTypes = {
	className: PropTypes.string,
	publishedAt: PropTypes.string,
	editButton: PropTypes.node,
	id: PropTypes.string
}
