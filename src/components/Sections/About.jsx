import React,  { useContext } from 'react'
import ButtonStateContext from '../../context/ButtonStateContext';
import ButtonStateProvider from '../../context/ButtonStateProvider';
import { useScroll } from '../../context/ScrollContext'

export const AboutBtn = () => {
    const { scrollToAbout } = useScroll()
    return(
        <div>
            <button onClick={scrollToAbout}>ABOUT</button>
        </div>
    )
}

export const AboutText = () => {
    const { languageIs, toggleButtonState } = useContext(ButtonStateContext);

    return(
        <ButtonStateProvider>
        <div className='text-container'>
        <div className="card">
            <p>
            {languageIs === 'en' ? 'Thailand2Space is a member-funded research and development group of multidiscipline professionals lead by engineers, entrepreneurs, architects and artists. We are working on a master plan to design, build and operate Thailand\'s first spaceport for space tourism. We aim to establish partnerships with Virgin Galactic, Blue Origin and SpaceX to provide commercial spaceflight service from Thailand by 2030.' 
            : 'Thailand2Space เป็นกลุ่มวิจัยและพัฒนาที่ได้รับการสนับสนุนจากสมาชิกซึ่งประกอบด้วยนักวิศวกร ผู้ประกอบการ สถาปนิก และศิลปินหลายสาขาวิชาการ กำลังทำงานร่วมกันเพื่อออกแบบและสร้างสนามจรวดอวกาศแห่งแรกของประเทศไทยสำหรับการท่องเที่ยวอวกาศ โดยเรามีเป้าหมายเพื่อที่จะเป็นพันธมิตรกับ Virgin Galactic, Blue Origin และ SpaceX เพื่อให้บริการการเดินทางอวกาศแบบพาณิชย์จากประเทศไทยภายในปี 2030'} 
            </p>
        </div>
        <div className="card">
            <p>
            {languageIs === 'en' ? 'We aim to win the government contract and form partnerships with all relevant authorities to make access to space safe, efficient and enjoyable for everyone.' : 'เรามีเป้าหมายที่จะชนะสัญญาการเป็นผู้รับเหมางานจากรัฐบาลและสร้างพันธมิตรกับหน่วยงานที่เกี่ยวข้องทุกองค์กรเพื่อทำให้การเข้าถึงอวกาศเป็นเรื่องปลอดภัย มีประสิทธิภาพและเป็นเรื่องที่น่าสนุกสนานสำหรับทุกคน'}  
            </p>
        </div>
        <div className="card">
            <p>
            {languageIs === 'en' ? 'Follow our progress via our weekly newsletter on Substack. Free subscription will keep you updated with our progress. A paid-subscription will help fund the Thailand2Space mission!' : 'การวิจัยเบื้องต้นของเราตอนนี้มีให้อ่านได้ผ่านจดหมายข่าวสัปดาห์ล่าสุดของเราบน Substack การสมัครสมาชิกฟรีจะช่วยให้คุณได้รับข่าวสารตามความก้าวหน้าของเรา การสมัครสมาชิกแบบจ่ายเงินจะช่วยให้เราได้เงินทุนสนับสนุนภารกิจ Thailand2Space!'} 
            </p>
        </div>
        </div>
        </ButtonStateProvider>
    )
}
