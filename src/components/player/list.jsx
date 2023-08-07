import Character from "../character/character"
import './list.scss'


const List = ({characters}) => {

return(
    <div className="List">   
    {
        characters.map(player => (
        <Character
        name={player.name}
        avatar={player.avatar_url}
        stress={player.stress}
        scope={player.group}
        use_case='player_select_menu'
        key={player.length+Math.random()}
        />
            ))
        }
    </div>

)
}
export default List;
