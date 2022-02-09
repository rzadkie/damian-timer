import '../scss/Timer.scss';
import Torch from './Torch';
import React, { useState, useEffect } from "react";



export default function Incrementer(){



        const [value, setValue] = useState(100);
        const [minutes, setMinutes] = useState('0');
        const [amount, setAmount] = useState(10);
        const [diffLevel, setDiffLevel] = useState('Normal');

        const expValue = value / 100;

        const [light, setLight] = useState('');
        const typesOfLight = ['Radiant Light', 'Dim Light', 'Shadowy Glow', 'Dark' ,'Pitch Black'];
        const difficulty = ['Normal', 'Hard', 'Extreme 💀', 'ℑ𝔪𝔭𝔬𝔰𝔰𝔦𝔟𝔩𝔢👀'];
        const normal = [-100, -25, -4, -1, 25];
        const hard = [-100, -25, -5, -1, 25];
        const extreme = [-100, -25, -6, -1, 25];
        const imposible = [-100, -25, -7, -1, 25];
        
        let stop = false;
        let stopHundred = false;


        
        useEffect(() => {
          
        if(value >= 100){
          stopHundred = true;
          setValue(100)
        }
        else
          stopHundred = false;

        if(value <= 0){
          stop = true;
          setValue(0)

        }
        else
        stop = false;
        })



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

        let diff;
        switch(diffLevel){
          case difficulty[0]: 
              diff = normal;
            break;
          case difficulty[1]: 
              diff = hard;
            break;
          case difficulty[2]: 
              diff = extreme;
            break;
          case difficulty[3]: 
              diff = imposible;
          break;
          
        }


    return(
        <div className="Background">
            <Torch diff={expValue}/>
        <div className="Background2">
        
        <div className="BTNsL">
        {difficulty.map(type => (
        <button
        className='DiffButton'
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
        <button className="BigButtonAlt" disabled={stopHundred} onClick={() => setValue(value + diff[4])}> {diff[4]} </button>
        <button className="BigButtonAlt" disabled={stop} onClick={() => setValue(value + diff[3])}> {diff[3]} </button>
        <button className="BigButtonAlt" disabled={stop} onClick={() => setValue(value + diff[2])}> {diff[2]} </button>
        <button className="BigButtonAlt" disabled={stop} onClick={() => setValue(value + diff[1])}> {diff[1]} </button>
        <button className="BigButtonAlt" disabled={stop} onClick={() => setValue(value + diff[0])}> {diff[0]} </button>


        </div>

        </div>
        </div>


    )
}