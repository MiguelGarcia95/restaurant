import React from 'react';
import './styles.css';

function Navbar({setCurrentSlide, currentSlide}) {
  const activeSlide = slide => slide === currentSlide ? true : false; 
  return (
    <section className='navbar'>
      <span className={activeSlide('welcome') ? 'active' : ''} onClick={() => setCurrentSlide('welcome')} ><p>Welcome</p></span>
      <span className={activeSlide('about') ? 'active' : ''} onClick={() => setCurrentSlide('about')} ><p>About</p></span>
      <span className={activeSlide('menu') ? 'active' : ''} onClick={() => setCurrentSlide('menu')} ><p>Menu</p></span>
      <span className={activeSlide('contact') ? 'active' : ''} onClick={() => setCurrentSlide('contact')} ><p>Contact</p></span>
    </section>
  );
}

export default Navbar;