
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
                    <div className='header-text'>
                        {languageIs === 'en' ? 'OUR MISSION' : 'ภารกิจของพวกเรา'} 
                    </div>
                </div>
        <div className="card">
        <p>
          {languageIs === 'en' ? 'Our mission is to pioneer Thailand\'s space tourism industry by designing, constructing, and operating the nation\'s inaugural spaceport. We are dedicated to pushing the boundaries of human exploration, revolutionizing the space sector, and offering an unparalleled experience to visitors. Through relentless innovation, sustainable practices, and collaboration with partners, we aim to establish Thailand as a global leader in space tourism, fostering economic growth, technological advancement, and inspiring future generations to embrace the wonders of space.' 
          : 'พันธกิจของเราคือการเป็นผู้นำในอุตสาหกรรมการท่องเที่ยวอวกาศในประเทศไทย โดยการออกแบบ ก่อสร้าง และดำเนินการสนามอวกาศแห่งแรกในชาติ พวกเรามุ่งมั่นที่จะยกระดับขีดจำกัดของการสำรวจมนุษย์ แปลงวงจรของอุตสาหกรรมอวกาศ และให้ประสบการณ์ที่ไม่เคยเกิดขึ้นมาก่อนให้กับผู้เยี่ยมชม ผ่านนวัตกรรมที่ไม่รู้จบ ปฏิบัติการที่ยั่งยืน และความร่วมมือกับพันธมิตร เรามุ่งเน้นที่จะสร้างความเป็นผู้นำระดับโลกในการท่องเที่ยวอวกาศให้แก่ประเทศไทย ส่งเสริมการเติบโตทางเศรษฐกิจ การก้าวหน้าทางเทคโนโลยี และแรงบันดาลใจสำหรับรุ่นหลังให้ยอมรับความสำคัญของอวกาศ'} 
        </p>
      </div>
      </div>
      </ButtonStateProvider>
    )
}