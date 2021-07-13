import React from 'react';
import './NavBar.less';

function NavBar(props) {
  return (
    <div className="nav-bar">
      { props.left }
      { props.center }
      { props.right }
    </div>
  );
}

export default NavBar;