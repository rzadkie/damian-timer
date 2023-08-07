import './characterBoard.scss';
import Skeleton from 'react-loading-skeleton';
import CharacterBoard from "./characterBoard";

const CharacterListBoardOnSelect = ({difficulty, time, characters}) =>{


    //console.log("diff in charListBoard: ", difficulty);
    return  !characters ? (<div><p>Firebase lived up to it's name</p> <Skeleton count={6} height={150}> </Skeleton></div>) : characters.length > 0 ? (
        <div className="BoardWrapper" >
                    {characters.map((character) =>(

                    <CharacterBoard
                    key={character.name + Math.random}
                    name={character.name}
                    group={character.group}
                    stress={character.stress}
                    difficulty={difficulty}
                    time={time}
                    />
                    ))}
                    
                </div>
    ) : null
}
export default CharacterListBoardOnSelect;