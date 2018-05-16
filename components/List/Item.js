import styled from 'styled-components'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/fontawesome-free-solid'

const Actions = styled.div`
  display:flex;
  justify-content: space-evenly;
`
const ActionButton = styled.button `
  border:none;
  background:none;
  -webkit-appearance:none;
  cursor:pointer;
  color:#FFF;
  transition: transform 60ms ease-out;
  cursor: pointer;
  &:active {
    transform: translateY(2px);
    transition: transform 100ms ease-out;
  }
  &:hover,
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
    color: #bfbfbf;
  }
`
const Counter = styled.span `
  padding: 0 20px;
`

const ListItem = ({item, onIncrement, onDecrement}) => (
  <React.Fragment>
    <span className="label">{item.title}</span>
    <Actions>
      <ActionButton disabled={item.count < 1} type="button" aria-label="Delete" title="Delete" onClick={ () => { if (item.count > 0) onDecrement(item.id) } }>
        <FontAwesomeIcon icon={faMinus}/>
      </ActionButton>
      <Counter>{item.count || 0}</Counter>
      <ActionButton type="button" aria-label="Delete" title="Delete" onClick={ () => onIncrement(item.id) }>
        <FontAwesomeIcon icon={faPlus}/>
      </ActionButton>
    </Actions>
  </React.Fragment>
)

ListItem.proptypes = {
  item: PropTypes.object,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func
}

ListItem.defaultProps = {
  item: {
    id: '',
    title: ''
  }
}

export default ListItem