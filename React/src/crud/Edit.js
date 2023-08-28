import { useState, useEffect } from 'react';
import React from 'react';
import axios from 'axios';

const Edit = ({ item, editModalClose, handleEditSubmit}) => {

    const [edited, setEdited] = useState({
        "toilet_name" : "",
        "city": "",
        "county" : "",
        "load_address" : "",
        "num_address" : "",
        "open_time" : "",
        "disabledToilet" : "",
        "nappyToilet" : ""

      });

      useEffect(() => {
        axios.get(`http://localhost:8080/toilets/${item.id}`)
        // axios.get(`http://10.125.121.188:8080/toilets/${item.id}`)
          .then(response => {
            setEdited(response.data);
          })
          .catch(error => {
            console.error(error);
          });
      }, [item.id]);
    
      const onEditChange = (e) => {
        const { name, value } = e.target;
        setEdited(prevEdited => ({
          ...prevEdited,
          [name]: value
        }));
      };
    
    const onSubmitEdit = (e) => {
    e.preventDefault();
    
    // 수정된 데이터를 Spring Boot API로 HTTP PUT 요청으로 전송함.
    // axios.put(`http://10.125.121.188:8080/toilets/${item.id}`, edited)
    axios.put(`http://localhost:8080/toilets/${item.id}`, edited)
        .then(response => {
        // 필요에 따라 백엔드의 응답을 처리합니다.
        console.log("edited: ", edited);
        handleEditSubmit(edited);
        editModalClose(); // 수정이 완료되면 모달을 닫습니다.
        })
        .catch(error => {
        // 요청이 실패한 경우 에러를 처리합니다.
        console.error(error);
        });
    };

  return (
<div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto" id="edit-user-modal">
    <div className="relative w-full max-w-2xl px-4 md:h-auto bg-primary-100 rounded-lg shadow dark:bg-gray-800">
      <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
        <h3 className="text-xl font-semibold dark:text-white text-center w-full">화장실 정보 수정하기</h3>
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
                <div class="col-span-6 sm:col-span-6">
                    <label for="toilet_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">화장실명</label>
                    <input type="text" name="toilet_name" value={edited["toilet_name"]} onChange={onEditChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="화장실명을 입력하세요." required />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label for="city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">도시</label>
                    <input type="text" name="city" value={edited["city"]} onChange={onEditChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="도시명을 입력하세요." />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label for="county" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">구/군</label>
                    <input type="text" name="county" value={edited["county"]} onChange={onEditChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="구나 군을 입력하세요." />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label for="load_address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">도로명 주소</label>
                    <input type="text" name="load_address" value={edited["load_address"]} onChange={onEditChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="도로명 주소를 입력하세요." />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label for="num_address" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">지번 주소</label>
                    <input type="text" name="num_address" value={edited["num_address"]} onChange={onEditChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="지번 주소를 입력하세요." />
                </div>
                <div class="col-span-6 sm:col-span-2">
                    <label for="open_time" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">개방시간</label>
                    <input type="text" name="open_time" value={edited["open_time"]} onChange={onEditChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="개방시간을 입력하세요." />
                </div>
                <div class="col-span-6 sm:col-span-2">
                    <label for="disabled_toilet" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">장애인 화장실</label>
                    <input type="text" name="disabledToilet" value={edited["disabledToilet"]} onChange={onEditChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="있음 또는 없음" />
                </div>
                <div class="col-span-6 sm:col-span-2">
                    <label for="nappy_toilet" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">기저귀 교환대</label>
                    <input type="text" name="nappyToilet" value={edited["nappyToilet"]} onChange={onEditChange} class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="있음 또는 없음" />
                </div>
                {/* <div class="col-span-6">
                    <label for="biography" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biography</label>
                    <textarea id="biography" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="👨‍💻Full-stack web developer. Open-source contributor.">👨‍💻Full-stack web developer. Open-source contributor.</textarea>
                </div> */}
            </div>
            </form>
          </div>
          <div className="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
            <button type="submit" onClick={onSubmitEdit} className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              수정하기
            </button>
          </div>
        </div>
      </div>
  );
};

export default Edit;
