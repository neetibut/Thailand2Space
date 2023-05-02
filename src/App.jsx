import React, { useState,  } from 'react'
import './App.css'

import Logo from './components/Logo'
import IntroText from './components/IntroText'
import CustomButton from './components/CustomButton'
import ButtonStateProvider from './ButtonStateProvider'
import FooterText from './components/FooterText'

function App() {

    const Header = () => {
      return (
        <header className="header">
          <nav className="header-nav">
            <ul className="header-nav-list">
              <li className="header-nav-item">
                <CustomButton />
              </li>
            </ul>
          </nav>
        </header>
      );
    };

    

  return (
    <ButtonStateProvider>
      <div>
        <Header />
        <Logo />
        <IntroText />
        <FooterText />
      </div>
    </ButtonStateProvider>
  )
}

export default App
