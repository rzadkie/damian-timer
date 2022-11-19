import {useEffect, useState} from "react";

import Skeleton from 'react-loading-skeleton';
import { onSnapshot } from "firebase/firestore";

import { grp} from '../services/firebase';
import Group from "./group";

const GroupList = ({groups, scope}) =>{
    const [select, setSelect] = useState(false);

    console.log(select);

    
    return  !groups ? (<Skeleton className="CharacterList" count={1} height={150}/>) : groups.length > 0 ? (
        <div >
                    {
                    groups.map((group) =>(
                    <Group
                    key={group.name + Math.random}
                    name={group.name}
                    scope = {scope}
                    isSelected={select === true}
                    onSelect={() => setSelect(!select)}
                    />
                    ))}
                    
       </div>
    ) : null
}
export default GroupList;