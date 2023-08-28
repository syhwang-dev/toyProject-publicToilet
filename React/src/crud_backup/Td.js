import React from 'react';
import axios from 'axios';

const Td = ({item, handleRemove, handleEdit}) => {
    const onRemove = () => {
        // 서버에 삭제 요청을 보내고, 성공하면 해당 아이템을 리액트 상태에서도 삭제합니다.
        // axios.delete(`http://10.125.121.188:8080/toilets/${item.번호}`)
        axios.delete(`http://localhost:8080/toilets/${item.번호}`)
          .then(response => {
            console.log(response.data); // 서버 응답을 콘솔에 출력하거나 필요한 처리를 수행합니다.
            handleRemove(item.번호); // 삭제된 데이터를 리액트 상태에서도 삭제하기 위해 부모 컴포넌트의 handleEdit 함수를 호출합니다.
            alert('데이터가 성공적으로 삭제되었습니다.');
        })
          .catch(error => {
            console.error(error);
          });
      };

    const onEdit = () => {
        handleEdit(item);
    }

    return (
        <>
        <tr className='"bg-white border-2 border-gray-200'>
            <td className='px-4 py-3 text-center'>{item.번호}</td>
            <td className='px-4 py-3 text-center'>{item.화장실명}</td>
            <td className='px-4 py-3'>{item.구분}</td>
            <td className='px-4 py-3'>{item.소재지도로명주소}</td>
            <td className='px-4 py-3 text-center'>{item.개방시간}</td>
            <td className='px-4 py-3 text-center'>{item.비상벨설치여부}</td>
            <td onClick={onEdit} className='text-center text-purple-400 cursor-pointer show-modal'>
            	<i class="far fa-edit"></i></td>
            <td onClick={onRemove} className='text-center text-purple-400 cursor-pointer'>
            	<i class="far fa-trash-alt"></i></td>
        </tr>
        </>
    )
};

export default Td;