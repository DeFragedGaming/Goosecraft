import './style.css';


import { BiMenuAltRight } from 'react-icons/bi';
import { AiOutlineClose } from 'react-icons/ai';
import SectionOne from "./sections/section1/Home";
import SectionTwo from "./sections/section2/community";




function Webcontent(){
    return(
        <>
        <div className="open-menu">
         <BiMenuAltRight id='m' classname='open' />  
         <AiOutlineClose id='m' classname='close' />   
        </div>
        
    <div className="menu">
    <ul>
    <a href="#home" className='active'>
        home
        </a>
    <a href="#community">community</a>
    <a href="#server">server</a>
    <a href="#streams">streams</a>
    <a href="#about us">about us</a>
    </ul>

</div>
      <SectionOne />
      <SectionTwo />
     
    </>
  );
}

export default Webcontent;
