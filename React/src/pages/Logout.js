import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate  } from 'react-router-dom';

import logoutImg from '../assets/images/logout.png';

const Logout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림/닫힘 상태

    const navigate = useNavigate();
    // const handleLogout = async () => {
    //     try {
    //         await axios.post('http://10.125.121.188:8080/logout'); // 로그아웃 요청을 스프링 부트로 전달
    //         // 로그아웃 성공 시 필요한 동작 수행
    //         console.log('로그아웃 성공');
    //         // 이후 로그인 페이지로 이동 등의 동작 추가 가능
    //         alert("로그아웃되었습니다.")
    //         navigate('/main');
    //     } catch (error) {
    //         console.error('로그아웃 실패:', error);
    //     }
    // };

        const handleLogout = () => {
          // 로그아웃 처리: 토큰 삭제, 필요한 상태 초기화 등
          localStorage.removeItem('accessToken');
          // alert("로그아웃되었습니다.")
        //   console.log("로그아웃 후 토큰 값:", 'accessToken')

          setIsModalOpen(true); // 로그아웃 시 모달 열기
        };

        const handleCloseModal = () => {
          setIsModalOpen(false); // 모달 닫기
          // 로그아웃 후 메인 페이지로 이동
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
          // 모달 창 표시
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-gray-900">
              <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-screen-md" style={{ maxWidth: '400px' }}>
                  <div className="text-center">
                  <svg className="w-16 h-16 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
                      <h3 className="mt-5 mb-6 text-xl text-gray-500 dark:text-gray-400 font-semibold font-gamja">로그아웃되었습니다.</h3>
                      <button onClick={handleCloseModal} className="text-gray-900 bg-white font-semibold hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700 font-gamja">
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
