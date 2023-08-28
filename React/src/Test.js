import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import logoutImg from '../assets/images/logout.png';

const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <div>
      <button
        type="button"
        className="w-9 h-9 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        onClick={handleLogout}
      >
        <img className="w-full h-full" src={logoutImg} alt="Logout" />
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900">
          <div className="bg-white rounded-lg shadow-lg p-6" style={{ maxWidth: '90vw' }}>
            <div className="text-center">
              <svg
                className="w-16 h-16 mx-auto text-red-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <h3 className="mt-5 mb-6 text-lg text-gray-500 dark:text-gray-400 font-gamja">
                로그아웃되었습니다.
              </h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 font-gamja"
              >
                확인
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Logout;
