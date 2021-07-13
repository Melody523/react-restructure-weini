import React from 'react';
import NavBar from '../../../components/common/navbar/NavBar';
import './HomeNavBar.less';
import searchImg from 'assets/img/common/search.svg'
import messageImg from  'assets/img/common/message.svg'


function HomeNavBar(props) {
  function toSearchPage() {
    props.history.push('/search');
  }
  function toMessageCenterPage() {
    props.history.push('/messageCenter');
  }
  return (
    <div className="home-nav-bar">
      <NavBar 
        center={
          <div className="center" onClick={toSearchPage}>
            <img className="search-icon" src={searchImg} alt="" />
            <input className="search-input" type="text" placeholder={props.hotSearch} disabled />
          </div>
        }
        
        right={
          <div className="right">
            <img className="message-icon" onClick={toMessageCenterPage} src={messageImg} alt="" />
          </div>
        }
      >
      </NavBar>
    </div>
  );
}

export default HomeNavBar;