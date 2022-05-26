import './characterBoard.scss';
import { useEffect, useState, useContext } from "react";
import FirebaseContext from '../../context/firebase';


export default function CharacterBoard({time, name, stress, difficulty}){

    const [stressState, setStressState] = useState(parseInt(stress));
    
    console.log('diff: ', difficulty);
    console.log('time: ', time);
    console.log('stress: ', typeof stress);
    const {firebase} = useContext(FirebaseContext);


    const heg ={
        height: `${stressState}px`
    };

    // const bar = document.getElementById('chart');
    // const shrinkKeyframes = new KeyframeEffect(
    //     bar,[
    //         {height: `${stressState}rem`}
    //     ],
    //     {duration: 3000, fill:'forwards'}
    // )
    
    // const shrinkAnimation = new Animation(shrinkKeyframes, document.timeline);

    // useEffect(() => {
    //     shrinkAnimation.play();
    // }, [stressState])


    const updateStress = async () => {
        try {
            await firebase.firestore().collection("characters").doc(name + 'id').update({
                stress: stressState
            })
    }
     catch(error) {

     }
    }


    console.log(difficulty);
    return(
        <div className="CharacterPanel">
                    <div className='Info'>
            <button className='VerySmallButton' onClick={() => {setStressState(stressState +1); updateStress()}}> + </button>
            <button className='VerySmallButton' onClick={() => {setStressState(stressState -1); updateStress()}}> - </button>

            <p>{name}</p>
            <p>{stressState}</p>
        </div>
            <div className='placeholder'>

        <div style={heg} className="Chart" id='chart'>
        
        </div>

        </div>


        </div>
    )
}