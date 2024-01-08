import { Icon, Input } from '../../../../components'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const SearchContainer = ({ className, SearchPhrase, onChange }) => {
	return (
		<div className={className}>
			<Input value={SearchPhrase} placeholder="Поиск по заголовкам..." onChange={onChange} />
			<Icon id="fa-search" size="21px" inactive="true" />
		</div>
	)
}

export const Search = styled(SearchContainer)`
	display: flex;
	position: relative;
	margin: 40px auto 0;
	height: 40px;
	width: 340px;

	& > input {
		padding: 10px 40px 10px 10px;
	}

	& > div {
		position: absolute;
		right: 9px;
		top: 4px;
	}
`

SearchContainer.propTypes = {
	className: PropTypes.string,
	SearchPhrase: PropTypes.string,
	onChange: PropTypes.func
}
