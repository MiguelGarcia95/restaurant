import React from 'react';
import './styles.css';

function MenuNavbar({menuCategory, setCategory}) {
const isCategoryActive = (currentCategory) => menuCategory === currentCategory ? true : false; 

  return (
    <section className='menu_nav'>
      <section
        className={`menu_nav_item ${isCategoryActive('breakfast') ? 'active' : ''}`} 
        onClick={() => setCategory('breakfast')}
      >
        <p>Breakfast</p>
      </section>
      <section 
        className={`menu_nav_item ${isCategoryActive('lunch') ? 'active' : ''}`} 
        onClick={() => setCategory('lunch')}
      >
        <p>Lunch</p>
      </section>
      <section 
        className={`menu_nav_item ${isCategoryActive('dinner') ? 'active' : ''}`} 
        onClick={() => setCategory('dinner')}
      >
        <p>Dinner</p>
      </section>
      <section 
        className={`menu_nav_item ${isCategoryActive('drinks') ? 'active' : ''}`} 
        onClick={() => setCategory('drinks')}
      >
        <p>Drinks</p>
      </section>
    </section>
  )
}

export default MenuNavbar;