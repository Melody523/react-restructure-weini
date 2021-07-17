import React from 'react';
import './MainNavBar.less';
import leftIcon from 'assets/img/common/left.svg'
import NavBar from 'components/common/navbar/NavBar'

function MainNavBar(props) {
  function goBack() {

  }
  return (
    <div className="main-nav-bar">
      <NavBar 
        left={
          <div className="left" onClick={() => {goBack()}}>
            <img className="back-icon" src={leftIcon} alt="" />
          </div>
        }
        center={
          <div className="title">
            {props.title}
          </div>
        }
      ></NavBar>
    </div>
  );
}

export default MainNavBar;