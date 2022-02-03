import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../core/const/global-const';
;


function Header() {
  return (<div className='border-b border-slate-300'>
    <nav className='max-w-screen-xl mx-auto '>
      <ul className='flex text-xl md:text-2xl p-6'>
        <li className='mr-4'> <NavLink to={`/${ROUTER.HOME}`} className={({ isActive }) => {
          return isActive ? "text-main" : ""

        }}>首頁</NavLink></li>
        <li className='mr-4'> <NavLink to={`/${ROUTER.INFO}`} className={({ isActive }) => {
          return isActive ? "text-main" : ""

        }}>簡介</NavLink></li>
        <li className='mr-4'> <NavLink to={`/${ROUTER.CONTACTS}`} className={({ isActive }) => {
          return isActive ? "text-main" : ""

        }}>聯絡方式</NavLink></li>
        <li className='mr-4'> <NavLink to={`/${ROUTER.MOVIE_LIST}`} className={({ isActive }) => {
          return isActive ? "text-main" : ""

        }}>電影清單</NavLink></li>
      </ul>
    </nav>
  </div>);
}

export default Header;
