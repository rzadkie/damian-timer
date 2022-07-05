import '../scss/Timer.scss';
import Torch from './Torch';
import React, { useState, useEffect } from "react";
import data from './data.json';
import BtnSvg from './button';
import FearStat from './FearStat';




const Incrementer = () =>{
        const [value, setValue] = useState(100);
        const [diffLevel, setDiffLevel] = useState(data.difficulty[0]);
        const [stats, setStats] = useState('');

        const expValue = value / 100;

        const [light, setLight] = useState('');



        useEffect(() => {
          console.log(diffLevel);
                                
        if(value >= 76){
          setLight(data.typeOfLight[0].name);  
          switch (diffLevel.name){
            case 'normal': setStats(data.typeOfLight[0].statModifier.normal);
            break;
            case 'hard': setStats(data.typeOfLight[0].statModifier.hard);
            break;
            case 'extreme': setStats(data.typeOfLight[0].statModifier.extreme);
            break;
            case 'impossible': setStats(data.typeOfLight[0].statModifier.impossible);
            break;
            default:
            };
        }
        if(value >= 51 && value <= 75){
          setLight(data.typeOfLight[1].name);
          switch (diffLevel.name){
            case 'normal': setStats(data.typeOfLight[1].statModifier.normal);
            break;
            case 'hard': setStats(data.typeOfLight[1].statModifier.hard);
            break;
            case 'extreme': setStats(data.typeOfLight[1].statModifier.extreme);
            break;
            case 'impossible': setStats(data.typeOfLight[1].statModifier.impossible);
            break;
            default:
            };
        }
        if(value >= 26 && value <= 50){
          setLight(data.typeOfLight[2].name);
          switch (diffLevel.name){
            case 'normal': setStats(data.typeOfLight[2].statModifier.normal);
            break;
            case 'hard': setStats(data.typeOfLight[2].statModifier.hard);
            break;
            case 'extreme': setStats(data.typeOfLight[2].statModifier.extreme);
            break;
            case 'impossible': setStats(data.typeOfLight[2].statModifier.impossible);
            break;
            default:
            };
        }
        if(value >= 1 && value <= 25){
          setLight(data.typeOfLight[3].name);
          switch (diffLevel.name){
            case 'normal': setStats(data.typeOfLight[3].statModifier.normal);
            break;
            case 'hard': setStats(data.typeOfLight[3].statModifier.hard);
            break;
            case 'extreme': setStats(data.typeOfLight[3].statModifier.extreme);
            break;
            case 'impossible': setStats(data.typeOfLight[3].statModifier.impossible);
            break;
            default:
            };
        }
        if(value === 0){
          setLight(data.typeOfLight[4].name);
          switch (diffLevel.name){
            case 'normal': setStats(data.typeOfLight[4].statModifier.normal);
            break;
            case 'hard': setStats(data.typeOfLight[4].statModifier.hard);
            break;
            case 'extreme': setStats(data.typeOfLight[4].statModifier.extreme);
            break;
            case 'impossible': setStats(data.typeOfLight[4].statModifier.impossible);
            break;
            default:
            };
        }
        });

        //works?
    return(
      <div className="Background">
            <Torch diff={expValue}/>
        <div className="Background2">
        
          <div className="BTNsL">
          {Object.entries(data.difficulty).map(type => (
          <button
          className='BigButton'
          key={type}
          onClick={() => {
            setDiffLevel(type[1]);
          }}
            >
              {type[1].name}
            </button>
          ))}
        </div>
        
          <div className="CenterPanel">
              <div className="InfoDisplay">
                  <p>{light}</p>
                  <p className='Stats'>{stats}</p>
                  <p> {value} </p>
              </div>
        
              <form >
              <button className="BigButton" type="submit">reset</button>
              </form>
        
          </div>
        
            <div className="BTNsR">
              <button className="BigButton" disabled={value == 0} onClick={() => setValue(value + diffLevel.value[0])}> {diffLevel.value[0]} </button>
              <button className="BigButton" disabled={value == 0} onClick={() => setValue(value + diffLevel.value[1])}> {diffLevel.value[1]} </button>
              <button className="BigButton" disabled={value == 0} onClick={() => setValue(value + diffLevel.value[2])}> {diffLevel.value[2]} </button>
              <button className="BigButton" disabled={value == 0} onClick={() => setValue(value + diffLevel.value[3])}> {diffLevel.value[3]} </button>
              <button className="BigButton" disabled={value == 100} onClick={() => setValue(value + diffLevel.value[4])}> {diffLevel.value[4]} </button>
            </div>



        </div>
          <FearStat diff={expValue} difficulty={diffLevel.fright}/>
      </div>

    )
}
export default Incrementer;