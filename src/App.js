import './scss/App.scss';
import React ,{ useState, Suspense, lazy } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import * as ROUTES from './constants/routes';
import GameMaster from './pages/game-master';
import LandingPage from './pages/landingpage';
import NotFound from './pages/notfound';
import Player from './pages/player';
import PlayerSheet from './pages/player_sheet';

//const NotFound = lazy(() => import("./pages/notfound"));
//const GameMaster = lazy(() => import("./pages/game-master"));


function App() {

  return (
      <Suspense fallback={<p> loading... </p>}>
        <Routes>
          <Route path={ROUTES.GAME_MASTER} element={<GameMaster/>} />
          <Route path={ROUTES.LANDING} element={<LandingPage/>} />
          <Route path={ROUTES.PLAYER} element={<Player/>}/>
          <Route path={ROUTES.PLAYER_SHEET} element={<PlayerSheet/>}/>
          <Route element={<NotFound/>}/>

        </Routes>
      </Suspense>
  )
}

export default App;
