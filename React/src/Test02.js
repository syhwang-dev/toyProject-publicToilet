const handleSubmit = (e) => {
    e.preventDefault();
    handleSave(form);

    if (selectedImage) {
        // 이미지 업로드 후 formData 업데이트
        const newForm = { ...form, image: selectedImage };
        setForm(newForm);
    }

    // // 데이터 저장 함수 호출
    // // handleSave(form);

    const formData = new FormData(); // FormData 객체 생성

    // 이미지가 선택되었을 경우에만 FormData에 추가
    if (selectedImage) {
        formData.append('image', selectedImage);
    }

    // 기존 form 데이터 추가
    Object.entries(form).forEach(([key, value]) => {
        formData.append(key, value);
    });

    // axios
    // // .post('http://10.125.121.188:8080/toilets', formData)
    // // .post('http://localhost:8080/toilets', form)
    // .post('http://localhost:8080/toilets', formData)

    // .then((res) => {
    //     console.log('Data sent successfully:', res.data);
    // })
    // .catch((err) => {
    //     console.log('Error sending data:', err);
    // });

    try {
        // 이미지와 form 데이터를 함께 전송
        // const response = axios.post('http://10.125.121.188:8080/toilets', formData, {
        const response = axios.post('http://localhost:8080/toilets', formData, {

            headers: {
                'Content-Type': 'multipart/form-data', // 반드시 설정
            },
        });
        console.log('Data sent successfully:', response.data);
    } catch (error) {
        console.log('Error sending data:', error);
    }

    // Close the modal
    addModalClose();
};

// 텍스트라도 올라가는 함수 포함