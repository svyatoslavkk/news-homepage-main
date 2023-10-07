import React from 'react';
import logo from './logo.svg';
import './App.scss';
import imageWeb3Mobile from './image-web-3-mobile.jpg';
import imageWeb3Desktop from './image-web-3-desktop.jpg';

function App() {

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

  return (
    <div className='container'>
      <header>
        <img className='logo-img' src="logo.svg" alt="Logo" />
        <img className='icon-menu-img' src="icon-menu.svg" alt="Icon Menu" />
      </header>
      
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
      </main>
    </div>
  );
}

export default App;
