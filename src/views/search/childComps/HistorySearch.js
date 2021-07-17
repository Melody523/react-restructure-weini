import React from 'react';
import './HistorySearch.less';

function HistorySearch(props) {
  function clearHistoryList() {
    props.clearHistoryList()
  }

  function toPage(linkContent) {
    props.toGoodsListPage(linkContent)
  }
  
  return (
    <div className="history-search">
      <div className="history-search-header">
        <div className="title">搜索记录</div>
        <div className="clear-btn" onClick={() => {clearHistoryList()}}>清空记录</div>
      </div>
      <ul className="history-search-list">
        {
          props.historySearchList.map((item, index) => {
            return (
              <li className="history-search-item" key={index} onClick={() => {toPage(item)}}>{item}</li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default HistorySearch;