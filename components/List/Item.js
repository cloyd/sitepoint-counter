import styled from 'styled-components'
import PropTypes from 'prop-types'
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import { faPlus, faMinus, faTimesCircle } from '@fortawesome/fontawesome-free-solid'

const Actions = styled.div`
  display:flex;
  justify-content: space-between;
  min-width: 80px;
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

  &.no-anim {
    &:active {
    transform: translateY(0);
    transition: none;
    }
  }
`
const Title = styled.span`
  padding-left: 10px;
`

const ListItem = ({item, onIncrement, onDecrement, onDeleteCounter}) => (
  <React.Fragment>
    <div style={{marginLeft: '5px'}}>
      <ActionButton className='no-anim' type="button" aria-label="Delete" title="Delete" onClick={ () => onDeleteCounter(item.id) }>
        <FontAwesomeIcon icon={faTimesCircle}/>
      </ActionButton>
      <Title className="label">{item.title}</Title>
    </div>
    <Actions>
      <ActionButton disabled={item.count < 1} type="button" aria-label="Delete" title="Delete" onClick={ () => { if (item.count > 0) onDecrement(item.id) } }>
        <FontAwesomeIcon icon={faMinus}/>
      </ActionButton>
      <span>{item.count || 0}</span>
      <ActionButton type="button" aria-label="Delete" title="Delete" onClick={ () => onIncrement(item.id) }>
        <FontAwesomeIcon icon={faPlus}/>
      </ActionButton>
    </Actions>
  </React.Fragment>
)

ListItem.proptypes = {
  item: PropTypes.object,
  onIncrement: PropTypes.func,
  onDecrement: PropTypes.func,
  onDeleteCounter: PropTypes.func
}

ListItem.defaultProps = {
  item: {
    id: '',
    title: ''
  }
}

export default ListItem