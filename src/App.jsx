import React, { useState} from 'react'

import './App.css'
import { ScrollProvider } from './context/ScrollContext'

import Logo from './components/Logo'
import CustomButton from './components/Sections/CustomButton'
import ButtonStateProvider from './context/ButtonStateProvider'
import FooterText from './components/Sections/FooterText'



import { AboutText } from './components/Sections/About'
import { MissionText } from './components/Sections/Mission'
import { UpdatesText } from './components/Sections/Updates'
import { JoinText } from './components/Sections/Join'
import { InvestText } from './components/Sections/Invest'
import Header from './components/Features/Header'



function App() {
  return (
    <ButtonStateProvider>
      <ScrollProvider>
        <div>
          <Header />
          <Logo />
          <CustomButton />
          <AboutText />
          <MissionText />
          <UpdatesText />
          <JoinText />
          <InvestText />
          <FooterText />
        </div>
      </ScrollProvider>
    </ButtonStateProvider>
  )
}

export default App
