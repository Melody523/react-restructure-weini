import React from 'react';
import GoodsList from '../../../components/content/goodsList/GoodsList';
import './HomeHotList.less';

function HomeHotList(props) {
  return (
    <div className="home-hot-list">
      <div className="home-hot-list-title"></div>
      <GoodsList goodsList={props.hotList}></GoodsList>
    </div>
  );
}

export default HomeHotList;