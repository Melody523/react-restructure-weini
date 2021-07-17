import React from 'react';
import './HotSearch.less';

function HotSearch(props) {
  function toPage(linkContent) {
    props.toGoodsListPage(linkContent)
  }
  return (
    <div className="hot-search">
      <div className="hot-search-header">热门搜索</div>
      <ul className="hot-search-list">
        {
          props.hotSearchList.map(item => {
            return (
              <li className="hot-search-item" key={item.id} onClick={() => {toPage(item.linkContent)}}>{item.linkContent}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default HotSearch;