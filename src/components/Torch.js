import React, {useState, useEffect} from "react";
import { ReactComponent as Frame} from '..//dmn.svg';
import '../scss/Torch.scss';


export default function Torch({diff}){

    const barL = {
        transform: `scaleX(${diff})`
    };
    return(
        <div className="Torch">
            <Frame className="BarFrame" >
            </Frame>
            <div className="LoadingBar" style={barL} ></div>
        </div>
    )
}