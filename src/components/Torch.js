import React, {useState} from "react";
import { ReactComponent as Frame} from '..//dmn.svg';
import '../scss/Torch.scss';


export default function Torch({min, sec}){
    // const iniit = (min * 60) + sec;
    // const [init, setInit] = useState(iniit );
    // let progress = (min * 60) + sec;
    // let diff = progress / init;
    // console.log(init, diff, progress);
    // const barL = {
    //     scale: `${diff}`        
    // };

    return(
        <div className="Torch">
            <Frame className="BarFrame" >
            </Frame>
            <div className="LoadingBar" ></div>
        </div>
    )
}