import React from 'react';
import './CategoryLeft.less';

function CategoryLeft(props) {
  function itemClick(classid) {
    props.itemClick(classid)
  }
  return (
    <div className="category-left">
      <ul className="category-left-list">
        {
          props.categoryList.map(item => (
            <li className={props.currentId == item.classid ? 'category-left-item active' : 'category-left-item'}
                key={item.classid}
                onClick={() => {itemClick(item.classid)}}
              >
              {item.classdesc}
            </li>
          ))
        }
        
      </ul>
    </div>
  );
}

export default CategoryLeft;