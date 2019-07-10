import React from 'react';
import './styles.css';

function MenuItem({item}) {
  return (
    <section className='menu_item' key={item.id} >
      <section className='item_image'>
        <img src={item.image} alt='menu item' />
      </section>
      <section className='item_description'>
        <h2 className='item_title'>{item.name}</h2>
      </section>
    </section>
  )
}

export default MenuItem;