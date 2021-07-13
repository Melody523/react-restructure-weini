import React from 'react';
import { Carousel } from 'antd';
import './HomeSwiper.less';
import { Link } from 'react-router-dom';

function HomeSwiper(props) {
  function toPage(id) {
    props.history.push('/theme/' + id);
  }
  return (
    <div className="home-swiper">
      <Carousel autoplay>
        {
          props.bannerList.map((item) => (
            // <Link to={'/theme/' + item.id} key={item.id}>
              <img className="banner-img" onClick={() => toPage(item.id)} src={item.url2} key={item.id} alt=""/>
            // </Link>
          ))
        }
      </Carousel>
    </div>
  );
}

export default HomeSwiper;