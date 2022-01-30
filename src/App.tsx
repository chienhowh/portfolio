import React from 'react';
import './App.scss';
import Header from './components/Header';
import { Routes, Route } from 'react-router-dom';
import { ROUTER } from './core/const/global-const';
import Home from './pages/Home';
import Info from './pages/Info';
import Contacts from './pages/Contacts';
import MovieList from './pages/MovieList';
;

function App() {
  return (<>
    <Header />
    <Routes>
      <Route path={ROUTER.HOME} element={<Home />}></Route>
      <Route path={ROUTER.INFO} element={<Info />}></Route>
      <Route path={ROUTER.CONTACTS} element={<Contacts />}></Route>
      <Route path={ROUTER.MOVIE_LIST} element={<MovieList />}></Route>
    </Routes>
    <footer></footer>
  </>
  );
}

export default App;
