import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Tr from './Tr';
import Add from './Add';
import NavTb from "../pages/NavTb";

import '../styles/index.css'
import {Link} from 'react-router-dom';

import Pagination from "react-js-pagination";
import styled from 'styled-components';
import TokenManager from "../pages/TokenManger";
import Cursor from '../Cursor';

const TableList = () => {





  const TableListContainer = styled.div`
  background-color: #2e87ec;
  `;







  // 행 번호를 위한 별도의 상태 변수를 사용합니다.
  const [startNumber, setStartNumber] = useState(1);

  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');

    // 모달창 관리
    const [addModalOn, setAddModalOn] = useState(false);
  

  // 페이징 코드
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const [postPerPage] = useState(10); // 페이지 당 보여줄 데이터 개수

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = info.slice(indexOfFirstPost, indexOfLastPost);
  const startingNumber = (currentPage - 1) * postPerPage + 1; // 페이징 번호 계산

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(11);
  

  // const [token, setToken] = useState('');  
  useEffect(()=> {
    console.log("안녕하세요")

    const storedToken  = localStorage.getItem('tokenData');
    console.log("4. storedToken 값:", storedToken)

    // axios.get('http://10.125.121.188:8080/toilets', {
    axios.get('http://localhost:8080/toilets', {
      // 이게 바로 "The Token has expired on" 에러의 원인--
      // headers: {
      //   Authorization: `${storedToken}`
      // }
      
    })
    // axios.get('http://localhost:8080/toilets')

    .then(res => {setInfo(res.data);
      const tokenData = res.headers.get('Authorization');
      console.log("tokenData!!!!!!!!!!", tokenData)


      // 페이징 처리에 따라 startNumber 업데이트
      setStartNumber((currentPage - 1) * postPerPage + 1);
    })
    .catch(err => {console.log(err)})
  }, [currentPage])

  const handleSave = (data) => {
    //데이터 수정하기(중요)
    if (data.id) {
      setInfo(
        info.map(row => data.id === row.id ? {
          // 모든 정보가져오기
          id: data.id,
          toilet_name: data.toilet_name,
          division: data.division,
          city: data.city,
          county: data.county,
          load_address: data.load_address, 
          num_address: data.num_address,
          open_time: data.open_time,
          disabledToilet: data.disabledToilet,
          nappyToilet: data.nappyToilet,
          latitude: data.latitude,
          longitude: data.longitude,
          management_name: data.management_name,
          tellnumber: data.tellnumber,
          establishment_date: data.establishment_date,
          trash_processing: data.trash_processing,
          emergency_bell: data.emergency_bell,
          cctv: data.cctv,
          data_date: data.data_date,
          image: data.image,
          image_name: data.image_name
        } : row))

    } else {
      // 데이터 추가하기 방법1
      // setInfo((prev) => {
      //   return [ ...prev, {
      //     id: nextId.current,
      //     name: data.name,
      //     email: data.email,
      //     phone: data.phone,
      //     website: data.website
      //   }]
      // });

      //데이터 추가하기 방법2
      setInfo(info => info.concat(
        {
          id: nextId.current,
          toilet_name: data.toilet_name,
          division: data.division,
          city: data.city,
          county: data.county,
          load_address: data.load_address, 
          num_address: data.num_address,
          open_time: data.open_time,
          disabledToilet: data.disabledToilet,
          nappyToilet: data.nappyToilet,
          latitude: data.latitude,
          longitude: data.longitude,
          management_name: data.management_name,
          tellnumber: data.tellnumber,
          establishment_date: data.establishment_date,
          trash_processing: data.trash_processing,
          emergency_bell: data.emergency_bell,
          cctv: data.cctv,
          data_date: data.data_date,
          image: data.image,
          image_name: data.image_name
        }
      ))
      nextId.current += 1;
    }
  }

  const handleRemove = (id) => {
    setInfo(info => info.filter(item => item.id !== id));
    setStartNumber(prevStartNumber => prevStartNumber - 1);
  }

  const handleEditSubmit = (item) => {
    console.log(item);
    handleSave(item);
    // setEditModalOn(false);
  }



  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCounty, setSelectedCounty] = useState('');
  const [selectedDisabled, setSelectedDisabled] = useState('');
  const [selectedNappy, setSelectedNappy] = useState('');
  // const [filteredData, setFilteredData] = useState([]);

  const handleFilterChange = (event, filterType) => {
    const selectedValue = event.target.value;
    switch (filterType) {
      case 'city':
        setSelectedCity(selectedValue);
        break;
      case 'county':
        setSelectedCounty(selectedValue);
        break;
      case 'disabled':
        setSelectedDisabled(selectedValue);
        break;
      case 'nappy':
        setSelectedNappy(selectedValue);
        break;
      default:
        break;
    }
  };

  const handleSubmitFilters = () => {
    // 선택된 필터 옵션들을 객체로 만들어서 서버에 보내기
    // 스프링 부트에 선택된 필터값을 전달하고 응답을 처리하는 코드
    // axios.get('http://10.125.121.188:8080/filter', {
    axios.get('http://localhost:8080/filter', {
      params: {
        city: selectedCity,
        county: selectedCounty,
        disabledToilet: selectedDisabled,
        nappyToilet: selectedNappy
      }
    })
    .then(response => {
      // 응답 데이터 처리 로직
      // console.log(response.data);
      setInfo(response.data);
    })
    .catch(error => {
      console.error(error);
    });
  };

    // border-radius: 10px;
  // overflow: hidden; /* 라운드 처리된 부분 내용을 넘어가는 부분을 잘라냅니다. */
  // box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* 테두리 그림자 추가 */

  return (
    <>
    <Cursor />
    <NavTb />
    <TableListContainer>
    <div class="bg-custom_sky p-5 block sm:flex items-center justify-between border-gray-200 lg:mt-1.5 dark:bg-gray-800 dark:border-gray-700 " style={{ fontFamily: 'KCCChassam, sans-serif'}}>  {/* border-b: 테이블 위에 생기는 선 삭제 */}
        <div class="w-full ">  {/* mb-1: 테이블 보다 위로 올리기 위해 삭제 */}
            <div class="mb-3 mt-4">

                <h1 class="mt-[-40px] text-xl font-semibold text-white sm:text-3xl dark:text-white flex justify-center items-center mb-4">화장실 정보 리스트</h1>
            </div>

            {/* <div className="secDiv flex items-center gap-10 justify-center">
                  <div className="singleSearch flex item-center gap-2">
                    <label htmlFor="relevance" className="text-[#808080] font-semibold">Sort by:</label>
                    <select name="" id="relevance" className="bg-white rounded-[3px] px-4 py-1">
                      <option value="">Relevance</option>
                    </select>
                  </div>
            </div> */}


                  
            <div class="sm:flex">
                <div class="items-center hidden mb-3 sm:flex sm:divide-x sm:divide-gray-100 sm:mb-0 dark:divide-gray-700">
                <div class="inline-flex items-center space-x-2">
              <select
                value={selectedCity}
                onChange={(event) => handleFilterChange(event, 'city')}
                className="px-3 py-2 text-sm border rounded-lg dark:border-gray-600 dark:bg-gray-700"
              >
                <option value="">도시 선택</option>
                <option value="부산광역시">부산광역시</option>
                {/* <option value="Busan">Busan</option> */}
                {/* 다른 옵션들 추가 */}
              </select>
              <select
                value={selectedCounty}
                onChange={(event) => handleFilterChange(event, 'county')}
                className="px-3 py-2 text-sm border rounded-lg dark:border-gray-600 dark:bg-gray-700"
              >
                <option value="">구/군 선택</option>
                <option value="중구">중구</option>
                <option value="서구">서구</option>
                <option value="동구">동구</option>
                <option value="영도구">영도구</option>
                <option value="부산진구">부산진구</option>
                <option value="동래구">동래구</option>
                <option value="남구">남구</option>
                <option value="북구">북구</option>
                <option value="해운대구">해운대구</option>
                <option value="사하구">사하구</option>
                <option value="금정구">금정구</option>
                <option value="강서구">강서구</option>
                <option value="연제구">연제구</option>
                <option value="수영구">수영구</option>
                <option value="사상구">사상구</option>
                <option value="기장군">기장군</option>

                {/* 다른 옵션들 추가 */}
              </select>
              <select
                value={selectedDisabled}
                onChange={(event) => handleFilterChange(event, 'disabled')}
                className="px-3 py-2 text-sm border rounded-lg dark:border-gray-600 dark:bg-gray-700"
              >
                <option value="">장애인 화장실 여부 선택</option>
                <option value="있음">장애인 화장실 있음</option>
                <option value="없음">장애인 화장실 없음</option>
              </select>
              <select
                value={selectedNappy}
                onChange={(event) => handleFilterChange(event, 'nappy')}
                className="px-3 py-2 text-sm border rounded-lg dark:border-gray-600 dark:bg-gray-700"
              >
                <option value="">기저귀 교환대 여부 선택</option>
                <option value="있음">기저귀 교환대 있음</option>
                <option value="없음">기저귀 교환대 없음</option>
              </select>
              <button
                onClick={handleSubmitFilters}
                // className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-800"
                className="px-4 py-2 text-sm font-medium rounded-lg text-primary-50 bg-primary-700
                 hover:bg-primary-50 hover:text-primary-700
                focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  // boxShadow: "0 0 0 1px #2e87ec, 0 0 0 2px #E5E7EB", // 첫 번째 값은 작은 선의 두께와 색상, 두 번째 값은 원래 테두리의 두께와 색상입니다
                  overflow: "hidden",
                  cursor: "none" // 커서 숨기기

                }}

              
              >
                검색
              </button>
            </div>
                    {/* <form class="lg:pr-3" action="#" method="GET">
                    <label for="users-search" class="sr-only">Search</label>
                    <div class="relative mt-1 lg:w-64 xl:w-96">
                        <input type="text" name="email" id="users-search"
                        class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg
                        focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700
                        dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500
                        dark:focus:border-primary-500"
                        placeholder="Search for users" />
                    </div>
                    </form> */}
                    {/* <div class="flex pl-0 mt-3 space-x-1 sm:pl-2 sm:mt-0">
                        <a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd"></path></svg>
                        </a>
                        <a href="#" class="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
                        </a>
                    </div> */}
                </div>

                {/* Add 기능 */}
                <div class="flex items-center ml-auto space-x-2 sm:space-x-3" style={{ fontFamily: 'KCCChassam, sans-serif' }}>
                <button type="button"
                    onClick={() => setAddModalOn(true)} // Add 버튼 클릭 시 모달 열기
                    data-modal-toggle="add-user-modal"
                    class="inline-flex items-center justify-center w-1/2 px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 sm:w-auto dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    style={{
                      overflow: "hidden",
                      cursor: "none" // 커서 숨기기
                    }}
                    >
                        <svg class="w-5 h-5 mr-2 -ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                        화장실 정보 추가
                    </button>
                    {/* Add 모달 */}
                    {addModalOn && <Add handleSave={handleSave} addModalClose={() => setAddModalOn(false)} />}  {/* 모달 닫기 */}
                </div>

            </div>

        </div>
    </div>
    <div class="bg-custom_sky p-5 mt-[-90px] flex flex-col " style={{ fontFamily: 'KCCChassam, sans-serif' }}>  {/* p-4: 테이블 크기 조정을 위해 추가 */}
      <div class="overflow-x-auto rounded-lg">
          <div class="inline-block min-w-full align-middle">
              <div class="overflow-hidden shadow">
                
                  <table class="min-w-full divide-y divide-gray-200 table-fixed dark:divide-gray-600 ">
                    
                      {/* 테이블 헤더 */}
                      <thead class="bg-primary-100 dark:bg-gray-700">
                          <tr>
                              {/* <th scope="col" class="p-4">
                                  <div class="flex items-center">
                                      <input id="checkbox-all" aria-describedby="checkbox-1" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                                      <label for="checkbox-all" class="sr-only">checkbox</label>
                                  </div>
                              </th> */}
                              <th scope="col" class="p-3 text-lg text-md font-medium text-left text-gray-500 uppercase dark:text-gray-400 text-center font-semibold">  {/* text-center 값을 주면 중앙정렬 가능 */}
                              번호
                              </th>
                              <th scope="col" class="p-3 text-lg font-medium text-left text-gray-500 uppercase dark:text-gray-400 text-center font-semibold">
                              화장실명
                              </th>
                              <th scope="col" class="p-3 text-lg font-medium text-left text-gray-500 uppercase dark:text-gray-400 font-semibold">
                              주소
                              </th>
                              <th scope="col" class="p-3 text-lg font-medium text-left text-gray-500 uppercase dark:text-gray-400 text-center font-semibold">
                              개방시간
                              </th>
                              <th scope="col" class="p-3 text-lg font-medium text-left text-gray-500 uppercase dark:text-gray-400 text-center font-semibold">
                              장애인 화장실
                              </th>
                              <th scope="col" class="p-3 text-lg font-medium text-left text-gray-500 uppercase dark:text-gray-400 text-center font-semibold">
                              기저귀 교환대
                              </th>
                              <th scope="col" class="p-3 text-lg font-medium text-left text-gray-500 uppercase dark:text-gray-400">
                              
                              </th>
                          </tr>
                      </thead>
                      {/* 테이블 본문 */}
                      <Tr
                        info={currentPosts}
                        handleRemove={handleRemove}
                        handleEditSubmit={handleEditSubmit}
                        startNumber={startingNumber}
                      // filteredData={filteredData}
                      />
                  </table>

                      {/* 페이징 컴포넌트 */}
                  <div className="pagination flex items-center justify-center mt-5">
                  {info.length > postPerPage &&
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={postPerPage}
                      totalItemsCount={info.length}
                      pageRangeDisplayed={5}
                      prevPageText={'‹'}
                      nextPageText={'›'}
                      onChange={paginate}
                      itemClass="mr-3"
                      linkClass="px-4 py-2 border rounded-lg bg-blue-500 text-white no-underline"
                      activeLinkClass="px-4 py-2 border rounded-lg bg-blue-700 text-white"
                    />
                    }
                  </div>
              </div>
          </div>
        </div>
    </div>
    </TableListContainer>
    </>
  );
};

export default TableList;