import React from 'react';
import Nav from './Nav';
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1 className="mt-3">ALALAND PORTFOLIO</h1>
        <Nav />
      </div>
    )
  }
}

export default Header