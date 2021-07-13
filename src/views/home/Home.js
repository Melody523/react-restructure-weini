import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import './Home.less';

import HomeNavBar from './childComps/HomeNavBar'
import HomeSwiper from './childComps/HomeSwiper';
import HomeNav from './childComps/HomeNav';
import HomeSubject from './childComps/HomeSubject';
import HomeHotList from './childComps/HomeHotList';

class Home extends PureComponent {
  componentDidMount() {
    this.props.getHotList();
    this.props.getIndexMobileTop();
  }

  render() {
    const { hotSearch, bannerList, subject, hotList } = this.props.home
    return (
      <div className="home-container">
        <div className="home-content">
          <HomeNavBar hotSearch={hotSearch}></HomeNavBar>
          <HomeSwiper bannerList={bannerList}></HomeSwiper>
          <HomeNav globalUrl={this.globalUrl}></HomeNav>
          <HomeSubject subject={subject}></HomeSubject>
          <HomeHotList hotList={hotList}></HomeHotList>
        </div>
        
        {/* <scroll class="home-content" ref="scroll" :probeType="3" @scroll="scroll">
          <home-hot-list :hotList="hotList" />
          <page-end />
        </scroll>
        <!-- 监听一个组件的原生事件时必须给对应事件加上.native修饰符才能进行监听 -->
        <back-top v-show="showBackTop" @click.native="backTop" /> */}
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