import '../scss/Timer.scss';
import Torch from './Torch';
import React, { useState, useEffect } from "react";
import data from './data.json';



export default function Incrementer(){



        const [value, setValue] = useState(100);
        const [diffLevel, setDiffLevel] = useState(data.difficulty[0]);

        const expValue = value / 100;

        const [light, setLight] = useState('');

        
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
        setLight(data.typeOfLight[0]);
        if(value >= 51 && value <= 75)
        setLight(data.typeOfLight[1]);
        if(value >= 26 && value <= 50)
        setLight(data.typeOfLight[2]);
        if(value >= 1 && value <= 25)
        setLight(data.typeOfLight[3]);
        if(value === 0) 
        setLight(data.typeOfLight[4]);
        });

        //works?
    return(
        <div className="Background">
            <Torch diff={expValue}/>
        <div className="Background2">
        
        <div className="BTNsL">
        {Object.entries(data.difficulty).map(type => (
        <button
        className='DiffButton'
        key={type}
        active={data.difficulty === type} 
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
                <p> {value} </p>
            </div>

            <form>
            <button type="submit">reset</button>
            </form>

        </div>

        <div className="BTNsR">
        <button className="BigButtonAlt" disabled={stopHundred} onClick={() => setValue(value + diffLevel.value[0])}> {diffLevel.value[0]} </button>
        <button className="BigButtonAlt" disabled={stop} onClick={() => setValue(value + diffLevel.value[1])}> {diffLevel.value[1]} </button>
        <button className="BigButtonAlt" disabled={stop} onClick={() => setValue(value + diffLevel.value[2])}> {diffLevel.value[2]} </button>
        <button className="BigButtonAlt" disabled={stop} onClick={() => setValue(value + diffLevel.value[3])}> {diffLevel.value[3]} </button>
        <button className="BigButtonAlt" disabled={stop} onClick={() => setValue(value + diffLevel.value[4])}> {diffLevel.value[4]} </button>


        </div>

        </div>
        </div>


    )
}