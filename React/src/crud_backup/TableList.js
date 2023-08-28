import React, { useEffect, useState, useRef } from "react";
import axios from 'axios';
import Tr from './Tr';
import Post from './Post';
import Modal from './Modal';
import '../styles/index.css'

import Pagination from "react-js-pagination";


const TableList = () => {
  // 행 번호를 위한 별도의 상태 변수를 사용합니다.
  const [startNumber, setStartNumber] = useState(1);

  const [info, setInfo] = useState([]);
  const [selected, setSelected] = useState('');
  const [modalOn, setModalOn] = useState(false);

  // 페이징 코드
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 번호
  const [postPerPage] = useState(10); // 페이지 당 보여줄 데이터 개수

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = info.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 고유 값으로 사용 될 id
  // ref 를 사용하여 변수 담기
  const nextId = useRef(11);

  // useEffect(() => {
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(res => {setInfo(res.data)
  //     console.log("json_data: ", res.data)})
  //     .catch(err => console.log(err));
  // }, []);

  // const [list , SetList] = useState([]);
  
  useEffect(()=> {
    // console.log("안녕하세요")
    // axios.get('http://10.125.121.188:8080/toilets')
    axios.get('http://localhost:8080/toilets')

    .then(res => {setInfo(res.data);
      // console.log(res.data)
      // 페이징 처리에 따라 startNumber 업데이트
      setStartNumber((currentPage - 1) * postPerPage + 1);
    })
    .catch(err => {console.log(err)})
  }, [currentPage])

  //   useEffect(() => {
  //   axios.get('/toilets/data')
  //     .then(res => setInfo(res.data))
  //     .catch(err => console.log(err));
  // }, []);
  
  // useEffect(() => {
  //   axios.get('/toilets/data')
  //   .then(res => SetList(res.data))
  //   .catch(err => console.log(err))
  // }, []);

  const handleSave = (data) => {
    //데이터 수정하기(중요)
    if (data.번호) {
      setInfo(
        info.map(row => data.번호 === row.번호 ? {
          번호: data.번호,
          화장실명: data.화장실명,
          구분: data.구분,
          소재지도로명주소: data.소재지도로명주소,
          개방시간: data.개방시간,
          비상벨설치여부: data.비상벨설치여부
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
          번호: nextId.current,
          화장실명: data.화장실명,
          구분: data.구분,
          소재지도로명주소: data.소재지도로명주소,
          개방시간: data.개방시간,
          비상벨설치여부: data.비상벨설치여부
        }
      ))
      nextId.current += 1;
    }
  }

  const handleRemove = (번호) => {
    setInfo(info => info.filter(item => item.번호 !== 번호));
    setStartNumber(prevStartNumber => prevStartNumber - 1);
  }

  const handleEdit = (item) => {
    setModalOn(true);
    const selectedData = {
      번호: item.번호,
      화장실명: item.화장실명,
      구분: item.구분,
      소재지도로명주소: item.소재지도로명주소,
      개방시간: item.개방시간,
      비상벨설치여부: item.비상벨설치여부
    };
    console.log(selectedData);
    setSelected(selectedData);
  };

  const handleCancel = () => {
    setModalOn(false);
  }

  const handleEditSubmit = (item) => {
    console.log(item);
    handleSave(item);
    setModalOn(false);
  }

  return (
  <>
  
    <div className="container max-w-screen mx-auto">
      <div className='text-xl font-bold mt-5 mb-3 text-center'>화장실 정보 리스트</div>
      <table className="min-w-full table-auto text-gray-800">
        <thead className='justify-between'>
          <tr className='bg-gray-800'>
            <th className="text-gray-300 px-4 py-3 text-center">번호</th>
            <th className="text-gray-300 px-4 py-3 text-center">화장실명</th>
            <th className="text-gray-300 px-4 py-3 text-center">구분</th>
            <th className="text-gray-300 px-4 py-3 text-center">주소</th>
            <th className="text-gray-300 px-4 py-3 text-center">개방시간</th>
            <th className="text-gray-300 px-4 py-3 text-center">비상벨설치여부</th>
            <th className="text-gray-300 px-4 py-3 text-center">Edit</th>
            <th className="text-gray-300 px-4 py-3 text-center">Delete</th>
          </tr>
        </thead>
        <Tr info={currentPosts} handleEdit={handleEdit} handleRemove={handleRemove} startNumber={startNumber} />
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
          linkClass="px-4 py-2 border rounded-lg bg-blue-500 text-white"
          activeLinkClass="px-4 py-2 border rounded-lg bg-blue-700 text-white"
        />
        }
      </div>
      <Post onSaveData={handleSave} />
      {modalOn && <Modal selectedData={selected} handleCancel={handleCancel} 
      handleEditSubmit={handleEditSubmit} />}
    </div>



    </>
  );
};

export default TableList;









// import React, { useEffect, useState, useRef } from "react";
// import axios from 'axios';
// import Tr from './Tr';
// import Post from './Post';
// import Modal from './Modal';
// import './index.css'

// const TableList = () => {
//   const [info, setInfo] = useState([]);
//   const [selected, setSelected] = useState('');
//   const [modalOn, setModalOn] = useState(false);

//   // 고유 값으로 사용 될 id
//   // ref 를 사용하여 변수 담기
//   const nextId = useRef(11);

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then(res => {setInfo(res.data)
//         console.log("json_data: ", res.data)})
//       .catch(err => console.log(err));
//   }, []);

//   const [list , SetList] = useState([]);

//     useEffect(()=> {
//     console.log("안녕하세요")
//     axios.get('http://localhost:8080/toilets/data')
//     .then(res => {SetList(res.data)
//       console.log(res.data)})
//     .catch(err => {console.log(err)})
//   },[])

//   // useEffect(() => {
//   //   fetch('/toilets/data')
//   //   .then(response => response.json())
//   //   .then(response => {
//   //     SetList(response.data)
//   //     console.log(response.data)
//   //   })
//   // })

//   // const [list , SetList] = useState([]);
//   // useEffect(()=> {
//   //   console.log("안녕하세요")
//   //   axios.get('/toilets/data')
//   //   .then(res => {SetList(res.data)
//   //     console.log(res.data)})
//   //   .catch(err => {console.log(err.response.data.message)})
//   // },[])
  
//   // useEffect(() => {
//   //   axios.get('/toilets/data')
//   //   .then(res => SetList(res.data))
//   //   .catch(err => console.log(err))
//   // }, []);

//   const handleSave = (data) => {
//     //데이터 수정하기(중요)
//     if (data.id) {
//       setInfo(
//         info.map(row => data.id === row.id ? {
//           id: data.id,
//           name: data.name,
//           email: data.email,
//           phone: data.phone,
//           website: data.website,
//         } : row))

//     } else {
//       // 데이터 추가하기 방법1
//       // setInfo((prev) => {
//       //   return [ ...prev, {
//       //     id: nextId.current,
//       //     name: data.name,
//       //     email: data.email,
//       //     phone: data.phone,
//       //     website: data.website
//       //   }]
//       // });

//       //데이터 추가하기 방법2
//       setInfo(info => info.concat(
//         {
//           id: nextId.current,
//           name: data.name,
//           email: data.email,
//           phone: data.phone,
//           website: data.website
//         }
//       ))
//       nextId.current += 1;
//     }
//   }

//   const handleRemove = (id) => {
//     setInfo(info => info.filter(item => item.id !== id));
//   }

//   const handleEdit = (item) => {
//     setModalOn(true);
//     const selectedData = {
//       id: item.id,
//       name: item.name,
//       email: item.email,
//       phone: item.phone,
//       website: item.website
//     };
//     console.log(selectedData);
//     setSelected(selectedData);
//   };

//   const handleCancel = () => {
//     setModalOn(false);
//   }

//   const handleEditSubmit = (item) => {
//     console.log(item);
//     handleSave(item);
//     setModalOn(false);
//   }

//   return (
  
//     <div className="container max-w-screen-lg mx-auto">
//       <div className='text-xl font-bold mt-5 mb-3 text-center'>화장실 정보 리스트</div>
//       <table className="min-w-full table-auto text-gray-800">
//         <thead className='justify-between'>
//           <tr className='bg-gray-800'>
//             <th className="text-gray-300 px-4 py-3">Id.</th>
//             <th className="text-gray-300 px-4 py-3">Name</th>
//             <th className="text-gray-300 px-4 py-3">Email</th>
//             <th className="text-gray-300 px-4 py-3">Phone No.</th>
//             <th className="text-gray-300 px-4 py-3">Website</th>
//             <th className="text-gray-300 px-4 py-3">Edit</th>
//             <th className="text-gray-300 px-4 py-3">Delete</th>
//           </tr>
//         </thead>
//         <Tr info={info} handleRemove={handleRemove} handleEdit={handleEdit} />
//       </table>
//       <Post onSaveData={handleSave} />
//       {modalOn && <Modal selectedData={selected} handleCancel={handleCancel} 
//       handleEditSubmit={handleEditSubmit} />}
//     </div>


//     // <div>{info.length}</div>
//     // <div>{list.length}</div>
    
//   );
// };

// export default TableList;