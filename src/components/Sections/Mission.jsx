
import React,  { useContext } from 'react'
import ButtonStateContext from '../../context/ButtonStateContext';
import ButtonStateProvider from '../../context/ButtonStateProvider';
import { useScroll } from '../../context/ScrollContext'

export const MissionBtn = () => {
    const {scrollToMission} = useScroll()
    return(
        <div>
            <button onClick={scrollToMission}>MISSION</button>
        </div>
    )
}


export const MissionText = () => {
    const { languageIs, toggleButtonState } = useContext(ButtonStateContext);
    const {sectionRef_mission} = useScroll() 

    return(
        <ButtonStateProvider>
        <div className='text-container'>
        <div ref={sectionRef_mission} className="card">
                    <div className='p2'>
                        {languageIs === 'en' ? 'OUR MISSION' : 'ภารกิจของพวกเรา'} 
                    </div>
                </div>
        <div className="card">
        <p>
          {languageIs === 'en' ? 'Our mission is to establish Thailand\'s first spaceport for space tourism and research.' 
          : 'ภารกิจของพวกเราคือการจัดตั้งสถานีอวกาศแห่งแรกของประเทศไทยสำหรับการท่องเที่ยวอวกาศและการวิจัย'} 
        </p>
      </div>
      </div>
      </ButtonStateProvider>
    )
}