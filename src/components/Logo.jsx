import React,  { useContext } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../vite.svg'
import '../App.css'

import ButtonStateContext from '../ButtonStateContext';
import ButtonStateProvider from '../ButtonStateProvider';


const Logo = () => {
    const { languageIs, toggleButtonState } = useContext(ButtonStateContext);
    return(
        <ButtonStateProvider>
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <h1>Thailand2Space</h1>
                <div className="card">
                    <p>
                        {languageIs === 'en' ? 'In 2023, the mission is on!' : 'ในปี ๒๕๖๖ ภารกิจใด้เริ่มขึ่นแล้ว!'} 
                    </p>
                </div>
            </div>
        </ButtonStateProvider>
    )
}

export default Logo 