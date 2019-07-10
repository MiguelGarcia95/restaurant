import React from 'react';
import './styles.css';

function MenuItem({item, toggleMenuItem, setMenuItem}) {
  const displayItem = () => {
    toggleMenuItem();
    setMenuItem(item);
  }

  return (
    <section className='full_menu_item'>
      <section className='item_image'>
        <img src={item.image} alt='menu item' />
        <p className='item_price'>${item.price}</p>
        <section className='item_open'>
        <i className="fas fa-info-circle fa-lg" onClick={() => displayItem()} ></i>
        </section>
      </section>
      <section className='item_description'>
        <h2 className='item_title'>{item.name}</h2>
      </section>
    </section>
  )
}

export default MenuItem;