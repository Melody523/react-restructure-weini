import React from 'react';
import './BackTop.less';
import backTop from 'assets/img/common/backTop.svg'

function BackTop(props) {
  function backTopClick() {
    props.backTop()
  }
  return (
    <div className="back-top" onClick={() => {backTopClick()}}>
      <img className="back-top-icon" src={backTop} alt="" />
    </div>
  );
}

export default BackTop;