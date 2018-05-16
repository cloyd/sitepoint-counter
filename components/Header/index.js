import styled from 'styled-components'
import PropTypes from 'prop-types'

const Title = styled.h1`
  font-weight:normal;
  font-size:2.6rem;
  letter-spacing:0.05em;
  border-bottom:1px solid rgba(255,255,255,.3);
  span {
    display:block;
    font-size:0.8rem;
    margin-bottom:0.7rem;
    margin-left:3px;
    margin-top:0.2rem; 
  }
`

const Header = ({heading, subHeading}) => (
  <Title>{heading}
    { subHeading && <span>{subHeading}</span> }
  </Title>
)

Header.proptypes = {
  heading: PropTypes.string,
  subHeading: PropTypes.string
}

Header.defaultProps = {
  heading: 'App',
}

export default Header