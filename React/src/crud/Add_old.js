import React, { useState } from "react";
import axios from "axios";

const Add = ({ handleSave, addModalClose }) => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [form, setForm] = useState({
        id: '',
        toilet_name: '',
        open_time: '',
        disabled_toilet: '',
        nappy_toilet: '',
        city: '',
        county: '',
        load_address: '',
        num_address: '',
        latitude: '',
        longitude: '',
        division: '',
        management_name: '',
        tellnumber: '',
        establishment_date: '',
        trash_processing: '',
        emergency_bell: '',
        cctv: '',
        data_date: '',
        image: null,  
    });

    const handleImageUpload = (selectedImage) => {
        setForm({ ...form, image: selectedImage });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
        handleImageUpload(file);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleSave(form);

        if (selectedImage) {
            // 이미지 업로드 후 formData 업데이트
            const newForm = { ...form, image: selectedImage };
            setForm(newForm);
        }

        // 데이터 저장 함수 호출
        // handleSave(form);

        axios
        .post('http://10.125.121.188:8080/toilets', form)
        // .post('http://localhost:8080/toilets', form)
        .then((res) => {
            console.log('Data sent successfully:', res.data);
        })
        .catch((err) => {
            console.log('Error sending data:', err);
        });

        // Close the modal
        addModalClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto">
            <div className="relative w-full max-w-4xl px-4 ">
                <div className="relative bg-primary-50 rounded-lg shadow dark:bg-gray-800">
                    <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-700">
                        <h3 className="text-xl font-semibold dark:text-white text-center w-full">
                            화장실 정보 추가하기
                        </h3>
                        <button
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
                            onClick={addModalClose}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>

                    

                    <div className="p-6 space-y-6">
                        <form onSubmit={handleSubmit}>

                {/* #### 기본 정보 #### */}
                <div className="mb-6 border rounded-lg p-4 "> {/* border rounded-lg p-4: 테두리 처리를 위해 값 추가 */}
                    <h4 className="mb-4 text-lg font-medium text-gray-900 dark:text-white flex items-center justify-center border-b"> {/* font-medium → font-semibold: 폰트 볼드체  */}
                  {/* flex items-center justify-center: 글씨 중앙 배치 */}
                        기본 정보
                    </h4>
                    <div className="grid grid-cols-12 gap-6">
                        {/* 화장실명 */}
                        <div className="col-span-6 sm:col-span-4">
                            <label
                            htmlFor="화장실명"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            화장실명
                            </label>
                            <input
                            type="text"
                            name="toilet_name"
                            id="화장실명"
                            value={form.toilet_name}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="화장실명"
                            required
                            />
                        </div>

                        {/* 개방시간 */}
                        <div className="col-span-6 sm:col-span-2">
                            <label
                            htmlFor="개방시간"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            개방시간
                            </label>
                            <input
                            type="text"
                            name="open_time"
                            id="개방시간"
                            value={form.open_time}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="개방시간"
                            />
                        </div>

                        {/* 장애인 화장실 */}
                        <div className="col-span-6 sm:col-span-3">
                            <label
                            htmlFor="장애인 화장실"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            장애인 화장실
                            </label>
                            <input
                            type="text"
                            name="disabled_toilet"
                            id="장애인 화장실"
                            value={form.disabled_toilet}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="있음 또는 없음"
                            />
                        </div>

                        {/* 기저귀 교환대 */}
                        <div className="col-span-6 sm:col-span-3">
                            <label
                            htmlFor="기저귀 교환대"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            기저귀 교환대
                            </label>
                            <input
                            type="text"
                            name="nappy_toilet"
                            id="기저귀 교환대"
                            value={form.nappy_toilet}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="있음 또는 없음"
                            />
                        </div>
                    </div>
                </div>

                {/* #### 주소 정보 #### */}
                <div className="mb-6 border rounded-lg p-4">
                    <h4 className="mb-4 text-lg font-medium text-gray-900 dark:text-white flex items-center justify-center border-b">
                        주소 정보
                    </h4>
                    <div className="grid grid-cols-12 gap-6">
                        {/* 광역시 */}
                        <div className="col-span-6 sm:col-span-2">
                            <label
                            htmlFor="광역시"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            도시
                            </label>
                            <input
                            type="text"
                            name="city"
                            id="광역시"
                            value={form.city}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="시"
                            />
                        </div>

                        {/* 군구 */}
                        <div className="col-span-6 sm:col-span-2">
                            <label
                            htmlFor="군구"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            군/구
                            </label>
                            <input
                            type="text"
                            name="county"
                            id="군구"
                            value={form.county}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="군/구"
                            />
                        </div>

                        {/* 소재지도로명주소 */}
                        <div className="col-span-6 sm:col-span-3">
                            <label
                            htmlFor="소재지도로명주소"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            도로명주소
                            </label>
                            <input
                            type="text"
                            name="load_address"
                            id="소재지도로명주소"
                            value={form.load_address}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="도로명주소"
                            />
                        </div>

                        {/* 소재지지번주소 */}
                        <div className="col-span-6 sm:col-span-3">
                            <label
                            htmlFor="소재지지번주소"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            지번주소
                            </label>
                            <input
                            type="text"
                            name="num_address"
                            id="소재지지번주소"
                            value={form.num_address}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="지번주소"
                            />
                        </div>

                        {/* WGS84위도 */}
                        <div className="col-span-6 sm:col-span-1">
                            <label
                            htmlFor="WGS84위도"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            위도
                            </label>
                            <input
                            type="text"
                            name="latitude"
                            id="WGS84위도"
                            value={form.latitude}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="0"
                            />
                        </div>

                        {/* WGS84경도 */}
                        <div className="col-span-6 sm:col-span-1">
                            <label
                            htmlFor="WGS84경도"
                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                            경도
                            </label>
                            <input
                            type="text"
                            name="longitude"
                            id="WGS84경도"
                            value={form.longitude}
                            onChange={handleChange}
                            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="0"
                            />
                        </div>
                    </div>
                </div>



                            {/* #### 상세 정보 #### */}
                            <div className="mb-6 border rounded-lg p-4">
                                <h4 className="mb-4 text-lg font-medium text-gray-900 dark:text-white flex items-center justify-center border-b">
                                    상세 정보
                                </h4>
                                <div className="grid grid-cols-12 gap-6">
                                    {/* 화장실 정보 영역 */}
                                    <div className="col-span-6 sm:col-span-6 pr-4 border-r border-gray-200">
                                        <div className="grid grid-cols-12 gap-6">
                                            {/* 구분 */}
                                            <div className="col-span-6 sm:col-span-6">
                                                <label
                                                    htmlFor="구분"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    구분
                                                </label>
                                                <input
                                                    type="text"
                                                    name="division"
                                                    id="구분"
                                                    value={form.division}
                                                    onChange={handleChange}
                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="공중 또는 개방"
                                                />
                                            </div>

                                            {/* 관리기관명 */}
                                            <div className="col-span-6 sm:col-span-6">
                                                <label
                                                    htmlFor="관리기관명"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    관리기관명
                                                </label>
                                                <input
                                                    type="text"
                                                    name="management_name"
                                                    id="관리기관명"
                                                    value={form.management_name}
                                                    onChange={handleChange}
                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="관리기관명"
                                                />
                                            </div>

                                            {/* 전화번호 */}
                                            <div className="col-span-6 sm:col-span-4">
                                                <label
                                                    htmlFor="전화번호"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    전화번호
                                                </label>
                                                <input
                                                    type="text"
                                                    name="tellnumber"
                                                    id="전화번호"
                                                    value={form.tellnumber}
                                                    onChange={handleChange}
                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="전화번호"
                                                />
                                            </div>

                                            {/* 설치연월 */}
                                            <div className="col-span-6 sm:col-span-4">
                                                <label
                                                    htmlFor="설치연월"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    설치연월
                                                </label>
                                                <input
                                                    type="text"
                                                    name="establishment_date"
                                                    id="설치연월"
                                                    value={form.establishment_date}
                                                    onChange={handleChange}
                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="설치연월"
                                                />
                                            </div>

                                            {/* 오물처리방식 */}
                                            <div className="col-span-6 sm:col-span-4">
                                                <label
                                                    htmlFor="오물처리방식"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    오물처리방식
                                                </label>
                                                <input
                                                    type="text"
                                                    name="trash_processing"
                                                    id="오물처리방식"
                                                    value={form.trash_processing}
                                                    onChange={handleChange}
                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="처리방식"
                                                />
                                            </div>

                                            {/* 비상벨설치여부 */}
                                            <div className="col-span-6 sm:col-span-4">
                                                <label
                                                    htmlFor="비상벨설치여부"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    비상벨설치여부
                                                </label>
                                                <input
                                                    type="text"
                                                    name="emergency_bell"
                                                    id="비상벨설치여부"
                                                    value={form.emergency_bell}
                                                    onChange={handleChange}
                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="비상벨"
                                                />
                                            </div>

                                            {/* 화장실입구CCTV설치유무 */}
                                            <div className="col-span-6 sm:col-span-4">
                                                <label
                                                    htmlFor="화장실입구CCTV설치유무"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    CCTV설치여부
                                                </label>
                                                <input
                                                    type="text"
                                                    name="cctv"
                                                    id="화장실입구CCTV설치유무"
                                                    value={form.cctv}
                                                    onChange={handleChange}
                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="CCTV"
                                                />
                                            </div>

                                            {/* 데이터기준일자 */}
                                            <div className="col-span-6 sm:col-span-4">
                                                <label
                                                    htmlFor="데이터기준일자"
                                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                                >
                                                    데이터기준일자
                                                </label>
                                                <input
                                                    type="text"
                                                    name="data_date"
                                                    id="데이터기준일자"
                                                    value={form.data_date}
                                                    onChange={handleChange}
                                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                                    placeholder="데이터일자"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* 이미지 업로드 */}
                                    <div className="col-span-6 sm:col-span-6">
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                            화장실 이미지 업로드
                                        </label>
                                        <div className="flex items-center justify-center w-full">
                                            <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300
                                            border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700
                                            hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                                                {selectedImage ? (
                                                    <img
                                                        src={URL.createObjectURL(selectedImage)}
                                                        alt="Uploaded"
                                                        // className="mb-2 max-h-64 w-full object-contain rounded-lg"
                                                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50"

                                                    />
                                                ) : (
                                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                                        {/* <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                                                        </svg> */}
                                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                                    </div>
                                                )}
                                                <input
                                                    id="dropzone-file"
                                                    type="file"
                                                    className="hidden"
                                                    onChange={handleImageChange}
                                                />
                                            </label>
                                        </div> 
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex justify-center items-center p-6 border-gray-200 dark:border-gray-700">
                                <button
                                    type="submit"
                                    className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    onClick={handleSubmit}
                                >
                                    추가하기
                                </button>
                            </div>












                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;
