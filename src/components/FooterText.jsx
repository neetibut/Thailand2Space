import React, { useContext } from 'react'
import ButtonStateContext from '../ButtonStateContext'
import ButtonStateProvider from '../ButtonStateProvider'

const FooterText = () => {
    const {languageIs} = useContext(ButtonStateContext)
    return(
        <ButtonStateProvider>
            <div>
            <p className="read-the-docs">
        {languageIs === 'en' ? 'If you are interested in our project whether as an investor or to join our team, you can contact us via tourism@thailand2space.com' : 'หากคุณสนใจในโครงการของเราไม่ว่าจะเป็นในฐานะนักลงทุนหรือเข้าร่วมทีมงานของเรา คุณสามารถติดต่อเราได้ทางอีเมล tourism@Thailand2Space.com'}
      </p></div>
        </ButtonStateProvider>
    )
}

export default FooterText 