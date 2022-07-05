import './characterBoard.scss';
import { useEffect, useState, useContext } from "react";
import FirebaseContext from '../../context/firebase';
import styled from 'styled-components';

const FearBarStyled = styled.div`
background-color: #8F1B03;
width: 20px;
height: ${(props) => props.height}px;
max-height: 100px;
transform: rotate(180deg);
top: 0%;
margin-right: 5px;
`
const FearBar = ({height}) =>{
    if (height >= 100){
        let newHeight = height - 100;
        return (
        <div className='placeholder'>
        <FearBarStyled height={height}/>
        <FearBarStyled height={newHeight}/>
        </div>
        )

    }
    else{
        return (<div className='placeholder'> <FearBarStyled height={height}/> </div>)

    }

};

const VerySmallButton = styled.button`
margin: 2px;
width: 30px;
height: 30px;
`

const CharacterBoard = ({time, name, stress, difficulty}) =>{

    const [stressState, setStressState] = useState(parseInt(stress));
    
    console.log('diff: ', difficulty);
    console.log('time: ', time);
    console.log('stress: ', typeof stress);
    const {firebase} = useContext(FirebaseContext);

    const updateStress = async () => {
        try {
            await firebase.firestore().collection("characters").doc(name + 'id').update({
                stress: stressState
            })
    }
     catch(error) {
         console.log('updateStress: ', error);

     }
    }

    console.log(difficulty);
    return(
        <div className="CharacterPanel">
                    <div className='Info'>
            <VerySmallButton onClick={() => {setStressState(stressState +1); updateStress()}}> + </VerySmallButton>
            <VerySmallButton onClick={() => {setStressState(stressState -1); updateStress()}}> - </VerySmallButton>

            <p>{name}</p>
            <p>{stressState}</p>
        </div>

        <FearBar height={stressState}  id='chart'>
        
        </FearBar>



        </div>
    )
}
export default CharacterBoard;