import React from 'react';
import './NewSubject.less';
import NewSubjectItem from './NewSubjectItem';

function NewSubject(props) {
  function toPage(id) {
    props.history.push('/theme/' + id)
  }
  return (
    <div className="new-subject">
      <div className="new-subject-list">
        {
          props.newSubject.map(item => {
            return (
              <div className="new-subject-item" key={item.id}>
                <img className="new-subject-poster" src={item.url} alt="" onClick={() => { toPage(item.id) }} />
                <NewSubjectItem newSubjectItem={item} id={item.id}></NewSubjectItem>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default NewSubject;