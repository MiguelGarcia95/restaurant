import React from 'react';
import './styles.css';

function Navbar({setCurrentSlide}) {
  return (
    <section className='navbar'>
      <span onClick={() => setCurrentSlide('welcome')} ><p>Welcome</p></span>
      <span onClick={() => setCurrentSlide('about')} ><p>About</p></span>
      <span onClick={() => setCurrentSlide('menu')} ><p>Menu</p></span>
      <span onClick={() => setCurrentSlide('contact')} ><p>Contact</p></span>
    </section>
  );
}

export default Navbar;