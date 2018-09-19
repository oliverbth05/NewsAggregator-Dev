import React from 'react'

const Spinner = (props) => {
  return (
    <div>
    {props.error === null ?
    
    <div className = 'loading'>
        <div className = 'loader'></div>
    </div>
    
    : 
    
    <div className = 'server-error' >{props.error} <span><i class="fas fa-exclamation-circle"></i></span></div>
    }
    
    </div>
  )
}

export default Spinner;
