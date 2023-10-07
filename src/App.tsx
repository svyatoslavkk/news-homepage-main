import React, {useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import imageWeb3Mobile from './image-web-3-mobile.jpg';
import imageWeb3Desktop from './image-web-3-desktop.jpg';
import imageRetroPCs from './image-retro-pcs.jpg';
import imageTopLaptops from './image-top-laptops.jpg';
import imageGamingGrowth from './image-gaming-growth.jpg';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const newBlockItems = [
    {
      header: 'Hydrogen VS Electric Cars',
      paragraph: 'Will hydrogen-fueled cars ever catch up to EVs?',
    }, 
    {
      header: 'The Downsides of AI Artistry',
      paragraph: 'What are the possible adverse effects of on-demand AI image generation?',
    },
    {
      header: 'Is VC Funding Drying Up?',
      paragraph: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
    },
  ];

  const newsListItems = [
    {
      image: imageRetroPCs,
      number: '01',
      header: 'Reviving Retro PCs',
      paragraph: 'What happens when old PCs are given modern upgrades?',
    },
    {
      image: imageTopLaptops,
      number: '02',
      header: 'Top 10 Laptops of 2022',
      paragraph: 'Our best picks for various needs and budgets.',
    },
    {
      image: imageGamingGrowth,
      number: '03',
      header: 'The Growth of Gaming',
      paragraph: 'How the pandemic has sparked fresh opportunities.',
    },
  ]

  const menuItems = [
    {
      name: 'Home',
    },
    {
      name: 'New',
    },
    {
      name: 'Popular',
    },
    {
      name: 'Trending',
    },
    {
      name: 'Categories',
    },
  ]

  return (
    <div className='container'>
      <header>
        <img className='logo-img' src="logo.svg" alt="Logo" />
        <img
          className='icon-menu-img'
          src="icon-menu.svg"
          alt="Icon Menu"
          onClick={toggleMenu}
        />
      </header>

        <nav className={`${isMenuOpen ? "open" : ""}`}>
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
        </nav>
      
      <main>
        <picture>
          <source srcSet={imageWeb3Mobile} media="(max-width: 375px)" />
          <img className='main-image' srcSet={imageWeb3Desktop} alt="Main News Image" />
        </picture>

        <div className='text-block'>
          <h1 className='main-title'>The Bright Future of Web 3.0?</h1>
          <p className='text-content'>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
          <button type='button' className='read-more-button'>Read more</button>
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

        <div className='news-list'>
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
        </div>
      </main>
    </div>
  );
}

export default App;
