import '../scss/Timer.scss';
import Torch from './Torch';
import React, { useState, useEffect } from "react";



export default function Incrementer(){



        const [value, setValue] = useState(100);
        const [minutes, setMinutes] = useState('0');
        const [amount, setAmount] = useState(10);
        const [diffLevel, setDiffLevel] = useState('Normal');

        
        const [light, setLight] = useState('');
        const typesOfLight = ['Radiant Light', 'Dim Light', 'Shadowy Glow', 'Dark' ,'Pitch Black'];
        const difficulty = ['Normal', 'Hard', 'Extreme 💀', 'ℑ𝔪𝔭𝔬𝔰𝔰𝔦𝔟𝔩𝔢👀'];
        const normal = [-100, -25, -4, -1, 25];
        const hard = [-100, -25, -5, -1, 25];
        const extreme = [-100, -25, -6, -1, 25];
        const imposible = [-100, -25, -7, -1, 25];

        
        useEffect(() => {
                                
        if(value >= 76)
        setLight(typesOfLight[0]);
        if(value >= 51 && value <= 75)
        setLight(typesOfLight[1]);
        if(value >= 26 && value <= 50)
        setLight(typesOfLight[2]);
        if(value >= 1 && value <= 25)
        setLight(typesOfLight[3]);
        if(value === 0) 
        setLight(typesOfLight[4]);
        });


    return(
        <div className="Background">
            <Torch diff={value}/>
        <div className="Background2">
        
        <div className="BTNsL">
        {difficulty.map(type => (
        <button
        className='SmallButton'
        key={type}
        active={diffLevel === type}
        onClick={() => setDiffLevel(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* {
        {
          'Timer': <Timer/>,
          'Soundboard': <Soundboard/>,
          'Incrementer': <Incrementer/>
        }[isActive]
      }   */}
        <button className="BigButton" onClick={() => setValue(value - 4)}> + {amount} </button>
        <button className="BigButton"onClick={() =>{ setAmount(2000)}} > + {amount} </button>
        <button className="BigButton" onClick={() => setAmount(500)}> + {amount} </button>



        <div className="CenterPanel">
            <div className="CenterCenterPanel">
                <p>{light}</p>
                <p> {value} </p>
            </div>

            <form>
            <button type="submit">reset</button>
            </form>

        </div>

        <div className="BTNsR">
        <button className="BigButton" onClick={() => setAmount(1000) }> 100% </button>
        <button className="BigButton" onClick={() =>{ setAmount(2500)}} > 25% </button>
        <button className="BigButton" 
        >Begin </button>
        </div>

        </div>
        </div>


    )
}