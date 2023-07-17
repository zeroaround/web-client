import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import MakeMap from './function/MakeMap';
import Bookmarkpage from './pages/Bookmarkpage';
import Articlepage from './pages/Articlepage';
import FindWaypage from './pages/FindWaypage';
import MapHomepage from './pages/MapHomepage';
import MyPagepage from './pages/MyPagepage';

import { MapIcon, FindWayIcon, ArticleIcon, BookMarkIcon, MypageIcon } from './components/menubarData';

import './menu/CSS/InitMenubar.css';

function App() {
  return (
    <div className="App">
      <MakeMap />
      <div className="InitMenubar">
        <div>
          <nav className="MainMenubar">
            <img id="zeroAround" src="/menuIcon/zeroAround.png" />
            <Link to="/mapHome">
              <MapIcon />
            </Link>
            <Link to="/findway">
              <FindWayIcon />
            </Link>
            <Link to="/article">
              <ArticleIcon />
            </Link>
            <Link to="/bookMark">
              <BookMarkIcon />
            </Link>
            <Link to="/myPage">
              <MypageIcon />
            </Link>
          </nav>

          <Routes>
            <Route path="/mapHome" element={<MapHomepage />}></Route>
            <Route path="/findway" element={<FindWaypage />}></Route>
            <Route path="/article" element={<Articlepage />}></Route>
            <Route path="/bookmark" element={<Bookmarkpage />}></Route>
            <Route path="/myPage" element={<MyPagepage />}></Route>
          </Routes>
        </div>

        <div className="SpecificMenubar">
          <img id="openbutton" src="/buttonImg/openMenubar.png" />
        </div>
      </div>
    </div>
  );
}

export default App;
