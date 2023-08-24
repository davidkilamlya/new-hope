import React from 'react'
import "./Title.scss"

function Title({title,visible}) {
  return (
    <div className='title'>
      <h1>{title}</h1>
      {visible && (
        <div className="horiline"></div>
      )}
    </div>
  );
}

export default Title