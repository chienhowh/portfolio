import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTER } from '../core/const/global-const';
;


function Header() {
  return (<nav>
    <ul className='w-3/4 flex justify-around text-2xl p-6'>
      <li > <NavLink to={`/${ROUTER.HOME}`} className={({ isActive }) => {
        return isActive ? "text-main" : ""

      }}>首頁</NavLink></li>
      <li> <NavLink to={`/${ROUTER.INFO}`} className={({ isActive }) => {
        return isActive ? "text-main" : ""

      }}>簡介</NavLink></li>
      <li> <NavLink to={`/${ROUTER.CONTACTS}`} className={({ isActive }) => {
        return isActive ? "text-main" : ""

      }}>聯絡方式</NavLink></li>
    </ul>



  </nav>);
}

export default Header;
