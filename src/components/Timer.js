import '../scss/Timer.scss';
import Torch from './Torch';
import React, { useState, useEffect } from "react";




export default function Timer (){



        const [seconds, setSeconds] = useState('0');
        const [minutes, setMinutes] = useState('0');
        const [speed, setSpeed] = useState(1000);
        const [bloodyFuckingStupid, setBloodyFuckingStupid] = useState(false);
        const [isRunning, setIsRunning] = useState(0);
        const storage = window.localStorage
        useEffect(() => {

            if (bloodyFuckingStupid){
                if (seconds === 0 && minutes > 0){
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
                if (seconds > 0 || minutes > 0){
                        setTimeout(() => setSeconds(seconds - 1), speed)


                        if (seconds === 0 && minutes === 0){
                            clearTimeout();
                            setSeconds(0);
                            setMinutes(0);                          
                        }
                    }


        }}, [bloodyFuckingStupid, seconds, speed, minutes]);

        const [init, setInit] = useState('');

        useEffect(() => {
            setInit(((minutes * 60) * 60) + (seconds * 60));
        }, [bloodyFuckingStupid])
        
        const timeDiff = () =>{
            setBloodyFuckingStupid(true);
            storage.setItem('time', init);

        }
        const initialTime = storage.getItem('time');
        let progress = ((minutes * 60) * 60) + (seconds * 60);
        let diff = progress / initialTime ;
        
        
        const [light, setLight] = useState('');
        const typesOfLight = ['Radiant Light', 'Dim Light', 'Shadowy Glow', 'Dark' ,'Pitch Black'];
        
        useEffect(() => {
                                
        if(diff >= 0.76)
        setLight(typesOfLight[0]);
        if(diff >= 0.51 && diff <= 0.75)
        setLight(typesOfLight[1]);
        if(diff >= 0.26 && diff <= 0.50)
        setLight(typesOfLight[2]);
        if(diff >= 0.01 && diff <= 0.25)
        setLight(typesOfLight[3]);
        if(diff === 0)
        setLight(typesOfLight[4]);
        });

        const [name, setName] = useState('Pause');

    return(
        <div className="Background">
            <Torch diff={diff}/>
        <div className="Background2">
        
        <div className="BTNsL">
        <button className="BigButton" onClick={() => setSpeed(500)}> 200% </button>
        <button className="BigButton"onClick={() =>{ setSpeed(2000)}} > 50% </button>
        <button className="BigButton" onClick={() => { if(bloodyFuckingStupid){
             setBloodyFuckingStupid(false);
             setName('Start')

        }
        else{
            setBloodyFuckingStupid(true);
            setName('Pause')

        }
        }} > {name} </button>
        </div>

        <div className="CenterPanel">
            <div className="CenterCenterPanel">
                <p>{light}</p>
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

            <button type="submit" onClick={() => storage.clear()}> reset  
            </button>
            </form>
        </div>

        <div className="BTNsR">
        <button className="BigButton" onClick={() => setSpeed(1000) }> 100% </button>
        <button className="BigButton" onClick={() =>{ setSpeed(2500)}} > 25% </button>
        <button className="BigButton" disabled={isRunning === 2} onClick={() =>{ 
            timeDiff();
            setIsRunning(isRunning + 1);
        }}
        >Begin </button>
        </div>

        </div>

        </div>

    );
}