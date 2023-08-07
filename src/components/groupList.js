import {useEffect, useState} from "react";

import Skeleton from 'react-loading-skeleton';
import { onSnapshot } from "firebase/firestore";

import { grp} from '../services/firebase';
import Group from "./group";

const GroupList = ({groups, scope}) =>{
    const [isSelected, setSelected] = useState();

    const act = (name) => {
        setSelected(name)
    }

    
    return  !groups ? (<Skeleton className="CharacterList" count={1} height={150}/>) : groups.length > 0 ? (
        <div >
                    {
                    groups.map((group) =>(
                    <Group
                    key={group.name}
                    name={group.name}
                    scope={scope}
                    active={act}
                    select={isSelected === group.name}
                    />
                    ))}
                    
       </div>
    ) : null
}
export default GroupList;