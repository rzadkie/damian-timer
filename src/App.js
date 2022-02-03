import './scss/App.scss';
import Timer from './components/Timer';
import Soundboard from './components/Soundboard';
import React ,{ useState } from 'react';


function App() {
  const types = ['Timer', 'Soundbaord'];  
  const [isActive, setActive] = useState(types[0]);

  

  return (

    <div className="App">

      <div className="AppInterface">
        
      {types.map(type => (
        <button
        className='SmallButton'
        key={type}
        active={isActive === type}
        onClick={() => setActive(type)}
          >
            {type}
          </button>
        ))}
      </div>

      <>
      {isActive === 'Timer' ? <Timer/> : <Soundboard/>

}
      </>      
      </div>  
  );
}

export default App;
