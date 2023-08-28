import React from 'react';
import { Link } from 'react-router-dom';
import Logout from './Logout';

import tableImg from '../assets/images/table.png';


const NavMain = () => {
  return (
    <div className="fixed top-0 right-0 p-4 flex space-x-4">
      <Link to="/table"> {/* 홈 버튼 클릭 시 /table 페이지로 이동 */}
        <button
          type="button"
          className="w-9 h-9 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          // border border-blue-500 보더 값 주기
        >
          <img className="w-full h-full" src={tableImg} alt="Home" />
        </button>
      </Link>
      <Logout /> 
    </div>
  );
};

export default NavMain;
