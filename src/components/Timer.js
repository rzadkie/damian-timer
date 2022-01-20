import '../scss/Timer.scss';
import Torch from './Torch';
import React, { useState, useEffect } from "react";



export default function Timer (){



        const [seconds, setSeconds] = useState('');
        const [minutes, setMinutes] = useState('');
        const [speed, setSpeed] = useState(1000);
        const [bloodyFuckingStupid, setBloodyFuckingStupid] = useState(false);
        useEffect(() => {

            if (bloodyFuckingStupid){
                if (seconds > 0) {
                    setTimeout(() => setSeconds(seconds - 1), speed);
                    }
                if (seconds === 0){
                    if (minutes === 0){
                        clearTimeout();
                        setSeconds(0);
                        setMinutes(0);
                    }
                    
                    else {
                        setSeconds(59);
                        setMinutes(minutes - 1);
                    }
        }
        //setSum((minutes / 60) + seconds);
        //console.log(sum);
        }}, [bloodyFuckingStupid, seconds, speed, minutes]);

        
    return(
        <div className="Background">
            <Torch min = {minutes} sec = {seconds} bld={bloodyFuckingStupid}/>
        <div className="Background2">
        
        <div className="BTNsL">
        <button className="Button" onClick={() => setSpeed(500)}> 200% </button>
        <button className="Button"onClick={() =>{ setSpeed(2000)}} > 50% </button>
        <button className="Button" onClick={() => { if(bloodyFuckingStupid){
             setBloodyFuckingStupid(false);
        }}} > Pause </button>
        </div>

        <div className="CenterPanel">
            <div className="CenterCenterPanel">
                <p >radiant light for:</p>
                <p> {minutes} {seconds} </p>
            </div>

            <form /* onSubmit={timeHandler} method="POST" */  >

            <label >czas
            <br/>
            <div className="TimeLabel">
            <input type="text" className="TimeForm" name="time" placeholder="MM" 
            onChange={({target}) => setMinutes(target.value)}/>
            <input type="text" className="TimeForm" name="time" placeholder="SS" max="60"
            onChange={({target}) => setSeconds(target.value)}/>
            
                
            </div>
            
            </label>
            <button type="submit">reset</button>
            </form>
        </div>

        <div className="BTNsR">
        <button className="Button" onClick={() => [setSpeed(1000)]}> 100% </button>
        <button className="Button" onClick={() =>{ setSpeed(2500)}} > 25% </button>
        <button className="Button" onClick={() => { if(!bloodyFuckingStupid){
             setBloodyFuckingStupid(true);
        }}} >Start </button>
        </div>

        </div>

        </div>

    );
}