import React, { useState } from 'react';
import './HomeNav.less';

function HomeNav(props) {
  const initNavList = [
    {
      img: props.globalUrl + '/m-images/nav2.png',
      title: '国家馆',
      path: '/country',
      query: {}
    },
    {
      img: props.globalUrl + '/m-images/nav3.png',
      title: '品牌街',
      path: '/brandSearch',
      query: {}
    },
    {
      img: props.globalUrl + '/m-images/new.png',
      title: '新品',
      path: '/brandGoods',
      query: {
        title: '新品',
        isNew: 1
      }
    },
    {
      img: props.globalUrl + '/m-images/hot.png',
      title: '热卖',
      path: '/theme/317',
      query: {}
    }
  ];
  const [navList] = useState(initNavList);

  function toPage(path) {
    props.history.push(path)
  }
  return (
    <div className="home-nav">
      <ul className="home-nav-list">
        {
          navList.map(item => {
            return (
              <li className="home-nav-item" key={item.img} onClick={() => toPage(item.path)}>
                <img className="home-nav-icon" src={item.img} alt="" />
                <div className="home-nav-title">{item.title}</div>
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default HomeNav;