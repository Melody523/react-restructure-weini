import React from 'react';
import NavBar from '../../../components/common/navbar/NavBar';
import './SearchNavBar.less';
import backIcon from 'assets/img/common/left.svg'
import searchIcon from 'assets/img/common/search.svg'

function SearchNavBar(props) {

  function goBack() {

  }
  function searchInput(val) {
    props.searchInput(val)
  }

  function toPage() {
    props.toGoodsListPage(props.textSearch.linkContent)
  }
  return (
    <div className="search-nav-bar">
      <NavBar 
        left={
          <div className="left" onClick={() => {goBack()}}>
            <img className="back-icon" src={backIcon} alt="" />
          </div>
        }
        center={
          <div className="center">
            <input className="search-input" type="text" value={props.textSearch.linkContent} onInput={(e) => {searchInput(e.target.value)}} />
            { props.hasInput &&  <span className="icon" onClick={() => {searchInput('')}}>&times;</span> }
          </div>
        }
        right={
          <div className="right">
            <img className="right-icon" src={searchIcon} alt="" onClick={() => {toPage()}} />
          </div>
        }
      ></NavBar>
  </div>
  );
}

export default SearchNavBar;