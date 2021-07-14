import React, {PureComponent} from 'react';
import './Scroll.less';
import BScroll from 'better-scroll';

class Scroll extends PureComponent {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
    this.state = {
      scroll: null
    }
  }

  componentDidMount() {
    const scroll = new BScroll(this.scrollRef.current, {
      click: true,//用来监听div标签的点击事件
      probeType: this.props.probeType,
      pullUpLoad: this.props.pullUpLoad || false
    })
    //监听滚动的位置
    scroll.on('scroll', (position) => {
      this.props.scroll(position)
    })

    //监听上拉事件
    scroll.on('pullingUp', () => {
      this.props.pullingUp()
    })
    this.setState({
      scroll
    })
  }
  //滚动到某个位置，通过设置time来决定滚动的速度
  scrollTo = (x, y, time = 300) => {
    this.state.scroll.scrollTo(x, y, time)
  }


  render() {
    return (
      <div className={this.props.classContent + ' wrapper'} ref={this.scrollRef}>
        <div className="content">
          { this.props.children }
        </div>
      </div>
    );
  }
}

export default Scroll;