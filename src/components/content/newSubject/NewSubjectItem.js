import React, {PureComponent} from 'react';
import './NewSubjectItem.less';
import BScroll from 'better-scroll';
import more from 'assets/img/common/more.svg'

class NewSubjectItem extends PureComponent {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
  }

  componentDidMount() {
    new BScroll(this.scrollRef.current, {
      scrollX: true,
      eventPassthrough: 'vertical',
    })
  }

  toPage = (path, id) => {
    console.log(path + id);
    // this.props.history.push(path + id)
  }
  render() {
    return (
      <div className="goods-list-container" ref={this.scrollRef}>
        <div className="goods-list-content">
          <ul className="goods-list">
            {
              this.props.newSubjectItem.goodsList.map(goods => {
                return (
                  <li className="goods-item" key={goods.goodsNo} onClick={() => {this.toPage('/goodsDetail/', goods.goodsNo)}}>
                    <img className="goods-img" src={goods.imgUrl} alt="" />
                    <div className="goods-title text-overflow2">{goods.goodsName}</div>
                    <div className="goods-price">￥{goods.showPrice}</div>
                  </li> 
                )
              })
            }
            <li className="get-more-container" onClick={() => {this.toPage('/theme/', this.props.id)}}>
              <img className="get-more-icon" src={more} alt="" />
              <div className="get-more">查看更多</div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default NewSubjectItem;