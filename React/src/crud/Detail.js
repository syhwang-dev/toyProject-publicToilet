import React from 'react';
const Detail = ({ item, detailModalClose }) => {

    return (
<div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto" id="edit-user-modal">
    <div className="relative w-full max-w-2xl px-4 md:h-auto bg-primary-100 rounded-lg shadow dark:bg-gray-800">
      <div className="flex items-start justify-between p-5 border-b rounded-t dark:border-gray-700">
        <h3 className="text-xl font-semibold dark:text-white text-center w-full">"{item.toilet_name}" 화장실의 상세 정보</h3>
            
            <button type="button" onClick={detailModalClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          <div className="p-6 space-y-6">
        

 

              <div class="grid grid-cols-6 gap-6">

              <div className="col-span-6 sm:col-span-6">
                <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    화장실 이미지
                </label>
                <div className="flex items-center justify-center w-full">
                {/* 이미지를 부르는 곳 */}
                            {/* 이미지 표시 */}
                            <img
                // src={`http://10.125.121.188:8080/display/${item.id}`}
                src={`http://localhost:8080/display/${item.id}`}

                alt="화장실 이미지"
                className="max-h-64 rounded-lg"
                />
                </div> 
            </div> 

                <div class="col-span-6 sm:col-span-3">
                    <label for="toilet_name" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">구분</label>
                    {/* <p className="text-lg text-gray-800 dark:text-white">{item.division}</p> */}
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <span className="text-md text-gray-800 dark:text-white">
                            {item.division}
                        </span>
                    </div>
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label for="city" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">관리기관명</label>
                    {/* <p className="text-lg text-gray-800 dark:text-white">{item.management_name}</p> */}
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <span className="text-md text-gray-800 dark:text-white">
                            {item.management_name}
                        </span>
                    </div>

                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label for="county" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">위도</label>
                    {/* <p className="text-lg text-gray-800 dark:text-white">{item.latitude}</p> */}
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <span className="text-md text-gray-800 dark:text-white">
                            {item.latitude}
                        </span>
                    </div>

                </div>
                <div class="col-span-6 sm:col-span-3">
                    <label for="load_address" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">경도</label>
                    {/* <p className="text-lg text-gray-800 dark:text-white">{item.longitude}</p> */}
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <span className="text-md text-gray-800 dark:text-white">
                            {item.longitude}
                        </span>
                    </div>

                </div>
                <div class="col-span-6 sm:col-span-2">
                    <label for="num_address" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">전화번호</label>
                    {/* <p className="text-lg text-gray-800 dark:text-white">{item.tellnumber}</p> */}
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <span className="text-md text-gray-800 dark:text-white">
                            {item.tellnumber}
                        </span>
                    </div>

                </div>
                <div class="col-span-6 sm:col-span-2">
                    <label for="open_time" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">설치연월</label>
                    {/* <p className="text-lg text-gray-800 dark:text-white">{item.establishment_date}</p> */}
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <span className="text-md text-gray-800 dark:text-white">
                            {item.establishment_date}
                        </span>
                    </div>

                </div>
                <div class="col-span-6 sm:col-span-2">
                    <label for="disabled_toilet" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">오물처리방식</label>
                    {/* <p className="text-lg text-gray-800 dark:text-white">{item.trash_processing}</p> */}
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <span className="text-md text-gray-800 dark:text-white">
                            {item.trash_processing}
                        </span>
                    </div>

                </div>
                <div class="col-span-6 sm:col-span-2">
                    <label for="nappy_toilet" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">비상벨설치여부</label>
                    {/* <p className="text-lg text-gray-800 dark:text-white">{item.emergency_bell}</p> */}
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <span className="text-md text-gray-800 dark:text-white">
                            {item.emergency_bell}
                        </span>
                    </div>

                </div>

                <div class="col-span-6 sm:col-span-2">
                    <label for="disabled_toilet" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">화장실입구CCTV설치유무</label>
                    {/* <p className="text-lg text-gray-800 dark:text-white">{item.cctv}</p> */}
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <span className="text-md text-gray-800 dark:text-white">
                            {item.cctv}
                        </span>
                    </div>

                </div>
                <div class="col-span-6 sm:col-span-2">
                    <label for="nappy_toilet" class="block mb-2 text-md font-medium text-gray-900 dark:text-white">데이터기준일자</label>
                    {/* <p className="text-lg text-gray-800 dark:text-white">{item.data_date}</p> */}
                    <div className="bg-gray-100 p-2 rounded-lg">
                        <span className="text-md text-gray-800 dark:text-white">
                            {item.data_date}
                        </span>
                    </div>

                </div>
                {/* <div class="col-span-6">
                    <label for="biography" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Biography</label>
                    <textarea id="biography" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="👨‍💻Full-stack web developer. Open-source contributor.">👨‍💻Full-stack web developer. Open-source contributor.</textarea>
                </div> */}
            </div>
          </div>
          <div className="items-center p-6 border-t border-gray-200 rounded-b dark:border-gray-700">
            <button type="submit" onClick={detailModalClose} className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              닫기
            </button>
          </div>
        </div>
      </div>
)
}


export default Detail;
