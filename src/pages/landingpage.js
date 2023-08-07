import { Link } from 'react-router-dom';
import * as ROUTES from '../constants/routes';
import '../scss/LandingPage.scss';

const LandingPage = () => {


    return(
        <div className='Container'>
            <h1>Who are you?</h1>
            <div className='ButtonContainer'>
                <Link to={ROUTES.GAME_MASTER}>
                <div className='Button'>

                    Game Master
                </div>
                </Link>
                <Link to={ROUTES.PLAYER}>
                <div className='Button'>
                    Player
                </div>
                </Link>
            </div>
        </div>
    )
}
export default LandingPage;