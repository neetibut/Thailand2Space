import React,  { useContext } from 'react'
import ButtonStateContext from '../../context/ButtonStateContext';
import ButtonStateProvider from '../../context/ButtonStateProvider';
import { useScroll } from '../../context/ScrollContext'

export const UpdatesBtn = () => {
    const {scrollToUpdates} = useScroll()
    return(
        <div>
            <button onClick={scrollToUpdates}>UPDATES</button>
        </div>
    )
}


export const UpdatesText = () => {
    const { languageIs, toggleButtonState } = useContext(ButtonStateContext);
    const {sectionRef_updates} = useScroll()

    return(
        <ButtonStateProvider>
        <div className='text-container'>
        <div ref={sectionRef_updates} className="card">
                    <div className='header-text'>
                        {languageIs === 'en' ? 'UPDATES' : 'ความคืบหน้า'} 
                    </div>
                </div>
        <div className="card">
        <p>
          {languageIs === 'en' ? 'Subscribe to our newsletter on Substack to follow our progress. Become a paid-member to help fund our effort and receive exclusive perks.' 
          : 'สมัครรับจดหมายข่าวสารจากเราบน Substack เพื่อติดตามความคืบหน้าของงานวิจัยและการพัฒนาของเรา สมัครเป็นสมาชิกแบบจ่านเงินรายเดือนเพื่อสนับสนุนงานของเราและรับสิทธิประโยชน์พิเศษที่ไม่เผยแพร่ให้ผู้อื่น'} 
        </p>
      </div>
      <div className="card">
      <iframe src="https://thailand2space.substack.com/embed" width="480" height="320" frameborder="0" scrolling="no"></iframe>
      </div>
      </div>
      </ButtonStateProvider>
    )
}