import "./controls.scss";
import { useReducer, useState } from "react";
import styled from "styled-components";
import Interval from "../../hooks/useInterval";
import Time from "../../utils/time";


const Sun = () => (
    <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="3.25" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 2.75V4.25"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 6.75L16.0659 7.93416"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.25 12.0001L19.75 12.0001"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.25 17.2501L16.0659 16.066"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 19.75V21.25"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.9341 16.0659L6.74996 17.25"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4.25 12.0001L2.75 12.0001"/>
  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.93405 7.93423L6.74991 6.75003"/>
</svg>

)

const Torch = () => (
    <svg version="1.1" width="24" height="24" x="0px" y="0px"
         viewBox="0 0 24 24" >
<g>
    <path class="T0" stroke="currentColor" d="M8,20.9c-4.2,0.6-2.2-6.1-2.2-6.1C6.9,11.7,5.1,9,5.1,9s4.8,1.1,4.5,4.1c-0.1,1.5,0.6,2.3,1.4,2.7"/>
	<path class="T0" stroke="currentColor" d="M9,7.7c0,0-1.6-4.1,3.7-5.9l1.2-0.4c0,0-3.5,2.8-2.4,4.8s3.9,4.7,2.4,6.5"/>
	<path class="T0" stroke="currentColor" d="M11,21.1c0,0,1.4,2.9,4.9,0.9c4.5-2.6,2.4-7,2.4-7l-1.9-3c0,0,1.3,4-0.4,5.1"/>
</g>
    </svg>
)

const Storm_lantern = () => (
<svg version="1.1"  width="24" height="24" x="0px" y="0px"
	 viewBox="0 0 24 24" >
<polygon stroke="currentColor" class="T4" points="17,21.7 7,21.7 8.5,16.7 15.5,16.7 "/>
<path stroke="currentColor" class="T1" d="M12,3.7H9.5l-2,4.8c-0.7,1.6-0.7,3.5-0.1,5.1l1.1,3H12"/>
<path stroke="currentColor" class="T1" d="M12,3.7h2.5l2,4.8c0.7,1.6,0.7,3.5,0.1,5.1l-1.1,3H12"/>
<rect stroke="currentColor" x="8.5" y="3.4" class="st0" width="7" height="0"/>
<path stroke="currentColor" class="T1" d="M8.5,3.4H7.3L2.7,14.8c-0.4,1,0.1,2.2,1.1,2.6l4,1.7"/>
<path stroke="currentColor" class="T1" d="M15.5,3.4h1.2l4.6,11.4c0.4,1-0.1,2.2-1.1,2.6l-4,1.7"/>
<rect stroke="currentColor" x="9" y="1.6" class="st2" width="6" height="0.9"/>
<path stroke="currentColor" class="T3" d="M7.3,3.4v-6.1c0-1.7,1.3-3,3-3H12"/>
<path stroke="currentColor" class="T3" d="M16.7,3.4v-6.1c0-1.7-1.3-3-3-3H12"/>
<path stroke="currentColor" class="T5" d="M14.4,11.8c0.5,1.5-0.7,3-0.7,3"/>

</svg>

)

const LightButton = styled.button`
background-color: ${props => props.selected ? '#6b67664d': '' };
:hover{
    background-color: ${props => props.selected ? '#6b67664d'  : '' };
}

  
`

const PressableButton = ({Icon, onPress, select, namee, active, id}) => {
    const [chosen, setChosen] = useState(select);
   // console.log(select, namee );

    return(
        <LightButton id={id} selected={select} className="SmlButton" onClick={() => active(namee)}>
            <Icon/>
        </LightButton>
    )

}

class LighSource{
    constructor(name, burning_time, light_intensity, flame_intesity){
        this.name = name;
        this.burning_time = burning_time;
        this.light_intensity = light_intensity;
        this.flame_intesity = flame_intesity;
    }

    lightUp(){
        const woo = Interval(Time.clock(this.burning_time), () => console.log('woosh'), this.flame_intesity);
        console.log('pali sie:', this.name, woo);
        return woo;
    }

    extinguish(){
        const woo = Interval(0, () => console.log('woosh'), this.flame_intesity);
        return woo;
    }


}


const Controls = () => {

    const torch = new LighSource('torch', 2000, 10, 1000);
    const sun = new LighSource('sun', 999999, 10, 1000);
    const stormLantern = new LighSource('stormLantern', 999999, 10, 1000);



    class Light_Sources{
        constructor() {
            this.sun = 'sun';
            this.torch = 'torch';
            this.storm_lantern = 'storm_lantern';
        }
    }
    const light = new Light_Sources();

    const [isSelected, setIsSelected] = useState();
    console.log(isSelected);
    const [typeOfLight, selectTypeOfLight] = useReducer(
        (prev, next) => {
          // console.log(next);

            // if(next == light.sun || light.torch || light.storm_lantern){
            //     //document.querySelector('.SmlButton').classList.add('select')
            // //console.log(next, 'xqx');
            //     setSelect(!select);
                
            // }
        }
    )
    
        const act = (n) => {
            setIsSelected(n)
        }

    //background-color: ${props => props.selected ? '#8f1a0356' : 'transparent'};
    
    return(
        <div className="ButtonContainer">
            <div className="LightSelector"> 
                <PressableButton id={"Sun"} Icon={Sun} onClick={() => selectTypeOfLight(sun)} 
                namee={sun.name} active={act} select={isSelected === sun.name}></PressableButton>
                
                <PressableButton id={"Torch"} Icon={Torch} onClick={() => selectTypeOfLight(torch)} 
                namee={torch.name} active={act} select={isSelected === torch.name}></PressableButton>

                <PressableButton id={"StormLantern"} Icon={Storm_lantern} onClick={() => selectTypeOfLight(stormLantern)} 
                namee={stormLantern.name} active={act} select={isSelected === stormLantern.name}></PressableButton>
                
            </div>
            <div className="Manage">
                <button className="SmlButton" onClick={() => {document.querySelector('.CharacterManagementMenu').classList.toggle('show')}}> manage </button>
            </div>



    
    

        </div>
    )
}
export default Controls;