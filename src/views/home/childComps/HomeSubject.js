import React from 'react';
import './HomeSubject.less';

function HomeSubject(props) {
  function toPage(id) {
    props.history.push('/theme/' + id);
  }
  return (
    <div className="home-subject">
      <ul className="home-subject-list">
        {
          props.subject.map(item => {
            return (
              <li className="home-subject-item" key={item.id} onClick={() => toPage(item.id)} >
                <img className="home-subject-img" src={item.url2} alt="" />
              </li>
            )
          })
        }
      </ul>
    </div>
  );
}

export default HomeSubject;