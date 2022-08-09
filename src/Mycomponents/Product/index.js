import React from 'react'
import './product.css'
import SubHeading from '../subHeading/index'
import ProductCards from './productCards'

export default function Product() {
  
  const cardData = [
    {
      title: 'Numquam eum perferendis',
      description: "Vel esse beatae minus laborum aut. Minus ex voluptates qui dolor ratione quis consequatur. Rerum asperiores ipsam quasi dicta veniam."
    },
    {
      title: 'Numquam eum perferendis',
      description: "Vel esse beatae minus laborum aut. Minus ex voluptates qui dolor ratione quis consequatur. Rerum asperiores ipsam quasi dicta veniam."
    },
    {
      title: 'Numquam eum perferendis',
      description: "Vel esse beatae minus laborum aut. Minus ex voluptates qui dolor ratione quis consequatur. Rerum asperiores ipsam quasi dicta veniam."
    },
  ]

  return (
    <section>
      <SubHeading title={'THE PRODUCT'} description={'Dolore voluptatum fugit dolorem a.'} />s
      
      <div className='product-here d-flex justify-content-center'>
        {cardData.map((data, i)=>(
          <ProductCards
            key={i}
            title={data.title}
            description={data.description}
          />
        ))}
      </div>
      
    </section>
  )
}
