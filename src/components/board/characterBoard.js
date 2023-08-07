import './characterBoard.scss';
import { useState, useContext } from "react";
import FirebaseContext from '../../context/firebase';
import styled, { ThemeProvider } from 'styled-components';

const FearBarStyled = styled.div`
background-color: #8F1B03;
width: 20px;
height: ${(props) => props.height}px;
max-height: 100px;
transform: rotate(180deg);
top: 0%;
margin-right: 5px;
`
const FearBar = ({height}) => {
    if (height >= 100 || height >= 200){
        let secondHeight = height - 100;
        let thirdHeight = height - 200;
        return (
        <div className='placeholder'>
        <FearBarStyled height={height}/>
        <FearBarStyled height={secondHeight}/>
        <FearBarStyled height={thirdHeight}/>
        </div>
        )

    }
    else{
        return (<div className='placeholder'> <FearBarStyled height={height}/> </div>)
    }
};

const StressP = styled.p`
    color: ${props => props.theme.main};
`
StressP.defaultProps = {
    theme: {
        main: 'green'
    }
};

const bothered = {
    main: 'yellow'
};

const stressed = {
    main: 'red'
}
;

const StressMeter = ({stress}) => {
    if (stress >= 300){
        return(
            <ThemeProvider theme={stressed}>
                <StressP> {stress} </StressP>
            </ThemeProvider>
        )
    }
    if (stress >= 200)
    {
        return(
            <ThemeProvider theme={bothered}>
                <StressP> {stress} </StressP>
            </ThemeProvider>
        )
    }
    return(
            <StressP> {stress} </StressP>
    )
}

const IncreseStressChevron = (props) => (
    <svg className='Chevron' width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="#fafafa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.25 14.25L12 10.75L8.75 14.25"/>
    </svg>
)

const DecreseStressChevron = (props) => (
    <svg className='Chevron' width="24" height="24" fill="none" viewBox="0 0 24 24">
        <path stroke="#fafafa" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.25 10.75L12 14.25L8.75 10.75"/>
    </svg>
)

const VerySmallButton = styled.button`
display: flex;
place-items: center;
background: transparent;
margin: 2px;
width: 30px;
height: 30px;
overflow: hidden;
border: none;
cursor: pointer;
:hover{
    //border: 1px solid #fafafa;

}
`

const CharacterBoard = ({time, group, name, stress, difficulty}) =>{

    const [stressState, setStressState] = useState(parseInt(stress));
    
    // console.log('diff: ', difficulty);
    // console.log('time: ', time);
    // console.log('stress: ', typeof stress);
    const {firebase} = useContext(FirebaseContext);
    
    const updateStress = async () => {
        try {
            await firebase.firestore().collection("groups").doc(group + 'id').collection('characters').doc(name + 'id').update({
                stress: stressState
            })
    }
     catch(error) {
         console.log('updateStress: ', error);

     }
    }

    console.log(group);

    return(
        <div className="CharacterPanel">
        <div className='Info'>
            <VerySmallButton onClick={() => {setStressState(stressState + 1); updateStress(); console.log(stressState)}}> <IncreseStressChevron/> </VerySmallButton>
            <VerySmallButton onClick={() => {setStressState(stressState - 1); updateStress(); console.log(stressState)}}> <DecreseStressChevron/> </VerySmallButton>

            <p>{name}</p>
            <StressMeter stress={stress}/>
        </div>

        <FearBar height={stress}  id='chart'/>

        </div>
    )
}
export default CharacterBoard;
