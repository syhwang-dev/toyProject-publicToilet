import React, { useState } from 'react';
import axios from 'axios';

const Modal = ({ selectedData, handleCancel, handleEditSubmit }) => {
  const [edited, setEdited] = useState(selectedData);

  const onCancel = () => {
    handleCancel();
  }

  const onEditChange = (e) => {
    setEdited({
      ...edited,
      [e.target.name]: e.target.value
    });
  }

  const onSubmitEdit = (e) => {
    e.preventDefault();

    // 새로운 변수 newEdited에 수정된 데이터를 담아줍니다.
    const newEdited = {
      번호: edited.번호,
      화장실명: edited.화장실명,
      구분: edited.구분,
      소재지도로명주소: edited.소재지도로명주소,
      개방시간: edited.개방시간
    };
    
    // 수정된 데이터를 Spring Boot API로 HTTP PUT 요청으로 전송합니다.
    // axios.put(`http://10.125.121.188:8080/toilets/${edited.번호}`, newEdited)
    axios.put(`http://localhost:8080/toilets/${edited.번호}`, newEdited)
      .then(response => {
        // 필요에 따라 백엔드의 응답을 처리합니다.
        console.log("edited: ", newEdited);
        console.log(response.data);
      })
      .catch(error => {
        // 요청이 실패한 경우 에러를 처리합니다.
        console.log("edited: ", newEdited);
        console.error(error);
      });
  
    // handleEditSubmit 함수를 호출하여 부모 컴포넌트의 상태를 업데이트합니다.
    handleEditSubmit(newEdited);
  };

  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center bg-black bg-opacity-70">
      <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
        <div className="border-b px-4 py-2 flex justify-between items-center">
          <h3 className="font-semibold text-lg">화장실 정보 수정하기</h3>
          <i className="fas fa-times cursor-pointer" onClick={onCancel}></i>
        </div>

        <form onSubmit={onSubmitEdit}>
          <div className="p-3">
            <div>번호: {edited.번호}</div>
            <div>화장실명: <input className='border-2 border-gray-100' type='text' name='화장실명' value={edited.화장실명} onChange={onEditChange} /></div>
            <div>구분: <input className='border-2 border-gray-100' type='text' name='구분' value={edited.구분} onChange={onEditChange} /></div>
            <div>주소: <input className='border-2 border-gray-100' type='text' name='소재지도로명주소' value={edited.소재지도로명주소} onChange={onEditChange} /></div>
            <div>개방시간: <input className='border-2 border-gray-100' type='text' name='개방시간' value={edited.개방시간} onChange={onEditChange} /></div>
          </div>
          <div className="flex justify-end items-center w-100 border-t p-3">
            <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white mr-1 close-modal" onClick={onCancel}>취소</button>
            <button type='submit' className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-white">수정</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;

/////////////////////////


// import React, { useState } from 'react';
// import axios from 'axios';

// const Modal = ({ selectedData, handleCancel, handleEditSubmit }) => {
//   const [edited, setEdited] = useState(selectedData);

//   const onCancel = () => {
//     handleCancel();
//   }

//   const onEditChange = (e) => {
//     setEdited({ //문법
//       ...edited,
//       [e.target.name]: e.target.value
//     })
//   }

//   const onSubmitEdit = (e) => {
//     e.preventDefault();
    
//     // 수정된 데이터를 Spring Boot API로 HTTP PUT 요청으로 전송합니다.
//     axios.put('http://10.125.121.188:8080/toilets/{번호}', edited)
//       .then(response => {
//         // 필요에 따라 백엔드의 응답을 처리합니다.
//         console.log(response.data);
//       })
//       .catch(error => {
//         // 요청이 실패한 경우 에러를 처리합니다.
//         console.log("edited: ", edited);
//         console.error(error);
//       });
  
//     // handleEditSubmit 함수를 호출하여 부모 컴포넌트의 상태를 업데이트합니다.
//     handleEditSubmit(edited);
//   };

//   return (
//     <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center 
//     bg-black bg-opacity-70">
//       <div className="bg-white rounded shadow-lg w-10/12 md:w-1/3">
//         <div className="border-b px-4 py-2 flex justify-between items-center">
//           <h3 className="font-semibold text-lg">화장실 정보 수정하기</h3>
//           <i className="fas fa-times cursor-pointer" onClick={onCancel}></i>
//         </div>

//         <form onSubmit={onSubmitEdit}>
//           <div class="p-3">

//             <div>번호: {edited.번호}</div>

//             <div>화장실명: <input className='border-2 border-gray-100' type='text' name='toiletName' 
//             value={edited.화장실명} onChange={onEditChange} /></div>

//             <div>구분: <input className='border-2 border-gray-100' type='text' name='category' 
//             value={edited.구분} onChange={onEditChange} /></div>

//             <div>주소: <input className='border-2 border-gray-100' type='text' name='address' 
//             value={edited.주소} onChange={onEditChange} /></div>

//             <div>개방시간: <input className='border-2 border-gray-100' type='text' name='openHour'
//             value={edited.개방시간} onChange={onEditChange} /></div>

//           </div>
//           <div className="flex justify-end items-center w-100 border-t p-3">
//             <button className="bg-red-600 hover:bg-red-700 px-3 py-1 rounded text-white 
//             mr-1 close-modal" onClick={onCancel}>취소</button>
//             <button type='submit' className="bg-blue-600 hover:bg-blue-700 px-3 py-1 
//             rounded text-white">수정</button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Modal;