import React, {useContext} from 'react'
import ButtonStateContext from '../../context/ButtonStateContext';
import ButtonStateProvider from '../../context/ButtonStateProvider';
import { useScroll } from '../../context/ScrollContext'

export const InvestBtn = () => {
    const { scrollToInvest } = useScroll()
    return (
        <div>
            <button onClick={scrollToInvest}>INVEST</button>
        </div>
    )
}

export const InvestText = () => {
    const { languageIs, toggleButtonState } = useContext(ButtonStateContext);
    const { sectionRef_invest } = useScroll() 
    return (
            <div ref={sectionRef_invest} className='text-container'>
                <div className='card'>
                    <p>{languageIs === 'en' ? 'INVESTORS' : 'นักลงทุน'}</p>
                </div>
                <div className='card'>
                    <p>{languageIs === 'en' ? 'Get ready to embark on an out-of-this-world opportunity to invest in, support, and own a piece of Thailand\'s first spaceport for space tourism. As a trailblazer in this cutting-edge venture, you\'ll be riding the wave of innovation that\'s set to reshape the future of space exploration and the economy of Thailand and Southeast Asia. By joining our daring mission, you\'ll be making history and shaping the space tourism industry, opening the cosmic gateway to unparalleled experiences for thrill-seekers, researchers, and businesses alike. Together, we\'ll defy gravity, push boundaries, and ignite the imagination of generations to come. Buckle up and join us for the ride of a lifetime as we revolutionize the way we explore the cosmos.' : 'ลงทุนในโอกาสที่ล้ำหลุดโลก เพื่อสนับสนุนและเป็นเจ้าของส่วนหนึ่งของท่าเรืออวกาศแห่งแรกในประเทศไทยสำหรับการท่องเที่ยวอวกาศ ในฐานะนักลงทุนในโครงการที่ทันสมัยนี้ คุณจะได้ร่วมเป็นส่วนสำคัญในการผลักดันนวัตกรรมที่กำลังจะเปลี่ยนแปลงอนาคตของการสำรวจอวกาศและเศรษฐกิจของประเทศไทยและเอเชียตะวันออกเฉียงใต้ ด้วยการเข้าร่วมภารกิจที่ท้าทายนี้ คุณจะเป็นผู้สร้างประวัติศาสตร์และเป็นส่วนหนึ่งในการรวมร่างอุตสาหกรรมการท่องเที่ยวอวกาศ เปิดทางเข้าไปสู่ประสบการณ์ที่ไม่เหมือนใครสำหรับนักผจญภัย นักวิจัย และนักธุรกิจ เราจะท้าทายแรงโน้มถ่วงไปพร้อมกัน ข้ามขีดจำกัด และมุ่งสู่โลกอนาคตของพวกเราทุกคน เตรียมพร้อมที่จะเข้าร่วมกับเราในการเปลี่ยนแปลงวิธีที่เราสำรวจจักรวาลและดูแลโลกของเราด้วยวิทยาศาสตร์ ความรักและความห่วงใย'}</p>
                </div>
                
            </div>
        )
}
