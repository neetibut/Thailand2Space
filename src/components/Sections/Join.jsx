import React,  { useContext } from 'react'
import ButtonStateContext from '../../context/ButtonStateContext';
import ButtonStateProvider from '../../context/ButtonStateProvider';
import { useScroll } from '../../context/ScrollContext'

export const JoinBtn = () => {
    const {scrollToJoin} = useScroll()
    return(
        <div>
            <button onClick={scrollToJoin}>JOIN</button>
        </div>
    )
}

export const JoinText = () => {
    const { languageIs, toggleButtonState } = useContext(ButtonStateContext);
    const {sectionRef_join} = useScroll() 
    const googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSdk0OufU5j8tJX5c2Uf9-EonJMxO9HBkT121sqj8DpPeHsnbg/viewform?embedded=true'

    return (
        <ButtonStateProvider>
        <div className='text-container' ref={sectionRef_join}>
            <div className='card'>
                <p className='header-text'>{languageIs === 'en' ? 'JOIN US' : 'สมัครงานกับพวกเรา'}</p>
            </div>
            <div className='card'>
                <iframe src={googleFormUrl} width="480" height="640" frameborder="0">Loading…</iframe>
            </div>
        </div>
        
        </ButtonStateProvider>
    )
}
