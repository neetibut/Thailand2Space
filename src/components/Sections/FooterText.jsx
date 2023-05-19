import React, { useContext } from 'react'
import ButtonStateContext from '../../context/ButtonStateContext'
import ButtonStateProvider from '../../context/ButtonStateProvider'

const FooterText = () => {
    const {languageIs} = useContext(ButtonStateContext)
    
    return (
        <ButtonStateProvider>
            <div className='text-container'>
                <div className='card'><div className="read-the-docs">
                    {languageIs === 'en' ? 'If you are interested in our project whether as an investor or to join our team, you can contact us via thailand2space@gmail.com' : 'หากคุณสนใจในโครงการของเราไม่ว่าจะเป็นในฐานะนักลงทุนหรือเข้าร่วมทีมงานของเรา คุณสามารถติดต่อเราได้ทางอีเมล thailand2space@gmail.com'}
                </div></div>
                <div className='card'><p3 className='read-the-docs'>&copy; 2023 Thailand2Space</p3></div>
                
            </div>
        </ButtonStateProvider>
            )
}

export default FooterText 