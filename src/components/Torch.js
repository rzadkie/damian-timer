import React, {useState, useEffect} from "react";
import { ReactComponent as Frame} from '..//dmn.svg';
import '../scss/Torch.scss';


export default function Torch({min, sec, bld}){
    const [init, setInit] = useState('');

    useEffect(() => {
        setInit((min * 60) + sec);
    }, [bld ])
    
    let progress = (min * 60) + sec;
    let diff = progress / init;
    console.log(diff);
    const barL = {
        width: `${diff * 40}` + 'rem'        
    };
//hehe
    return(
        <div className="Torch">
            <Frame className="BarFrame" >
            </Frame>
            <div className="LoadingBar" style={barL} ></div>
        </div>
    )
}