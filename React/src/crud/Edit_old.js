import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const Edit = ({ item, editModalClose, handleEditSubmit}) => {
    const [editData, setEditData] = useState({});

    const [edited, setEdited] = useState({
        "화장실명": "",
        "구분" : "",

      });

      useEffect(() => {
        axios.get(`http://localhost:8080/toilets/${item.번호}`)
          .then(response => {
            setEditData(response.data);
            setEdited(response.data); // 초기값으로 받은 데이터를 수정 상태로 설정
          })
          .catch(error => {
            console.error(error);
          });
      }, [item.번호]);
    
      const onEditChange = (e) => {
        setEdited({
          ...edited,
          [e.target.name]: e.target.value
        });
      };
    
    const onSubmitEdit = (e) => {
    e.preventDefault();

    
    // 수정된 데이터를 Spring Boot API로 HTTP PUT 요청으로 전송합니다.
    axios.put(`http://localhost:8080/toilets/${item.번호}`, edited)
        .then(response => {
        // 필요에 따라 백엔드의 응답을 처리합니다.
        console.log("edited: ", edited);
        console.log(response.data);
        handleEditSubmit(edited);
        editModalClose(); // 수정이 완료되면 모달을 닫습니다.
        })
        .catch(error => {
        // 요청이 실패한 경우 에러를 처리합니다.
        console.log("edited: ", edited);
        console.error(error);
        });
    };

  return (
    <div className="fixed left-0 right-0 z-50 items-center justify-center overflow-x-hidden overflow-y-auto top-4 md:inset-0 h-modal sm:h-full" id="edit-user-modal">
      <div className="relative w-full h-full max-w-2xl px-4 md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-800">
          <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
            <h3 className="text-xl font-semibold dark:text-white">화장실 정보 수정하기</h3>
            <button type="button" onClick={editModalClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-6">
            {/* 수정할 정보들을 입력 받는 폼 요소들 */}
            <form onSubmit={onSubmitEdit}>
              {/* 폼 요소들 */}
              <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-3">
                    <label for="first-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">화장실명</label>
                    <input type="text" name="화장실명" value={edited["화장실명"]} onChange={onEditChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="화장실명을 입력하세요." required />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label for="last-name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">구분</label>
                    <input type="text" name="구분" value={edited["구분"]} onChange={onEditChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Green" required />
                </div>
                {/* <div class="col-span-6 sm:col-span-3">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                    <input type="email" name="email" value="bonnie@flowbite.com" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="example@company.com" required />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label for="position" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Position</label>
                    <input type="text" name="position" value="React Developer" id="position" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="e.g. React developer" required />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label for="current-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Current Password</label>
                    <input type="password" name="current-password" value="••••••••" id="current-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="••••••••" required />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label for="new-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                    <input type="password" name="new-password" value="••••••••" id="new-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="••••••••" required />
                </div>
                <div class="col-span-6">
                    <label for="biography" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biography</label>
                    <textarea id="biography" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="👨‍💻Full-stack web developer. Open-source contributor.">👨‍💻Full-stack web developer. Open-source contributor.</textarea>
                </div> */}
            </div>
            </form>
          </div>
          <div className="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
            <button type="submit" className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Save all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edit;
