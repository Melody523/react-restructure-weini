import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Home.less';
import { throttle } from 'utils/tools'

import HomeNavBar from './childComps/HomeNavBar'
import HomeSwiper from './childComps/HomeSwiper';
import HomeNav from './childComps/HomeNav';
import HomeSubject from './childComps/HomeSubject';
import HomeHotList from './childComps/HomeHotList';
import NewSubject from '../../components/content/newSubject/NewSubject';
import Scroll from '../../components/common/scroll/Scroll';
import PageEnd from '../../components/content/pageEnd/PageEnd';
import BackTop from '../../components/content/backTop/BackTop';
let timeout = null
class Home extends PureComponent {
  constructor(props) {
    super(props);
    this.scrollRef = React.createRef();
    this.state = {
      positionY: 0
    }
  }

  componentDidMount() {
    this.props.getHotList();
    this.props.getIndexMobileTop();
  }

  componentWillUnmount() {
    if (!timeout) { clearTimeout(timeout) }
  }
  
  backTop = () => {
    this.scrollRef.current.scrollTo(0, 0, 500)
  }
  scroll = (position) => {
    let that = this
    if (!timeout) {
      timeout = setTimeout(() => {
        timeout = null
        that.setState({
          positionY: position.y
        })
      }, 1000)
    }
  }

  render() {
    const { hotSearch, bannerList, subject, newSubject, hotList } = this.props.home
    return (
      <div className="home-container">
        <Scroll classContent="home-content" probeType={3} pullUpLoad={false} ref={this.scrollRef} scroll={(position) => {this.scroll(position)}}>
          <HomeNavBar hotSearch={hotSearch}></HomeNavBar>
          <HomeSwiper bannerList={bannerList}></HomeSwiper>
          <HomeNav globalUrl={this.globalUrl}></HomeNav>
          <HomeSubject subject={subject}></HomeSubject>
          <NewSubject newSubject={newSubject}></NewSubject>
          <HomeHotList hotList={hotList}></HomeHotList>
          <PageEnd></PageEnd>
        </Scroll>
        { this.state.positionY < -600 && <BackTop backTop={() => {this.backTop()}}></BackTop>}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    home: state.home
  }
}

const mapDispatchToProps = {
  getHotList: () => ({ type: 'getHotList' }),
  getIndexMobileTop: () =>  ({ type: 'getIndexMobileTop' })
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);