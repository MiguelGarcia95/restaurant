import React from 'react';
import './styles.css';

function Welcome({setCurrentSlide}) {
  return (
    <section className='page_section welcome'>
      <section className='content_side'>
        <h1>Hungry?</h1>
        <h1>Grab a bite</h1>
        <section className='content-button' onClick={() => setCurrentSlide('menu')}>
          <p>Check our Menu Out</p>
        </section>
      </section>
      <section className='image_side'>
      </section>
    </section>
  )
}

export default Welcome;