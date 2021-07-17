import React, { PureComponent } from 'react';
import './Category.less';
import { getCategory, getCategoryTwo } from 'network/category'
import { carCount } from 'network/goods'

import CategoryLeft from './childComps/CategoryLeft'
import CategoryNavBar from './childComps/CategoryNavBar'
import CategoryRight from './childComps/CategoryRight'

class Category extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: 0,
      categoryList: [],
      categoryTwoList: [],
      currentId: 1
    }
  }

  componentDidMount() {
    this.getCategoryList()
    this.getCategoryTwoList(1)
    this.getcartCount()
  }
  getCategoryList() {
    getCategory().then(res => {
      this.setState({
        categoryList: res.result
      })
    }).catch(err => {
      console.log(err)
    })
  }
  getCategoryTwoList(classId) {
    getCategoryTwo(classId).then(res => {
      this.setState({
        categoryTwoList: res.result.classTwoList
      })
    }).catch(err => {
      console.log(err)
    })
  }
  getcartCount() {
    carCount().then(res => {
      this.setState({
        cartCount: res.result
      })
    }).catch(err => {
      console.log(err)
    })
  }
  itemClick(classid) {
    this.setState({
      currentId: classid
    })
    this.getCategoryTwoList(classid)
  }

  render() {
    const { cartCount, categoryList, categoryTwoList, currentId } = this.state
    return (
      <div className="category-container">
        <CategoryNavBar cartCount={cartCount} globalUrl={this.globalUrl}></CategoryNavBar>
        <div className="category-content">
          <CategoryLeft categoryList={categoryList} currentId={currentId} itemClick={(classid) => {this.itemClick(classid)}}></CategoryLeft>
          <CategoryRight categoryTwoList={categoryTwoList}></CategoryRight>
        </div>
      </div>
    )
  }
}

export default Category;