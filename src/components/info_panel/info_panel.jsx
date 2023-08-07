import "./info_panel.scss";
import Skeleton from 'react-loading-skeleton';


const InfoPanel = ({light, stats, value}) => {
	console.log('eeeee: ',light, value);

    return( 
		<div className="InfoDisplay">
			<p>{light}</p>
			{/* <p>+8 <Crosshair/></p> */}
			<p className="Stats">{stats}</p>
			<p> {value} </p>
		</div>
		)
        

}

export default InfoPanel;