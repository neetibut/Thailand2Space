import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
    
  const [language, setLanguage ] = useState(false)
    
  const handleClick = () => {
      setLanguage((preState) => !preState)
    }

  return (
    <>
    {/* logo */}
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {/* logo */}
      
      {/* title */}
      <h1>Thailand2Space</h1>
      {/* title */}
      {/* button - change language */}
      <button onClick={handleClick}>
        {language ? 'English' : 'Thai'}
      </button>
      {/* button - change language */}
      <div className="card">
        <p>
          {language ? 'In 2023, the mission is on!' : 'ในปี ๒๕๖๖ ภารกิจใด้เริ่มขึ่นแล้ว!'} 
        </p>
      </div>
      <div className="card">
        <p>
          {language ? 'Thailand2Space is currently a member-funded research and development group of multidiscipline professionals lead by engineers, entrepreneurs, architects and artists. We are working on a master plan to design, build and operate Thailand\'s first spaceport for space tourism. We aim to establish a partnership with Virgin Galactic, Blue Origin and SpaceX to provide commercial spaceflight service from Thailand by 2030.' : 'Thailand2Space เป็นกลุ่มวิจัยและพัฒนาที่ได้รับการสนับสนุนจากสมาชิกซึ่งประกอบด้วยนักวิศวกร ผู้ประกอบการ สถาปนิก และศิลปินหลายสาขาวิชาการ กำลังทำงานร่วมกันเพื่อจะออกแบบและสร้างสนามจรวดอวกาศแห่งแรกของประเทศไทยสำหรับการท่องเที่ยวอวกาศ โดยเรามีเป้าหมายเพื่อที่จะเป็นพันธมิตรกับ Virgin Galactic, Blue Origin และ SpaceX เพื่อให้บริการการเดินทางอวกาศแบบพาณิชย์จากประเทศไทยในปี 2030'} 
        </p>
      </div>
      <div className="card">
        <p>
          {language ? 'We aim to win the government contract and form partnerships with all relevant authorities to make access to space safe, efficient and enjoyable for everyone.' : 'เรามีเป้าหมายที่จะชนะสัญญาการเป็นผู้รับเหมางานจากรัฐบาลและสร้างพันธมิตรกับหน่วยงานที่เกี่ยวข้องทุกอย่างเพื่อทำให้การเข้าถึงอวกาศเป็นเรื่องปลอดภัย มีประสิทธิภาพและเป็นเรื่องที่น่าสนุกสนานสำหรับทุกคน'}  
        </p>
      </div>
      <div className="card">
        <p>
          {language ? 'Our preliminary research is now available to read via our weekly newsletter on Substack. Free subscription will keep you updated with our progress. A paid-subscription will help fund the Thailand2Space mission!' : 'การวิจัยเบื้องต้นของเราตอนนี้มีให้อ่านได้ผ่านจดหมายข่าวสัปดาห์ล่าสุดของเราบน Substack การสมัครสมาชิกฟรีจะช่วยให้คุณได้รับข่าวสารตามความก้าวหน้าของเรา การสมัครสมาชิกแบบจ่ายเงินจะช่วยให้เราได้เงินทุนสนับสนุนภารกิจ Thailand2Space!'} 
        </p>
      </div>
      <p className="read-the-docs">
        {language ? 'If you are interested in our project whether as an investor or to join our team, you can contact us via hello@Thailand2Space.com' : 'หากคุณสนใจในโครงการของเราไม่ว่าจะเป็นในฐานะนักลงทุนหรือเข้าร่วมทีมงานของเรา คุณสามารถติดต่อเราได้ทางอีเมล hello@Thailand2Space.com'}
      </p>
    </>
  )
}

export default App
