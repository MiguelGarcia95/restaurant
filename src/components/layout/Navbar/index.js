import React from 'react';
import './styles.css';

function Navbar({currentSlide}) {
  return (
    <section className='navbar'>
      <span onClick={currentSlide('welcome')} ><p>Welcome</p></span>
      <span onClick={currentSlide('about')} ><p>About</p></span>
      <span onClick={currentSlide('menu')} ><p>Menu</p></span>
      <span onClick={currentSlide('contact')} ><p>Contact</p></span>
    </section>
  );
}

export default Navbar;