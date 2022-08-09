import React from 'react'
import './About.css'
import Button from '../Button/button'

function index() {
    return (
        <div className='aboutus-section container'>
            <div className="about-content fluid-container p-5">
                <h5 className='about-text'>About us</h5>
                <h3 className='about-heading'>Facilis iure pariatur est quia accusantium non enim facere.</h3>
                <div className='line'></div>
                <p>Vero ea non perferendis nihil cumque exercitationem. Nihil corrupti sint culpa labore et ipsam. Corrupti quam amet vel iusto omnis. Rem dolorem facilis. A sit quo voluptatum nemo sed. Deserunt temporibus alias similique ea. Rerum distinctio aperiam molestias laboriosam ratione ipsum. Libero quo enim aut ut fuga quae. Ullam sapiente animi rerum quaerat debitis.</p>
                
                <Button text={"Get Started"}/>
            </div>
        </div>
    )
}

export default index
