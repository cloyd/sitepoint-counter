import styled from 'styled-components'
import PropTypes from 'prop-types'

import api from '../../utils/api'
const instance = api.API()

const StyledForm = styled.form`
  margin-top:3rem;
  display:flex;
  flex-wrap:wrap;
  label {
    min-width:100%;
    margin-bottom:.5rem;
    font-size:1.3rem;
  }
  button, input {
    font-family:'Quicksand', sans-serif;
	  height:3rem;
  }
  input {
    flex-grow:1;
    border:none;
    background:#f7f1f1;
    padding:0 1.5em;
    font-size:initial;
  }
  button {
    padding:0 1.3rem;
    border:none;
    background:#2196F3;
    color:white;
    text-transform:uppercase;
    font-weight:bold;
    border:1px solid rgba(255,255,255,.3);
    margin-left:5px;
    cursor:pointer;
    transition:background .2s ease-out;
    &:hover {
      color: #03A9F4;
    }
  }
`

class Form extends React.PureComponent {

  constructor(props) {
    super(props)
    this.state = {
      title: ''
    }
  }

  onChange = event => {
    this.setState({ title: event.target.value })
  }
  
  onSubmit = event => {
    event.preventDefault()
    const { title } = this.state
    const { onUpdate } = this.props
    if(title !== '') {
      this.addCounter(title).then(res => {
        this.setState({title: ''}, onUpdate(res.data))
      })
    }
  }
  
  async addCounter(title) {
    try {
      return await instance.addCounter(title)
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { title } = this.state
    return (
    <StyledForm name="newform" onSubmit={this.onSubmit}>
      <label htmlFor="newitem">Add to the counter list</label>
      <input type="text" name="newitem" value={title} onChange={this.onChange}/>
      <button>Add item</button>
    </StyledForm>
    )
  }
}

Form.proptypes = {
}

Form.defaultProps = {
}

export default Form