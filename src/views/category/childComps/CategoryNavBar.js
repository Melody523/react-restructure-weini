import React from 'react';
import './CategoryNavBar.less';
import NavBar from 'components/common/navbar/NavBar'

function CategoryNavBar(props) {
  function toPage() {

  }
  return (
    <div className="category-nav-bar">
      <NavBar
        center={
          <div className="title">
            <img className="logo" src={props.globalUrl + '/m-images/logo.png'} alt="" />
          </div>
        }
        right={
          <div className="right">
            <img className="right-icon" onClick={() => {toPage()}} src={props.globalUrl + '/m-images/header-search.png'} alt="" />
            <div className="cart-icon" onClick={() => {toPage()}}>
              <img className="right-icon" src={props.globalUrl + '/m-images/header-shopping.png'}  alt="" />
              <span className="cart-count">{props.cartCount}</span>
            </div>
          </div>
        }
      >
      </NavBar>
    </div>
  );
}

export default CategoryNavBar;