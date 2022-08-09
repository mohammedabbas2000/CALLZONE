import React, { useRef, useState } from 'react'
import './subscribe.css'
import SubHeading from '../subHeading'
import apiKey from '../../emailConfig'
import emailjs from '@emailjs/browser'

function Subscribe() {

  const emailInput = useRef();
  const [email, setEmail] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  }

  const handleSearchEmail = () => {
    if (emailInput.current) {
      if (emailInput.current.reportValidity()){
        setShowMessage(true);
      }
    }
  }

  const handleSendMessage = () => {
    if (emailInput.current) {
      if (emailInput.current.reportValidity()){
        setShowMessage(false);
        emailjs.init(apiKey.USER_ID)

        const templateParams = {
          from_name: 'CallZone',
          message: message,
          to_email: email,
        };

        emailjs.send(apiKey.SERVICE_ID, apiKey.TEMPLATE_ID, templateParams)
        .then((result) => {
          alert("Message Sent");
          setEmail("");
          setMessage("");
        },
        (error) => {
          console.log(error)
          alert("An error occurred, Please try again");
        });
      }
    }
  }

  return (
    <div className='subscription fluid-container'>
      <SubHeading title={'JOIN THE MOVEMENT'} description={'Subscribe to our newsletter'} />

      <p>Get notification about tips, new product and exclusive promo news just for you.</p>

      <div class="search">
        <svg id="search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 64C490.5 64 512 85.49 512 112C512 127.1 504.9 141.3 492.8 150.4L275.2 313.6C263.8 322.1 248.2 322.1 236.8 313.6L19.2 150.4C7.113 141.3 0 127.1 0 112C0 85.49 21.49 64 48 64H464zM217.6 339.2C240.4 356.3 271.6 356.3 294.4 339.2L512 176V384C512 419.3 483.3 448 448 448H64C28.65 448 0 419.3 0 384V176L217.6 339.2z"/></svg>
        <input
          type="email"
          class="form-control"
          placeholder="Enter your email adress"
          value={email}
          onChange={handleChange}
          ref={emailInput}
          required
        />
        <button class="btn btn-primary custom_button" onClick={handleSearchEmail}>Search</button>
      </div>

      {showMessage && (
        <>
          <textarea
            cols="30"
            rows="30"
            className='message__input'
            placeholder='Enter message here'
            required
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
          >
          </textarea>
          <button class="btn btn-primary custom_button mb-3" onClick={handleSendMessage}>Send Message</button>
        </>
      )}

    </div>
  )
}

export default Subscribe
// mohamha12@ac.sce.ac.il
