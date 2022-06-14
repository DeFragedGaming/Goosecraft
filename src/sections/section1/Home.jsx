import './Home.css';

import { SiYoutubegaming } from 'react-icons/si';
import { BsTwitch } from 'react-icons/bs';
import { FaDiscord } from 'react-icons/fa';
import { SiFacebookgaming } from 'react-icons/si';
import { FaRedditAlien } from 'react-icons/fa';
import img1 from '../props/Goosecraft_Logo.png';


function SectionOne() {
  return (
    <>
      <div className='section s1' id='home'>
        <h3>Home</h3>
        <div className='bg-wp'>
        <img src={img1} alt='' />
        </div>

        <div className='text-container'>
          <h1>Join the</h1>
          <h2>community</h2>

          <span>
          Join our Minecraft Community!
          Different Gamemodes such has SMP, our own Custom Bedwars, and much much more!
          </span>
        

          <a href='#community' className='explore-btn'>
            explore
          </a>
        </div>

        <div className='socials'>
          <SiYoutubegaming className='icon' />
          <BsTwitch className='icon' />
          <FaDiscord className='icon' />
          <SiFacebookgaming className='icon' />
          <FaRedditAlien className='icon' />
        </div>
      </div>
    </>
  );
}

export default SectionOne;
