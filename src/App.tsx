import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import { menuItems } from './arrayData/menuItems';
import { newsListItems } from './arrayData/newsListItems';
import { newBlockItems } from './arrayData/newBlockItems';
import imageWeb3Mobile from './image-web-3-mobile.jpg';
import imageWeb3Desktop from './image-web-3-desktop.jpg';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
      <div className={`container ${isMenuOpen ? 'menu-open' : ''}`}>
        {isMenuOpen && <div className="overlay" onClick={toggleMenu}></div>}

        <header>
          <img className='logo-img' src="logo.svg" alt="Logo" />
          <img
            className='icon-menu-img'
            src="icon-menu.svg"
            alt="Icon Menu"
            onClick={toggleMenu}
          />
          <nav>
            <div className='menu-items-desktop'>
              {menuItems.map((item: any) => (
                <div className='menu-name' key={item.name}>
                  {item.name}
                </div>
              ))}
            </div>
          </nav>
        </header>

          <aside className={`${isMenuOpen ? "open" : ""}`}>
            <img
              className='icon-menu-close-img'
              src="icon-menu-close.svg"
              alt="Icon Menu Close"
              onClick={toggleMenu} 
            />
            <div className='menu-items'>
              {menuItems.map((item: any) => (
                <div className='menu-name' key={item.name}>
                  {item.name}
                </div>
              ))}
            </div>
          </aside>
        
        <main>
          <div className='main-news'>
            <picture>
              <source srcSet={imageWeb3Mobile} media="(max-width: 375px)" />
              <img className='main-image' srcSet={imageWeb3Desktop} alt="Main News Image" />
            </picture>

            <div className='text-block'>
              <h1 className='main-title'>The Bright Future of Web 3.0?</h1>
              <div className='additional-content'>
                <p className='text-content'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
                <button type='button' className='read-more-button'>Read more</button>
              </div>
            </div>
          </div>

          <div className='new-block'>
            <h2 className='new-block-title'>New</h2>
            {newBlockItems.map((item: any) => (
              <div className='new-block-item'>
                <h3 className='new-block-item-header'>{item.header}</h3>
                <p className='new-block-item-paragraph'>{item.paragraph}</p>
              </div>
            ))}
          </div>
        </main>

        <footer className='news-list'>
            {newsListItems.map((item: any) => (
              <div className='news-list-item'>
                <img className='news-list-item-img' src={item.image} />
                <div className='news-list-item-text'>
                  <h3 className='news-list-item-number'>{item.number}</h3>
                  <h4 className='news-list-item-header'>{item.header}</h4>
                  <p className='news-list-item-paragraph'>{item.paragraph}</p>
                </div>
              </div>
            ))}
        </footer>
      </div>
  );
}

export default App;
