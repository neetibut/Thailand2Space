import React, { useState } from 'react'

import { AboutBtn } from '../Sections/About'
import { MissionBtn } from '../Sections/Mission'
import { UpdatesBtn } from '../Sections/Updates'
import { JoinBtn } from '../Sections/Join'
import { InvestBtn } from '../Sections/Invest'
import CustomButton from '../Sections/CustomButton'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <nav className="header-nav">
          {/* <div onClick={() => setIsOpen(!isOpen)} className='menu-icon'>
            <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </div> */}
          <a className='toggle-button' onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <><span className='cross'>X</span></> : <><span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span></>}
            
          </a>
          <ul className={isOpen ? "header-nav-list active" : "header-nav-list"}>
            <li className="header-nav-item">
              <AboutBtn />
            </li>
            <li className="header-nav-item">
              <MissionBtn />
            </li>
            <li className="header-nav-item">
              <UpdatesBtn />
            </li>
            <li className="header-nav-item">
              <JoinBtn />
            </li>
            <li className="header-nav-item">
              <InvestBtn />
            </li>
            <li className="header-nav-item">
              <CustomButton />
            </li>
          </ul>
        </nav>
 
    )
  }

  export default Header