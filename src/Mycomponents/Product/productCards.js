import React from 'react'

export default function ProductCards({ title, description }) {
  return (
    <div className='product-cards'>
      <div className='card-head d-flex align-items-center justify-content-center'>
        <div className='icon'></div>
        <h3 className='card-heading'>{title}</h3>
      </div>
      <p className='card-body'>{description}</p>
      <a className='learn-more card-footer' href='#' >Learn more</a>
    </div>
  )
}
