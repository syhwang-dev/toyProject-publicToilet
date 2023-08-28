import React, { useState } from 'react';
import axios from 'axios';

const Post = ({ onSaveData }) => {
    const [form, setForm] = useState({
        번호: '',
        화장실명: '',
        구분: '',
        소재지도로명주소: '',
        개방시간: '',
        비상벨설치여부: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSaveData(form)
        console.log(form);

        axios
        // .post('http://10.125.121.188:8080/toilets', form)
        .post('http://localhost:8080/toilets', form)
        .then((res) => {
          console.log('Data sent successfully:', res.data);
        })
        .catch((err) => {
          console.log('Error sending data:', err);
        });

        setForm({
            번호: '',
            화장실명: '',
            구분: '',
            소재지도로명주소: '',
            개방시간: '',
            비상벨설치여부: ''
        })
    }

    return (
        <>
            <div className='text-xl font-bold mt-5 mb-2 text-center'>화장실 추가하기</div>

            <form className="mt-3" onSubmit={handleSubmit}>

                <div className="flex flex-col md:flex-row mb-1">
                    <label htmlFor="username" className="w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">화장실명
                        <input className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required placeholder='화장실명을 입력해주세요' type='text' name='화장실명' 
                            value={form.화장실명} onChange={handleChange} />
                    </label>

                    <label htmlFor="email" className="w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">구분
                        <input className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required placeholder='공중화장실 또는 간이화장실' type='text' name='구분' 
                            value={form.구분} onChange={handleChange} />
                    </label>
                </div>

                <div className="flex flex-col md:flex-row">
                    <label htmlFor="phone" className="w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">주소
                        <input className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required placeholder='화장실 주소를 입력해주세요' type='text' name='소재지도로명주소' 
                            value={form.phone} onChange={handleChange} />
                    </label>

                    <label htmlFor="website" className="w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">개방시간
                        <input className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required placeholder='개방시간을 입력해주세요' type='text' name='개방시간' 
                            value={form.website} onChange={handleChange} />
                    </label>
                </div>

                <div className="flex flex-col md:flex-row">
                    <label htmlFor="phone" className="w-full flex-1 mx-2 text-xs font-semibold text-gray-600 uppercase">비상벨설치여부
                        <input className="w-full py-3 px-1 mt-1 
                    text-gray-800 appearance-none 
                    border-2 border-gray-100
                    focus:text-gray-500 focus:outline-none focus:border-gray-200"
                            required placeholder='비상벨설치여부를 입력해주세요' type='text' name='비상벨설치여부' 
                            value={form.phone} onChange={handleChange} />
                    </label>
                </div>
                <div className='text-center'>
                    <button className='bg-blue-400 py-2 text-center px-10 md:px-12 md:py-3 text-white 
                    rounded text-xl md:text-base mt-4' type='submit'>저장</button>
                </div>
            </form>
        </>
    );
};

export default Post;




