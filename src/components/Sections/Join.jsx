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
    return (
        <ButtonStateProvider>
        <div className='text-container'>
            <div className='card'>
                <p ref={sectionRef_join}>{languageIs === 'en' ? 'JOIN US' : 'สมัครงานกับพวกเรา'}</p>
            </div>
            <div className='google-form'>
                <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdk0OufU5j8tJX5c2Uf9-EonJMxO9HBkT121sqj8DpPeHsnbg/viewform?embedded=true" width="600" height="702" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </div>
        
        </ButtonStateProvider>
    )
}
