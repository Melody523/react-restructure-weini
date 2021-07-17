import React, { PureComponent } from 'react';
import './Search.less';
import SearchNavBar from './childComps/SearchNavBar'
import HotSearch from './childComps/HotSearch'
import HistorySearch from './childComps/HistorySearch'

import { getTextSearch, getHotSearch } from 'network/search'

class Search extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      textSearch: {
        linkContent: ''
      },
      hotSearchList: [],
      historySearchList: [],
      hasInput: true
    }
  }

  componentDidMount() {
    this.getTextSearchList()
    this.getHotSearchList()
    this.getHistorySearchList()
  }

  componentWillUnmount() {
    
  }
  
  getTextSearchList() {
    getTextSearch().then(res => {
      this.setState({
        textSearch: res.list[0]
      })
    }).catch(err => {
      console.log(err)
    })
  }

  getHotSearchList() {
    getHotSearch().then(res => {
      this.setState({
        hotSearchList: res.result
      })
    }).catch(err => {
      console.log(err)
    })
  }

  getHistorySearchList() {
    let historySearch = sessionStorage.getItem('HISTORY_SEARCH') || ''
    let list = []
    if (historySearch !== '') {
      list = historySearch.split(',')
    }
    this.setState({
      historySearchList: list
    })
  }

  toGoodsListPage(keyword) {
    let historySearchList = this.state.historySearchList
    historySearchList = [...new Set([keyword, ...historySearchList])]
    sessionStorage.setItem('HISTORY_SEARCH', historySearchList.join(','))
    this.setState({
      historySearchList
    })
    // this.props.history.push('/brandGoods?name=' + keyword)
  }

  clearHistoryList() {
    sessionStorage.removeItem('HISTORY_SEARCH')
    this.setState({
      historySearchList: []
    })
  }

  searchInput(value) {
    this.setState({
      textSearch: {
        ...this.state.textSearch,
        linkContent: value.trim()
      },
      hasInput: value !== ''
    })
  }

  render() {
    const { textSearch, hasInput, hotSearchList, historySearchList } = this.state
    return (
      <div className="search">
        <SearchNavBar textSearch={textSearch} searchInput={val => this.searchInput(val)} toGoodsListPage={(keyword) => {this.toGoodsListPage(keyword)}} hasInput={hasInput}></SearchNavBar>
        <div className="search-content">
          <HotSearch hotSearchList={hotSearchList} toGoodsListPage={(keyword) => {this.toGoodsListPage(keyword)}}></HotSearch>
          <HistorySearch historySearchList={historySearchList} clearHistoryList={() => {this.clearHistoryList()}} toGoodsListPage={(keyword) => {this.toGoodsListPage(keyword)}}></HistorySearch>
        </div>
      </div>
    )
  }
}

export default Search;