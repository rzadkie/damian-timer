import "../scss/Timer.scss";
import Torch from "./Torch";
import React, { useState, useEffect, useContext, useReducer } from "react";
import styled, { keyframes } from "styled-components";
import data from "./data.json";
import FearStat from "./FearStat";
import { collection_mechanics, grp} from "../services/firebase";
import { onSnapshot } from "firebase/firestore";
import FirebaseContext from "../context/firebase";
import CharacterListBoardOnSelect from "./board/characterListBoardSelect";
import Controls from "./controls/controls";
import InfoPanel from "./info_panel/info_panel";
import Time from "../utils/time";
import { useSelector, useDispatch } from "react-redux";
import { increment, set_fetched_state } from "../store/lightSlice";
import Timer from "./Timer";



const Reset = (props) => (
	<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
	 viewBox="0 0 500 500" >
	<path fill={props.fill} d="M492.1,213.8h-62.2C412.6,111.5,323.6,33.5,216.5,33.5C97,33.5,0.1,130.5,0.1,250S97,466.5,216.5,466.5
		c54.5,0,104.3-20.2,142.3-53.4L314,356.2c-25.7,23.6-59.9,38.1-97.4,38.1c-79.6,0-144.3-64.7-144.3-144.3s64.7-144.3,144.3-144.3
		c67.1,0,123.4,46,139.5,108.1h-63c-7.9,0-10.3,5.1-5.3,11.2l95.8,117.9c5,6.2,13.1,6.2,18.2,0L497.6,225
		C502.4,218.9,500,213.8,492.1,213.8z"/>
	</svg>

)

const glow = keyframes`
0%{
  filter: drop-shadow(0px 0px ${props => props.time}px #8f1b03);
  }
20%{
  filter: drop-shadow(0px 0px ${props => props.time}px #8f1b03);
  }
40%{
  filter: drop-shadow(0px 0px 20px #8f1b03);
  }
60%{
  filter: drop-shadow(0px 0px ${props => props.time}px #8f1b03);
  }
80%{
  filter: drop-shadow(0px 0px 10px ${props => props.color});
  }
100%{
  filter: drop-shadow(0px 0px ${props => props.time}px ${props => props.color});
  }    
`;

const Turn = styled.button`
align-self: center;
animation: ${glow} ${props => props.time}s linear;
animation-iteration-count: infinite;
`;

const Incrementer = () => {
	const dispatch = useDispatch();
	
	const [initialLight, setInitalLight] = useState()
	const value = useSelector((state) => state.lighter.value);
	const { firebase } = useContext(FirebaseContext);
	const [diffLevel, setDiffLevel] = useState(data.difficulty[0]);
	const [stats, setStats] = useState("");
	const [chr, setChr] = useState('')
	const [scope, getScope] = useState('');
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState('')

	const [light, setLight] = useState();
	console.log(value);

	let [time, setTime] = useState(30);
	const [run, setRun] = useState(false);


	const delayUpdate = ()  => {
		return new Promise((resolve) => {
			setTimeout(() => {
			updateValues(light, value, scope)
			resolve();
			}, 2000)
		})
	}


	const updateValues = async (value, scope) => {
		try {
			console.log('works?', value, scope, Date.now())
			await firebase.firestore().collection("groups").doc(scope + 'id').update({
			light_value: value
			})
		} catch (error) {
			console.log('update failed: ', error)
		}
	}



    const selectScope = (name) => {
        getScope(name);
        console.log(scope);
    }

	
	const expValue = value / 100;


	const selectChr = (character) => {
		setChr(character);
		console.log(character);
	}


	const tmr = new Time();

	const stTmr = () => {
		tmr.start();
		setInterval(() => {
			const timeInSeconds = Math.round(tmr.getTime() / 1000);
			setSeconds(timeInSeconds);
			tmr.isRngChk();

		  }, 1000)
	
	}

	class initialFetch {
		constructor(scope){
			this.scope = scope;
			this.firebase = firebase;
		}
	}

	class Zrx {
		constructor(light_name, light_value, scope){
			//this.light_name = light_name;
			this.light_value = light_value;
			this.scope = scope;
			this.firebase = firebase;
		}
	}

	useEffect(() => {
		console.log(diffLevel);
		if (value >= 76) {
			setLight(data.typeOfLight[0].name);
			switch (diffLevel.name) {
				case "normal":
					setStats(data.typeOfLight[0].statModifier.normal);
					break;
				case "hard":
					setStats(data.typeOfLight[0].statModifier.hard);
					break;
				case "extreme":
					setStats(data.typeOfLight[0].statModifier.extreme);
					break;
				case "impossible":
					setStats(data.typeOfLight[0].statModifier.impossible);
					break;
				default:
			}
		}
		if (value >= 51 && value <= 75) {
			setLight(data.typeOfLight[1].name);
			switch (diffLevel.name) {
				case "normal":
					setStats(data.typeOfLight[1].statModifier.normal);
					break;
				case "hard":
					setStats(data.typeOfLight[1].statModifier.hard);
					break;
				case "extreme":
					setStats(data.typeOfLight[1].statModifier.extreme);
					break;
				case "impossible":
					setStats(data.typeOfLight[1].statModifier.impossible);
					break;
				default:
			}
		}
		if (value >= 26 && value <= 50) {
			setLight(data.typeOfLight[2].name);
			switch (diffLevel.name) {
				case "normal":
					setStats(data.typeOfLight[2].statModifier.normal);
					break;
				case "hard":
					setStats(data.typeOfLight[2].statModifier.hard);
					break;
				case "extreme":
					setStats(data.typeOfLight[2].statModifier.extreme);
					break;
				case "impossible":
					setStats(data.typeOfLight[2].statModifier.impossible);
					break;
				default:
			}
		}
		if (value >= 1 && value <= 25) {
			setLight(data.typeOfLight[3].name);
			switch (diffLevel.name) {
				case "normal":
					setStats(data.typeOfLight[3].statModifier.normal);
					break;
				case "hard":
					setStats(data.typeOfLight[3].statModifier.hard);
					break;
				case "extreme":
					setStats(data.typeOfLight[3].statModifier.extreme);
					break;
				case "impossible":
					setStats(data.typeOfLight[3].statModifier.impossible);
					break;
				default:
			}
		}
		if (value === 0) {
			setLight(data.typeOfLight[4].name);
			switch (diffLevel.name) {
				case "normal":
					setStats(data.typeOfLight[4].statModifier.normal);
					break;
				case "hard":
					setStats(data.typeOfLight[4].statModifier.hard);
					break;
				case "extreme":
					setStats(data.typeOfLight[4].statModifier.extreme);
					break;
				case "impossible":
					setStats(data.typeOfLight[4].statModifier.impossible);
					break;
				default:
			}
		}
	});



	// useEffect(() => {
	// 	const tm = Time.clock();
	// 	console.log(tm, ':DDD');

	// }, [])
	
	useEffect(() => {
		if (run) {
			if (time > 0) {
				setTimeout(() => setTime(time - 1), 1000);
			}
			if (time === 0) {
				clearTimeout();
				setTime(30);
				setRun(false);
			}
		}
	}, [run, time]);

	const [groups, setGroups] = useState(null);

	useEffect(() => {
		const updateGroup = onSnapshot(grp, (snapshot) => {
			setGroups(snapshot.docs.map((group) => ({ ...group.data() })));
		});

		return () => {
			updateGroup();
		};
	}, []);
	

	// if (scope){	
	// 	dispatch(set_fetched_state(new initialFetch(scope)));
	// }

	// nagle zwraca promisa zamiast payload funkcji
	console.log(value);
	return (
		<div className="Background">
			<FearStat diff={expValue} difficulty={diffLevel.fright} groups={groups} selectedCharacters={setChr} getScope={selectScope}/>
			<div className="Background2">
			<Torch diff={expValue} min={minutes} sec={seconds}/>
			<Controls/>
			{/* <button onClick={() => dispatch(set_fetched_state(new initialFetch(scope)))}>xxx</button> */}
			{/* <button onClick={() => xqx}>zzz</button> */}

			<div className="Board">
  
            
  			<CharacterListBoardOnSelect time={expValue} difficulty={diffLevel.fright} characters={chr}/>

   			</div>


			</div>
			<div className="UtilBckg">

			<div className="Background4">
			<div className="BTNsL">
					{Object.entries(data.difficulty).map((type) => (
						<button
							className="BigButton"
							key={type}
							onClick={() => {
								setDiffLevel(type[1]);
							}}
						>
							{type[1].name}
						</button>
					))}
					<Turn className="BigButton" time={time} animation={'glow'} onClick={() => setRun(true)}>
						Start Turn <div>{time}</div>
					</Turn>
					<button
						className="BigButton"
						onClick={() => stTmr()}
					>
						start
					</button>
					<button
						className="BigButton"
						onClick={() => tmr.stop()}
					>
						stop
					</button>
					<button
						className="BigButton"
						onClick={() => tmr.reset()}
					>
						reset
					</button>
				</div>


				<div className="BTNsR">
					<button
						className="BigButton"
						onClick={() => {
							dispatch(increment(new Zrx(light, diffLevel.value[0], scope)));
						}}
					>
						{" "}
						{diffLevel.value[0]}{" "}
					</button>
					<button
						className="BigButton"
						onClick={() => {
							dispatch(increment(new Zrx(light, diffLevel.value[1], scope)));
						}}
					>
						{" "}
						{diffLevel.value[1]}{" "}
					</button>
					<button
						className="BigButton"
						onClick={() => {
							dispatch(increment(new Zrx(light, diffLevel.value[2], scope)));
						}}
					>
						{" "}
						{diffLevel.value[2]}{" "}
					</button>
					<button
						className="BigButton"
						onClick={() => {
							dispatch(increment(new Zrx(light, diffLevel.value[3], scope)));
						}}
					>
						{" "}
						{diffLevel.value[3]}{" "}
					</button>
					<button
						className="BigButton"
						onClick={() => {
							dispatch(increment(new Zrx(light, diffLevel.value[4], scope)));
						}}
					>
						{" "}
						{diffLevel.value[4]}{" "}
					</button>
				</div>
			</div>
			<div className="Background3">
				<div className="CenterPanel">
					<InfoPanel light={light} value={value} stats={stats}/>
				</div>
			</div>
			</div>

		</div>
	);
};
export default Incrementer;