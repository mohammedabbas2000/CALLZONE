import React, { useState } from 'react'
import Pakage from '../Pakage'
import SubHeading from '../subHeading/index'
import Switch from '../switchButton'
import './pricing.css'

const data = [
  {
    price: '6',
    title: 'Start small',
    subHeading: 'Et ipsum consequatur distinctio qui similique est consequatur.',
    features: [
      {
        muted: false,
        text: 'quibusdam ullam saepe'
      },
      {
        muted: false,
        text: 'autem a necessitatibus'
      },
      {
        muted: false,
        text: 'neque et qui Low Latency'
      },
      {
        muted: true,
        text: 'adipisci perspiciatis sequi'
      },
      {
        muted: true,
        text: 'praesentium nihil saepe'
      },
    ],
  },
  {
    price: '12',
    title: 'Grow',
    subHeading: 'Et ipsum consequatur distinctio qui similique est consequatur.',
    features: [
      {
        muted: false,
        text: 'quibusdam ullam saepe'
      },
      {
        muted: false,
        text: 'autem a necessitatibus'
      },
      {
        muted: false,
        text: 'neque et qui Low Latency'
      },
      {
        muted: false,
        text: 'adipisci perspiciatis sequi'
      },
      {
        muted: false,
        text: 'praesentium nihil saepe'
      },
    ],
  },
  {
    price: '24',
    title: 'Enterprise',
    subHeading: 'Et ipsum consequatur distinctio qui similique est consequatur.',
    features: [
      {
        muted: false,
        text: 'quibusdam ullam saepe'
      },
      {
        muted: false,
        text: 'autem a necessitatibus'
      },
      {
        muted: false,
        text: 'neque et qui Low Latency'
      },
      {
        muted: false,
        text: 'adipisci perspiciatis sequi'
      },
      {
        muted: false,
        text: 'praesentium nihil saepe'
      },
    ],
  },
]

export default function Pricing() {

  const [timePeriod, setTimePeriod] = useState('monthly');

  const toggleTimePeriod = () => {
    if (timePeriod === 'annualy') {
      setTimePeriod("monthly");
    } else {
      setTimePeriod("annualy");
    }
  }

  return (
    <div className='pricing-Head p-5'>
      <SubHeading title={'Pricing'} description={'Dolore voluptatum fugit dolorem a.'} />

      <p>
        Vel esse beatae minus laborum aut. Minus ex voluptates qui dolor ratione quis consequatur. Rerum asperiores ipsam quasi dicta veniam.
      </p>

      <Switch onClick={toggleTimePeriod} />

      <div className='product-here d-flex justify-content-center'>
        {data.map((entry, i)=>(
          <Pakage
            price={entry.price}
            title={entry.title}
            subHeading={entry.subHeading}
            features={entry.features}
            timePeriod={timePeriod}
          />
        ))}
       {/* <Pakage/>
       <Pakage/> */}
      </div>

    </div>

  )
}
