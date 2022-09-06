import './scss/App.scss';
import React ,{ useState, Suspense, lazy } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import GameMaster from './pages/game-master';
import LandingPage from './pages/landingpage';
import NotFound from './pages/notfound';
import Player from './pages/player';

//const NotFound = lazy(() => import("./pages/notfound"));
//const GameMaster = lazy(() => import("./pages/game-master"));


function App() {

  return (
    <BrowserRouter>
      <Suspense fallback={<p> loading... </p>}>
        <Routes>
          <Route path={ROUTES.GAME_MASTER} element={<GameMaster/>} exact/>
          <Route path={ROUTES.LANDING} element={<LandingPage/>} exact/>
          <Route path={ROUTES.PLAYER} element={<Player/>} exact/>
          <Route element={<NotFound/>}/>

        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;
