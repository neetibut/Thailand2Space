import React,  { useContext } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../vite.svg'
import '../App.css'
import ButtonStateContext from '../context/ButtonStateContext';
import ButtonStateProvider from '../context/ButtonStateProvider';
import myImage from '../assets/thailand2space_logo2.png';
import { useScroll } from '../context/ScrollContext';


const Logo = () => {
    const {sectionRef_about} = useScroll()
    const { languageIs, toggleButtonState } = useContext(ButtonStateContext);
    const ImageDisplay = ({ src, altText }) => {
        return (
          <div>
            <img src={src} alt={altText} />
          </div>
        );
      };
    return(
        <ButtonStateProvider>
            <div>
            <div>
                {/* <h1>Thailand2Space</h1> */}
                <a href="https://thailand2space.com" target="_blank">
                    {/* <ImageDisplay src={myImage} className="logo" altText="Thailand2Space logo" /> */}
                    <img src={myImage} className="logo2" alt="Thailand2Space logo" />
                </a></div>
                {/* <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                </div> */}
                
                <div ref={sectionRef_about} className="card">
                    <div className='p2'>
                    {languageIs === 'en' ? 'ABOUT US' : 'เกี่ยวกับพวกเรา'}
                        {/* {languageIs === 'en' ? 'In 2023, the mission is on!' : 'ในปี ๒๕๖๖ ภารกิจใด้เริ่มขึ่นแล้ว!'}  */}
                    </div>
                </div>
            </div>
        </ButtonStateProvider>
    )
}

export default Logo 