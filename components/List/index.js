import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Transition, animated } from 'react-spring'

import ListItem from './Item'

import api from '../../utils/api'
const instance = api.API()

const UL = styled.ul`
  margin-top:2.6rem;
  list-style:none;
  li {
    display:flex;
    margin:0 -3rem 4px;
    padding:1.1rem 3rem;
    justify-content:space-between;
    align-items:center;
    background:rgba(255,255,255,0.1);
    font-size: 14px;
    .label {
      position:relative;
      transition:opacity .2s linear;
    }
  }
`

class List extends React.PureComponent {

  onIncrement = id => {
    this.incrementCounter(id).then(res => {
      this.props.onUpdate(res.data)
    })
  }

  onDecrement = id => {
    this.decrementCounter(id).then(res => {
      this.props.onUpdate(res.data)
    })
  }

  onDeleteCounter = id => {
    this.deleteCounter(id).then(res => {
      this.props.onUpdate(res.data)
    })
  }

  async incrementCounter(id) {
    try {
      return await instance.incrementCounter({id})
    } catch (error) {
      console.error(error);
    }
  }

  async decrementCounter(id) {
    try {
      return await instance.decrementCounter({id})
    } catch (error) {
      console.error(error);
    }
  }

  async deleteCounter(id) {
    try {
      return await instance.deleteCounter(id)
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { lists } = this.props
    return (
      <UL>
        { lists && lists.length > 0 &&
        <Transition
          native
          keys={lists.map(item => item.id)}
          from={{ opacity: 0, maxHeight: 0 }}
          enter={{ opacity: 1, maxHeight: 60 }}>
          { lists.map(item => styles => <animated.li style={styles} key={item.id}><ListItem item={item} onIncrement={this.onIncrement} onDecrement={this.onDecrement} onDeleteCounter={this.onDeleteCounter}/> </animated.li>) }
        </Transition>
        }
      </UL>
    )
  }
}

List.proptypes = {
  lists: PropTypes.array
}

List.defaultProps = {
  lists: []
}

export default List