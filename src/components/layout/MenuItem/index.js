import React from 'react';
import './styles.css';

function MenuItem({item, toggleMenuItem, setMenuItem}) {
  const displayItem = () => {
    toggleMenuItem();
    // setMenuItem(item.name);
  }

  return (
    <section className='full_menu_item'>
      <section className='item_image'>
        <img src='img/background.jpg' alt='menu item' />
        <p className='item_price'>$9.99</p>
        <section className='item_open'>
        <i className="fas fa-info-circle fa-lg" onClick={() => displayItem()} ></i>
        </section>
      </section>
      <section className='item_description'>
        <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
      </section>
    </section>
  )
}

export default MenuItem;