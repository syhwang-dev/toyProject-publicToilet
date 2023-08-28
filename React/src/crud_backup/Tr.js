import React from 'react';
import Td from './Td';

const Tr = ({ info, handleEdit, handleRemove, startNumber }) => {

    // const handleDelete = (id) => {
    //     // 스프링 부트로 삭제 요청을 보내는 함수
    //     axios.delete('http://10.125.121.188:8080/toilets/{번호}')
    //     .then((response) => {
    //         // 요청이 성공하면 해당 아이템을 화면에서 삭제합니다.
    //         handleRemove(id);
    //         console.log(response.data);
    //     })
    //     .catch((error) => {
    //         // 요청이 실패한 경우 에러를 처리합니다.
    //         console.error(error);
    //     });
    // };

    return (
        <tbody>
            {info.map((item, index) => (
                <Td
                key={item.번호}
                item={{
                  ...item,
                  번호: startNumber + index, // 번호 계산
                }}
    
                handleEdit={handleEdit}
                handleRemove={handleRemove}
                // handleDelete={handleDelete} // 삭제 함수를 전달합니다.
                />
            ))}
        </tbody>
    );
};

export default Tr;


// import React from 'react';
// import Td from './Td';

// const Tr = ({info, handleRemove, handleEdit}) => {
//     return (
//         <tbody>
//             {
//                 info.map(item => {
//                     return (
//                         <Td key={item.번호} item={item} handleRemove={handleRemove} 
// 						handleEdit={handleEdit} />
//                     )
//                 })
//             }
//         </tbody>
//     );
// };

// export default Tr;