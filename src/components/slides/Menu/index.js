import React, {useState } from 'react';
import './styles.css';

function Menu() {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => setMenu(!menu);

  return (
    <React.Fragment>
      <section className='page_section menu'>
        <section className='menu_image_side'>
          <section className='cube shaded'></section>
          <section className='cube'></section>
          <section className='cube'></section>
          <section className='cube shaded'></section>
          <section className='cube shaded'></section>
          <section className='cube'></section>
          <section className='cube'></section>
          <section className='cube shaded'></section>
          <section className='cube shaded'></section>
          <section className='cube'></section>
          <section className='cube'></section>
          <section className='cube shaded'></section>
          <section className='cube shaded'></section>
          <section className='cube'></section>
          <section className='cube'></section>
          <section className='cube shaded'></section>
          <section className='cube shaded'></section>
          <section className='cube'></section>
          <section className='cube'></section>
        </section>
        <section className='menu_side'>
          <section className='menu_header'>
            <h1>Our Menu</h1>
            <p>Whether you're in for breakfast, a business lunch or a family dinner, we promise you'll find something to love.</p>
          </section>
          <section className='menu_items'>

            <section className='menu_item'>
              <section className='item_image'>
                <p className='item_price'>$9.99</p>
              </section>
              <section className='item_description'>
                <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
              </section>
            </section>
            <section className='menu_item'>
              <section className='item_image'>
                <p className='item_price'>$9.99</p>
              </section>
              <section className='item_description'>
                <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
              </section>
            </section>
            <section className='menu_item'>
              <section className='item_image'>
                <p className='item_price'>$9.99</p>
              </section>
              <section className='item_description'>
                <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
              </section>
            </section>

          </section>
          <section className='item_more' onClick={toggleMenu}>
            <p>Open Menu</p>
          </section>
        </section>
      </section>

      <section className={`fullscreen_menu ${menu && 'opened'}`}>
        <section className='exit' ><i onClick={toggleMenu} className="fas fa-times fa-2x"></i></section>
      </section>
    </React.Fragment>
  )
}

export default Menu;