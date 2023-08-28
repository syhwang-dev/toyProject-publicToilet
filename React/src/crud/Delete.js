import React from 'react';

const Delete = ({ isOpen, onClose, onDelete, selectedItem }) => {
  if (!isOpen) return null;

  const handleDelete = () => {
    onDelete(selectedItem.id); // 선택된 아이템의 ID를 onDelete 함수에 전달하여 삭제
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 ">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="text-center">
          <svg className="w-16 h-16 mx-auto text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <h3 className="mt-5 mb-6 text-lg text-gray-500 dark:text-gray-400">이 정보를 삭제하시겠습니까?</h3>
          <button onClick={handleDelete} className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base inline-flex items-center px-3 py-2.5 mr-2">
            네, 삭제할게요.
          </button>
          <button onClick={onClose} className="text-gray-900 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 border border-gray-200 font-medium inline-flex items-center rounded-lg text-base px-3 py-2.5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">
            아니요, 취소할게요.
          </button>
        </div>
      </div>
    </div>
  );
};

export default Delete;