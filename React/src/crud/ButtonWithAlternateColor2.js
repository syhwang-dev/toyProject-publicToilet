import React from 'react';

function ButtonWithAlternateColor({ text, isAlternate, onClick }) {
  const buttonClassName = isAlternate
    ? 'bg-primary-700 text-primary-50 border border-primary-700 hover:bg-primary-50 hover:text-primary-700'
    : 'bg-primary-50 text-primary-700 border border-primary-700 hover:bg-primary-700 hover:text-white';
    
  return (
    <button
    type="button"
      className={`flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg focus:ring-4 focus:ring-primary-300 ${buttonClassName}`}
      onClick={onClick}
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
                          
{text}
    </button>
  );
}

export default ButtonWithAlternateColor;
