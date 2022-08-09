import React from 'react'
import './button.css'

function Button({text}) {
  return (

    <input class="primary-btn" type="submit" value={text} />
    
  )

}

export default Button

    //   <>
    // {primary ? (
    //     <></>
  
    // ) : (
    //     <></>
    // )}
    // </>