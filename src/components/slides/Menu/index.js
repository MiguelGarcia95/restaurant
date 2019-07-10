import React, {useState } from 'react';
import MenuItem from '../../layout/MenuItem';
import MenuHomeItem from '../../layout/MenuHomeItem';
import MenuNavbar from '../../layout/MenuNavbar';
import items from '../../../utils/items';
import './styles.css';

const filterItems = category => {
  return items.filter(item => item.category === category);
}

function Menu() {
  const [menu, setMenu] = useState(false);
  const [menuItem, setToggleMenuItem] = useState(false);
  const [currentMenuItem, setCurrentMenuItem] = useState(null);
  const [menuCategory, setMenuCategory] = useState('breakfast');
  const toggleMenu = () => setMenu(!menu);
  const toggleMenuItem = () => setToggleMenuItem(!menuItem);
  const setCategory = category => setMenuCategory(category);
  const setMenuItem = item => setCurrentMenuItem(item);

  const displayMenuItems = () => {
    const filteredItems = filterItems(menuCategory);
    return filteredItems.map(item => <MenuItem key={item.id} item={item} toggleMenuItem={toggleMenuItem} setMenuItem={setMenuItem} /> );
  }

  const displayHomeMenu = () => {
    const filterdItems = items.slice(0, 3);
    return filterdItems.map(item => <MenuHomeItem key={item.id} item={item} />);
  }

  return (
    <React.Fragment>
      <section className='page_section menu'>
        <section className='menu_image_side'></section>
        <section className='menu_side'>
          <section className='menu_header'>
            <h1>Our Menu</h1>
            <p>Whether you're in for breakfast, a business lunch or a family dinner, we promise you'll find something to love.</p>
          </section>
          <section className='menu_items'>{displayHomeMenu()}</section>
          <section className='item_more' onClick={() => toggleMenu()}>
            <p>Open Menu</p>
          </section>
        </section>
      </section>

      <section className={`fullscreen_menu ${menu && 'opened'} ${menuItem && 'item_opened'}`}>
        <section className='header'>
          <section className='exit' ><i onClick={() => toggleMenu()} className="fas fa-times fa-2x"></i></section>
          <section className='header_menu'>
            <MenuNavbar menuCategory={menuCategory} setCategory={setCategory} />          
          </section>
        </section>

        <section className={`fullscreen_item ${menuItem && 'opened'}`}>
          <section className='exit' ><i onClick={() => toggleMenuItem()} className="fas fa-times fa-2x"></i></section>
          {currentMenuItem && (
            <section className='fullscreen_item_container'>
              <section className='fullscreen_item_image'>
                <img src={currentMenuItem.image} alt='menu item' />
              </section>
              <h1 className='item_title'>{currentMenuItem.name}</h1>
              <p className='item_desc'>{currentMenuItem.description}</p>
            </section>
          )}
        </section>

        <section className='full_menu_items'>
          {displayMenuItems()}
        </section>

      </section>
    </React.Fragment>
  )
}

export default Menu;