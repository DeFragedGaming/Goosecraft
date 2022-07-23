import './community.css';

import { BsChevronDoubleRight } from 'react-icons/bs';



    
function SectionTwo() {
  return (
    <div className='section s2' id='community'>
      <div className='container'>
        <h3>Community</h3>

        <div className='card' style={{ '--k': 1 }}>
       
          <p>
            MineCraft Server Information <br />
            <i>
            

            </i>
          </p>
        </div>

        <div className='card' style={{ '--k': 2 }}>
          
          <p>
            Garena Free Fire <br/>
            <i>
              Voluptatum asperiores id atque consequuntur temporibus! Autem
              delectus quo maxime natus impedit placeat deleniti veniam
              mollitia.
            </i>
          </p>
        </div> 

        <div className='card' style={{ '--k': 3 }}>
         
          <p>
            Player Unknown's Battlegrounds- PUBG
            <br />
            <i>
              Fugit quidem, similique odit, dolorum error deleniti voluptatem
              libero ducimus eum cupiditate neque beatae fugiat iste consequatur
              itaque hic modi eaque nesciunt!
            </i>
          </p>
        </div> 

        <div className='community'>
          <span>View more</span>
          <BsChevronDoubleRight className='arrow-right' />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
