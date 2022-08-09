import React from 'react'
import './subHeading.css'

function SubHeading({title , description}) {
  return (
    <div>
       <div className="products fluid-container p-5">
        <h5 className='dark-text'>{title}</h5>
        <h3 className='black-heading'>{description}</h3>
        <div className='line'></div>
      </div>
    </div>
  )
}

export default SubHeading;

