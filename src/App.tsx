import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className='container'>
      <header>
        <img className='logo-img' src="logo.svg" alt="Logo" />
        <img className='icon-menu-img' src="icon-menu.svg" alt="Icon Menu" />
      </header>
      
      <main>
        {/* <img srcSet='image-web-3-mobile.jpg 375w,
                     image-web-3-desktop.jpg 1440w'
             sizes="(max-width: 375px) 100vw, 1440px" 
             src="image-web-3-desktop.jpg" alt="main-news-img" 
        /> */}
      </main>
    </div>
  );
}

export default App;
