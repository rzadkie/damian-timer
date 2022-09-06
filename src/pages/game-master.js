import '../scss/App.scss';
import Timer from '../components/Timer';
import Soundboard from '../components/Soundboard';
import Incrementer from '../components/Incrementer';
import React ,{ useState } from 'react';
import styled from 'styled-components';

const Tab = styled.button`
padding: 10px 20px;
cursor: pointer;
opacity: 0.6;
border: 0;
outline: 0;
color: white;

${({ active }) =>
  active &&
  `
  border-bottom: 2px solid white;
  opacity: 1;
  color: #d19f49;
  border-color: #d19f49;
  `}`;

function GameMaster() {
  const types = ['Timer', 'Soundboard', 'Incrementer'];  
  const [isActive, setActive] = useState(types[0]);

 

  return (

    <div className="App">

      <div className="AppInterface">
        
      {types.map(type => (
        <Tab
        className='SmallButton'
        key={type}
        active={isActive === type}
        onClick={() => setActive(type)}
          >
            {type}
          </Tab>
        ))}
      </div>

      {
        {
          'Timer': <Timer/>,
          'Soundboard': <Soundboard/>,
          'Incrementer': <Incrementer/>
        }[isActive]
      }     
      </div>  
  );
}

export default GameMaster;
