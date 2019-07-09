import React, {useState } from 'react';
import './styles.css';

function Menu() {
  const [menu, setMenu] = useState(false);
  const [menuItem, setMenuItem] = useState(false);
  const toggleMenu = () => setMenu(!menu);
  const toggleMenuItem = () => setMenuItem(!menuItem);

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
                <img src='img/background.jpg' alt='menu item' />
                <p className='item_price'>$9.99</p>
              </section>
              <section className='item_description'>
                <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
              </section>
            </section>
            <section className='menu_item'>
              <section className='item_image'>
                <img src='img/background.jpg' alt='menu item' />
                <p className='item_price'>$9.99</p>
              </section>
              <section className='item_description'>
                <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
              </section>
            </section>
            <section className='menu_item'>
              <section className='item_image'>
                <img src='img/background.jpg' alt='menu item' />
                <p className='item_price'>$9.99</p>
              </section>
              <section className='item_description'>
                <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
              </section>
            </section>

          </section>
          <section className='item_more' onClick={() => toggleMenu()}>
            <p>Open Menu</p>
          </section>
        </section>
      </section>

      <section className={`fullscreen_menu ${menu && 'opened'} ${menuItem && 'item_opened'}`}>
        <section className='header'>
          <section className='exit' ><i onClick={() => toggleMenu()} className="fas fa-times fa-2x"></i></section>
          <section className='header_menu'>
            <section className='menu_nav'>
              <section className='menu_nav_item'><p>Breakfast</p></section>
              <section className='menu_nav_item'><p>Lunch</p></section>
              <section className='menu_nav_item'><p>Dinner</p></section>
              <section className='menu_nav_item'><p>Drinks</p></section>
            </section>
          </section>
        </section>

        <section className={`fullscreen_item ${menuItem && 'opened'}`}>
          <section className='exit' ><i onClick={() => toggleMenuItem()} className="fas fa-times fa-2x"></i></section>
          <section className='fullscreen_item_container'>
            <section className='fullscreen_item_image'>
              <img src='img/background.jpg' alt='menu item' />
            </section>
            <h1 className='item_title'>Straberry Vodka chocolate Cake</h1>
            <p className='item_desc'>What the food is.</p>
          </section>
        </section>

        <section className='full_menu_items'>

          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg" onClick={() => toggleMenuItem()} ></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>
          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg"></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>
          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg"></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>
          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg"></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>
          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg"></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>
          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg"></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>
          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg"></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>
          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg"></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>
          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg"></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>
          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg"></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>
          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg"></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>
          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg"></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>
          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg"></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>
          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg"></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>
          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg"></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>
          <section className='full_menu_item'>
            <section className='item_image'>
              <img src='img/background.jpg' alt='menu item' />
              <p className='item_price'>$9.99</p>
              <section className='item_open'>
              <i className="fas fa-info-circle fa-lg"></i>
              </section>
            </section>
            <section className='item_description'>
              <h2 className='item_title'>Straberry Vodka chocolate Cake</h2>
            </section>
          </section>

        </section>

      </section>
    </React.Fragment>
  )
}

export default Menu;