import React, { useState } from 'react';
import Edit from './Edit';
import Delete from './Delete';
import Detail from './Detail';
import axios from 'axios';
import ButtonWithAlternateColor from "./ButtonWithAlternateColor"
import ButtonWithAlternateColor2 from "./ButtonWithAlternateColor2"




import Suyeonggu from '../assets/images/수영구.svg'
import Seogu from '../assets/images/서구.svg'
import Gijanggun from '../assets/images/기장군.svg'
import Junggu from '../assets/images/중구.svg'
import Haeundaegu from '../assets/images/해운대구.svg'
import Namgu from '../assets/images/남구.svg'

const Tr = ({ info, handleRemove, handleEditSubmit, startNumber }) => {
  const [editModalOn, setEditModalOn] = useState(false); // Edit 모달의 상태를 관리합니다.
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 아이템 상태 추가

  const [detailModalOn, setDetailModalOn] = useState(false); // Detail 모달의 상태를 관리합니다.



  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  // 상세정보
  const onDetailModalOpen = (item) => {
    setSelectedItem(item); // 선택된 아이템 설정
    setDetailModalOn(true); // Detail 모달 열기
  };



  const handleOpenDeleteModal = (item) => {
    setSelectedItem(item);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setSelectedItem(null); // 모달이 닫힐 때 선택된 아이템 초기화
    setIsDeleteModalOpen(false);
  };

  const onEditModalOpen = (item) => {
    setSelectedItem(item); // 선택된 아이템 설정
    setEditModalOn(true); // Edit 모달 열기
  };

  const onRemove = (id) => {
      // axios.delete(`http://10.125.121.188:8080/toilets/${id}`)
      axios.delete(`http://localhost:8080/toilets/${id}`)
        .then(response => {
          // console.log(response.data); // 서버 응답을 콘솔에 출력하거나 필요한 처리를 수행합니다.
          handleRemove(id); // 삭제된 데이터를 리액트 상태에서도 삭제하기 위해 부모 컴포넌트의 handleEdit 함수를 호출합니다.
          // alert('데이터가 성공적으로 삭제되었습니다.');
      })
        .catch(error => {
          console.error(error);
        });

        handleCloseDeleteModal();
    };

    return (
        <tbody className="bg-white divide-y divide-gray-200 dark:bg-gray-800 dark:divide-gray-700 rounded-lg overflow-hidden shadow">
          {/* {info.map((item, index) => ( */}
          {info.map((item, index) => (
            <tr key={item.id}
              className="hover:bg-primary-50 dark:hover:bg-gray-700"
              
              >
              {/* <td className="w-4 p-4">
                <div className="flex items-center">
                  <input
                    id={`checkbox-${item.번호}`}
                    aria-describedby="checkbox-1"
                    type="checkbox"
                    className="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:focus:ring-primary-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor={`checkbox-${item.번호}`} className="sr-only">checkbox</label>
                </div>
              </td> */}
              <td className="p-2 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">{startNumber + index}</td> {/* (아이템 ID: {item.id}) */}
              <td className="flex items-center p-2  space-x-6 whitespace-nowrap">  {/* mr-12: 넓게 사용할 필요가 없을 것 같아 해제 */}
                {/* <img className="w-10 h-10 rounded-full" src={`/images/users/${item.avatar}`} alt={`${item.name} avatar`} /> */}
                {/* <img className="w-10 h-10 rounded-full" src='../assets/images/free-icon-toilets_marker.png' /> */}
                

                {/* <img className="w-10 h-10 rounded-full" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6ZVrpWhTgp3hIGD1XnbaT_jxWklCKM9d9jg&usqp=CAU' alt="Toilet Marker" /> */}


                {/* <img className="w-10 h-10 rounded-full" src={Suyeonggu} alt="Toilet Marker" /> */}
  {item.county === '수영구' && <img className="w-10 h-10 rounded-full" src={Suyeonggu} alt="Toilet Marker" />}
  {item.county === '서구' && <img className="w-10 h-10 rounded-full" src={Seogu} alt="Toilet Marker" />}
  {item.county === '기장군' && <img className="w-10 h-10 rounded-full" src={Gijanggun} alt="Toilet Marker" />}
  {item.county === '해운대구' && <img className="w-10 h-10 rounded-full" src={Haeundaegu} alt="Toilet Marker" />}
  {item.county === '남구' && <img className="w-10 h-10 rounded-full" src={Namgu} alt="Toilet Marker" />}
  {item.county === '중구' && <img className="w-10 h-10 rounded-full" src={Junggu} alt="Toilet Marker" />}


  {item.county !== '수영구'
  && item.county !== '서구'
  && item.county !== '기장군'
  && item.county !== '해운대구'
  && item.county !== '남구'
  && item.county !== '중구'
  && <img className="w-10 h-10 rounded-full" src={Suyeonggu} alt="Toilet Marker" />}
  
  {/* <input
    type="file"
    accept="image/*"
    onChange={(e) => handleImageUpload(item.id, e.target.files[0])}
  />
  {item.toilet_image && (
    <img
      src={item.image}
      alt="Toilet"
      className="w-10 h-10 rounded-full"
    />
  )} */}
                


                
                <div className="text-sm font-normal text-gray-500 dark:text-gray-400">
                  <div className="text-base font-semibold text-gray-900 dark:text-white">{item.toilet_name}</div>
                </div>
              </td>
              <td className="p-2 text-base font-normal text-gray-900 whitespace-nowrap dark:text-white">
                {/* {item.city} {item.county} {item.load_address} */}
                {item.city} {item.county} {item.load_address ? item.load_address : item.num_address}
              </td>
              <td className="p-2 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">{item.open_time}</td>
              <td className="p-2 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">{item.disabledToilet}</td>
              <td className="p-2 text-base font-medium text-gray-900 whitespace-nowrap dark:text-white text-center">{item.nappyToilet}</td>

              <td className="p-2 space-x-2 whitespace-nowrap text-center flex justify-center items-center">
              {/* <button
                  type="button"
                  data-modal-toggle="edit-user-modal"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary-700 rounded-lg
                  border border-primary-700 bg-primary-50 hover:bg-primary-700 hover:text-white focus:ring-4 focus:ring-primary-300"
                  // onClick={() => setEditModalOn(true)} // Edit 버튼 클릭 시 모달 열기
                  onClick={() => onDetailModalOpen(item) // 행 클릭 시 Detail 모달 열기
                  }
                >
                  <svg className="w-4 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path>
                  </svg>
                  More
                </button> */}

                <ButtonWithAlternateColor
              text="More"
              isAlternate={index % 2 === 0}
              onClick={() => onDetailModalOpen(item)}
            />

                {detailModalOn && selectedItem && ( // Detail 모달이 열려있을 때만 실행
        <Detail
          item={selectedItem}
          detailModalClose={() => {
            setSelectedItem(null); // 선택된 아이템 초기화
            setDetailModalOn(false); // Detail 모달 닫기
          }}
        />
      )}





                {/* <button
                  type="button"
                  data-modal-toggle="edit-user-modal"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary-50 rounded-lg
                  border border-primary-700    bg-primary-700   hover:bg-primary-50 hover:text-primary-700 focus:ring-4 focus:ring-primary-300"



                  // className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-primary-700 rounded-lg
                  // border border-primary-700    bg-primary-50    hover:bg-primary-700 hover:text-white focus:ring-4 focus:ring-primary-300"

                  // onClick={() => setEditModalOn(true)} // Edit 버튼 클릭 시 모달 열기
                  onClick={() => onEditModalOpen(item)}
                  style={{
                    overflow: "hidden",
                    cursor: "none", // 커서 숨기기
                    marginRight: "50px" // 오른쪽 마진 추가
                  }}
                >
                  <svg className="w-4 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                    <path fillRule="evenodd" d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z" clipRule="evenodd"></path>
                  </svg>
                  Edit
                </button> */}

<ButtonWithAlternateColor2
              text="Edit"
              isAlternate={index % 2 === 0}
              onClick={() => onEditModalOpen(item)}
            />


                {/* Edit 모달 */}
                {editModalOn && selectedItem && (
              <Edit
                item={selectedItem}
                handleEditSubmit={handleEditSubmit}
                editModalClose={() => {
                  setSelectedItem(null); // 선택된 아이템 초기화
                  setEditModalOn(false); // 모달 닫기
                }}
              />
            )}


                <button
                  type="button"
                  data-modal-toggle="delete-user-modal"
                  className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800 focus:ring-4 focus:ring-red-300 dark:focus:ring-red-900"
                  // onClick={() => onRemove(item.id)}
                  onClick={() => handleOpenDeleteModal(item)}
                  style={{
                    overflow: "hidden",
                    cursor: "none" // 커서 숨기기
                  }}
                >
                  <svg className="w-4 h-5 " fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd"></path>
                  </svg>
                </button>
                <Delete isOpen={isDeleteModalOpen} onClose={handleCloseDeleteModal} onDelete={onRemove} selectedItem={selectedItem} />

              </td>
            </tr>
          ))}


        </tbody>
      );
    };
    
    export default Tr;

