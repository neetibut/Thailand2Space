import React from 'react'

import { AboutBtn } from '../Sections/About'
import { MissionBtn } from '../Sections/Mission'
import { UpdatesBtn } from '../Sections/Updates'
import { JoinBtn } from '../Sections/Join'
import { InvestBtn } from '../Sections/Invest'




const Header = () => {
    return (
        <nav className="header-nav">
          <ul className="header-nav-list">
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
          </ul>
        </nav>
 
    )
  }

  export default Header