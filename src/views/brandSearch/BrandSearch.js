import React, { PureComponent } from 'react';
import './BrandSearch.less';
import BrandList from './childComps/BrandList'

import MainNavBar from 'components/content/mainNavBar/MainNavBar'
import Scroll from 'components/common/scroll/Scroll'

import { queryBrandList } from "network/brand"

class BrandSearch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      brandMap: [],
      hotBrandList: []
    }
    this.scrollRef = React.createRef();
  }

  componentDidMount() {
    this.getQueryBrandList()
  }

  getQueryBrandList() {
    queryBrandList().then(res => {
      this.setState({
        brandMap: res.result.brandMap,
        hotBrandList: res.result.hotBrandList
      })
    })
  }

  render() {
    const { brandMap, hotBrandList } = this.state
    return (
      <div className="brand-search">
        <MainNavBar title="品牌街"></MainNavBar>
        <Scroll ref="scrollRef" probeType={3} scroll={() => {this.scroll()}}>
          <BrandList queryBrand={hotBrandList} queryBrandTitle="热门品牌"></BrandList>
          {
            Object.keys(brandMap).map(title => {
              return (
                <BrandList queryBrand={hotBrandList} queryBrand={brandMap[title]} queryBrandTitle={title} key={title} ></BrandList>
              )
            })
          }
        </Scroll>
      </div>
    )
  }
}

export default BrandSearch;