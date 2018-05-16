import React from 'react'
import styled from 'styled-components'

//  Components
import Header from '../components/Header'

const Container = styled.main`
  margin:4rem auto;
	padding:2rem 3rem 3rem;
  max-width:600px;
  background: #BDBDBD;
  background: linear-gradient(#2196F3, #9198e5);
	color:#FFF;
	box-shadow:-20px -20px 0px 0px rgba(100,100,100,.1);
`

const Total = styled.div`
  margin: 25px 0px;
  text-align: right;
`

const staticArray = [
  {
    "id": "jh7dcnx3",
    "title": "Javascript",
    "count": 5
  },
  {
    "id": "aall12",
    "title": "Redux",
    "count": 2
  },
  {
    "id": "kkeess",
    "title": "Webpack",
    "count": 1
  }
]

class App extends React.Component {

  static async getInitialProps() {
    // const res = await instance.getCounters()
    return { 
      counters: staticArray
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      counters: props.counters || staticArray,
      total: props.counters.reduce((a, o) => a + o.count, 0)
    }
  }

  onUpdate = list => {
    this.setState({counters: list, total: list.reduce((a, o) => a + o.count, 0)})
  }

  render() {
    const { counters, total } = this.state
    return (
      <Container>
        <Header heading="Sitepoint Counter" subHeading="a demo app using React.js"/>
      </Container>
    )
  }
}

export default App