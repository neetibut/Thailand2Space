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
        <div className="card">
            <p className='header-text'>
            {languageIs === 'en' ? 'OUR TEAM' : 'ทีมงาน'} 
            </p>
        </div>
        <div className="card">
            <p>
            {languageIs === 'en' ? 'Neetibut (Neeti) Vasinondha' : 'นีติบุตร (นิติ) วสีนนท์'} 
            </p>
        </div>
        <div className="card">
            <p>
            {languageIs === 'en' ? 'Neeti is our Project Leader, he holds an MEng in Medical Engineering from the School of Engineering and Material Science at Queen Mary University of London. Prior to this role, he co-founded a food and technology startup in London, UK. He led the company to profitability and its acquisition by a leading Asia-Pacific hospitality group publicly-traded on the Thailand Stock Exchange. Neeti is motivated and determined to realise his childhood dream in space exploration and aim to help drive the growth of space tourism and research in Thailand.' : 'นิติเป็นผู้นำโครงการของเรา เขาได้รับปริญญาวิศวกรรมแพทย์จากวิทยาลัยวิศวกรรมและวัสดุศาสตร์ที่ Queen Mary University of London ก่อนที่จะเข้าสู่บทบาทนี้ เขาเป็นผู้ร่วมก่อตั้งสตาร์ทอัพด้านอาหารและเทคโนโลยีในลอนดอน สหราชอาณาจักร เขาเป็นผู้นำบริษัทให้ไปสู่การทำกำไรและการเข้าร่วมธุรกิจโดยการเข้าซื้อขายโดยกลุ่มอุตสาหกรรมเกี่ยวกับการบริการด้านการต้อนรับแห่งหนึ่งในภูมิภาคเอเชียแปซิฟิก ในตลาดหลักทรัพย์แห่งประเทศไทย นิติมีความกระตือรือร้นและมุ่งมั่นที่จะเปลี่ยนความฝันในวัยเด็กให้เป็นจริงในการสำรวจอวกาศและมีเป้าหมายที่จะช่วยส่งเสริมการเติบโตของการท่องเที่ยวอวกาศและงานวิจัยในประเทศไทย'} 
            </p>
        </div>
        <div className="card">
            <p>
            {languageIs === 'en' ? 'Chusana (Tee) Prasertkul' : 'ชุษณา (ตี่) ประเสริฐกุล'} 
            </p>
        </div>
        <div className="card">
            <p>
            {languageIs === 'en' ? 'Tee is our Project Coordinator, she holds a BSc in Psychology from the School of Psychology at the University of Nottingham. She also holds an MBA from Bayes Business School at City Univerisity. Prior to this role, she was Marketing director and Managing director to a startup and two publicly traded companies operating in the UK, Singapore and Thailand. Her most recent post was Chief of Staff for a leading AI consultancy firm in Thailand. Tee has deep interest and expertise in unlocking and unleashing people\'s talents and is focused on building the group\'s culture and strategic collaborations with all stakeholders.' : 'ตี่เป็นผู้ประสานงานโครงการของเรา เธอได้รับปริญญาตรีในสาขาจิตวิทยาจากคณะจิตวิทยาที่ University of Nottingham และเธอยังได้รับปริญญาโทในสาขาการบริหารธุรกิจจาก Bayes Business School ที่ City University ก่อนที่จะเข้าสู่บทบาทนี้ เธอเคยเป็นผู้อำนวยการทางการตลาดและผู้อำนวยการผู้บริหารให้กับสตาร์ทอัพและบริษัทในตลาดหลักทรัพย์สองแห่งที่ดำเนินธุรกิจในสหราชอาณาจักร สิงคโปร์ และประเทศไทย ตำแหน่งล่าสุดของเธอเป็น Chief of Staff ในบริษัทที่ให้คำปรึกษาด้าน AI ชั้นนำในประเทศไทย ตี่มีความสนใจและความเชี่ยวชาญในการปลดล็อกและปลุกพลังความสามารถของบุคคล และเธอมุ่งมั่นที่จะสร้างวัฒนธรรมในกลุ่มและสร้างความร่วมมือกับผู้สนใจทั้งหมด'} 
            </p>
        </div>
        </div>
        </ButtonStateProvider>
    )
}
