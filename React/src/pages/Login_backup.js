import UserInfoLayout from "../layouts/UserInfoLayout";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import ToiletPaperImg from "../assets/images/free-icon-toilet-paper.png"
import { Link } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
import '../styles/reactboot.css'
import axios from "axios";
import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        // 사용자가 제대로 값을 입력했는지 확인
        if (username.length === 0 || password.length === 0) {
            alert('이메일과 비밀번호를 입력하세요.');
            return;
        }

        // 서버로 전송할 로그인 정보
        const loginData = {
            username: username,
            password: password,
        };

        // 백엔드 엔드포인트 URL
        const loginEndpoint = 'http://10.125.121.188:8080/login';

        axios
        .post(loginEndpoint, loginData)
        .then((response) => {
            // 로그인 정보 일치 or 불일치 확인
            if (responseData.data.result) {
                console.log('로그인에 성공했습니다.');
                // 로그인 성공 시 메인 페이지로 넘어가는 코드
                // navigate('/main');
            } else {
                console.log('로그인 정보가 일치하지 않습니다.');
                alert('로그인 정보가 일치하지 않습니다.');
            }

            const responseData = response.data;
            console.log('response.data', responseData);

            const tokenData = responseData.data.token;
            console.log("토큰값:", tokenData);
            localStorage.setItem('token', tokenData)



            // 로그인 성공 시 메인 페이지로 넘어가는 코드
            navigate('/main');

        })
        .catch((error) => {
            console.error('Error during login:', error);
            alert('로그인에 실패했습니다.');
        });
      };
  
    return (
        <UserInfoLayout >
            <Card className="shadow-2-strong" style={{ borderRadius: "1rem" }}>
                <Card.Body className="p-5 text-center" >
                <h3 className="mb-3"><img src={ToiletPaperImg} style={{ height: "100px", display: "block", margin: "0 auto"}} alt="ToiletPaperImg"></img></h3>
                    <InputGroup className="mb-4" >
                        <InputGroup.Text id="idAddOn" className="my-custom-input" style={{ fontSize: '20px' }}>&nbsp;아이디 &nbsp;</InputGroup.Text>
                        <Form.Control type="text" aria-describedby="idAddOn" value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                    </InputGroup>
                    <Row>
                        <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="idAddOn" style={{ fontSize: '20px' }}>비밀번호</InputGroup.Text>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </InputGroup>
                        </Col>
                    </Row>
                    <Form.Group className="d-flex justify-content-start mb-4">
                        <Form.Check
                            type="checkbox"
                            // ref={(el) => (refs.current.rememberMeElement = el)}
                            label="아이디 기억하기"
                        />
                    </Form.Group>
                    <Button
                        className="btn-primary"
                        type="button"
                        style={{ width: "100%" }}
                        // onClick={handleLogin}
                        onClick={() => handleLogin()}
                    >
                    로그인
                    </Button>
                    <hr className="my-4" />
                    <Link to="/join">아이디가 없으신가요? 회원가입</Link>
                </Card.Body>
            </Card>
        </UserInfoLayout>
    );
};

export default Login