import React from 'react'
import Button from '../Button/button'
import './pakage.css'

function Pakage( {price, title, subHeading, features, timePeriod} ) {
  return (
    <div className='pakage'>
      <div className="pakage-head">
          <div className="price">
            <b>{timePeriod === 'monthly' ? price : Number(price) * 12}$</b>
            <span>/ {timePeriod}</span>
          </div>
          <div className="pak-title">
              <h1>{title}</h1>
          </div>
          <p>{subHeading}</p>
      </div>
      <div className="pakage-body">
        {features.map((feature, i)=>(
          <p style={{
            textDecoration: `${feature.muted ? 'line-through' : ''}`
          }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            style={{
              fill: `${feature.muted ? '#dee2e6' : ''}`
            }}
          >
            <path d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"/>
          </svg>
          {feature.text}
          </p>
        ))}

          <div class="w-100 text-center">
            <Button text={"Order now"}/>
          </div>
      </div>
    </div>
  )
}

export default Pakage
