import React from 'react'

class Nav extends React.Component {
  render() {
    return (
      <ul className="nav justify-content-center">
        <li className="nav-item"><a href="/" className="nav-link">Home</a></li>
        <li className="nav-item"><a href="/about" className="nav-link">About</a></li>
      </ul>
      
    )
  }
}

export default Nav