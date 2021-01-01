import React from 'react'
import CountUpButton from './CountUpButton'
// import FacebookButton from './FacebookButton'

class Nav extends React.Component {
  render() {
    return (
      <ul className="nav justify-content-center">
        <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
        <li className="nav-item"><CountUpButton /></li>
        {/* <li className="nav-item"><FacebookButton /></li> */}
      </ul>
      
    )
  }
}

export default Nav