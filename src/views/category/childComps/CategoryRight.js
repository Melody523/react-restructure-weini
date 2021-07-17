import React, { PureComponent } from 'react';
import './CategoryRight.less';
import Scroll from 'components/common/scroll/Scroll'

class CategoryRight extends PureComponent {
  toPage(linkContent) {
    this.props.toGoodsListPage(linkContent)
    this.scrollRef = React.createRef();
  }
  render() {
    return (
      <Scroll classContent="category-right-content" className="category-right-content" ref={this.scrollRef}>
        <div className="category-right">
          {
            this.props.categoryTwoList.map(item => {
              return (
                <div className="category-right-list" key={item.id}>
                  <div className="category-right-list-header">{item.name}</div>
                  <ul className="category-right-list-content">
                    {
                      item.threeCategoryList.map(catagory => {
                        return (
                          <li className="category-right-list-desc" key={catagory.id} onClick={() => {this.toPage(item)}}>
                            <img className="logo" src={catagory.imgUrl} alt="" />
                            <p className="name">{catagory.threeName}</p>
                          </li>
                        )
                      })
                    }
                  </ul>
                </div>
              )
            })
          }
        </div>
      </Scroll>
    );
  }
  
}

export default CategoryRight;