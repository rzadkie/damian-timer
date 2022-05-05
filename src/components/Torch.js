import React, {useEffect} from "react";
import { ReactComponent as Frame} from '..//dmn.svg';
import { ReactComponent as Handle} from '..//torch.svg';
import '../scss/Torch.scss';
// import Flame from "./Flame";



export default function Torch({diff}){

    const bar = document.getElementById('Bar');
    const shrinkKeyframes = new KeyframeEffect(
        bar,[
            {transform: `scaleX(${diff})`}
        ],
        {duration: 3000, fill:'forwards'}
    )
    
    const shrinkAnimation = new Animation(shrinkKeyframes, document.timeline);

    useEffect(() => {
        shrinkAnimation.play();
    }, [diff])

    
    return(
        <div className="Torch">

            <Handle className="Handle"/>
            {/* <Flame /> */}
            
            <Frame className="BarFrame" />
            <div className="LoadingBar" id="Bar" />
        </div>
    )
}