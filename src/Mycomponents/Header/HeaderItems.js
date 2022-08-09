import React from 'react'
import Left from '../../Asset/screens.png'
import Gradient from './gradient';
import GooglePlay from '../../Asset/GooglePlay.png'
import AppStore from '../../Asset/AppStore.png'

const HeaderItems = () => {
  return (
    <div>
      <div className="row main">
        <div className="right-side col-6 d-flex justify-content-center">
          <h5 className='gray-text'>OFFICES FIT MAXIME</h5>
          <p className='main-heading'>In laboriosam et ipsum <b>praesentium excepturi aut</b></p>
          <p className='sub-text'>
            Reiciendis sint cupiditate sit perferendis nostrum adipisci beatae assumenda quidem. Et velit illum laborum explicabo minima esse quos laboriosam quam. Earum et nobis tempora quia.
          </p>
          <div className="store" style={{zIndex: '10'}}>
            <img src={GooglePlay} alt="google play" />
            <img src={AppStore} alt="App Store" />
          </div>

          <Gradient/>
        </div>
        <div className="left-side col-6 d-flex justify-content-center">
          <img className='left-img' src={Left} />
        </div>
      </div>
    </div>
  )
}

export default HeaderItems;