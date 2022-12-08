

import React from 'react'


function Modal(props) {
  return (props.trigger) ? (
    <div className='modal'>
        <div className='modal--container'>
        <div className='modal--button'>
            <button className='btn btn-close' onClick={() => props.setTrigger(false)}>
             close
            </button>
        </div>
        <div className='modal--content'>
          { props.children }
        </div>
        </div>
    </div>
  ) : "";
}

export default Modal