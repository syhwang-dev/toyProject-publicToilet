import UserInfoLayout from "../layouts/UserInfoLayout";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import Restroom from "../assets/images/free-icon-restroom.png"
import { Link } from "react-router-dom";
import { useNavigate  } from 'react-router-dom';
import '../styles/reactboot.css'
import axios from "axios";
import React, { useState, useContext } from 'react';
import { TokenContext } from "./TokenManger"; // TokenManager에서 제공하는 TokenContext를 import합니다.
import Cursor from '../Cursor';
import 'animate.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const tokenContext = useContext(TokenContext); // TokenContext를 가져옵니다.

    const navigate = useNavigate();

    const handleLogin = () => {
        // 사용자가 제대로 값을 입력했는지 확인
        if (username.length === 0 || password.length === 0) {
            alert('아이디와 비밀번호를 입력하세요.');
            return;
        }

        // 서버로 전송할 로그인 정보
        const loginData = {
            username: username,
            password: password,
        };

        // 백엔드 엔드포인트 URL
        // const loginEndpoint = 'http://10.125.121.188:8080/login';
        const loginEndpoint = 'http://localhost:8080/login';


        axios
        .post(loginEndpoint, loginData)
        .then((response) => {
            // const tmp = response.headers.get('Authorization');
            // console.log('response 값: ', response);
            console.log('1. response.headers 값: ', response.headers);

            // console.log('Token1:', response.headers.authorization);
            const tokenData = response.headers.get('Authorization');
            // const tokenData = response.headers.authorization;
            console.log('2. response.headers.authorization 값:', tokenData)

            // // 로그인 정보 일치 or 불일치 확인
            // if (response.data.result) {
            //     console.log('로그인에 성공했습니다.');
            //     // 로그인 성공 시 메인 페이지로 넘어가는 코드
            //     // navigate('/main');
            // } else {
            //     console.log('로그인 정보가 일치하지 않습니다.');
            //     alert('로그인 정보가 일치하지 않습니다.');
            // }

            // const tokenData = responseData.data.token;
            // console.log("토큰값:", tokenData);
            // tokenContext.setToken(tokenData);

            // const aaaaa = localStorage.setItem('tokenData', tokenData);
            // console.log("aaaaa:", aaaaa)
            
            const storedToken = localStorage.getItem('tokenData');
            console.log('3. localStorage.getItem() 값:', storedToken)

            // const token = JSON.parse(storedToken);
            // console.log('4. JSON.parse() 값:', token)



            // 로그인 성공 시 메인 페이지로 넘어가는 코드
            navigate('/main');

        })
        .catch((error) => {
            console.error('Error during login:', error);
            alert('로그인에 실패했습니다.');
        });
      };

    return (
        <>
        <Cursor />
        <UserInfoLayout>     
            {/* <Card className="shadow-2-strong" style={{ borderRadius: "1rem" }}> */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "90vh"}}>
            
            <Card className="shadow-2-strong
            animate__animated animate__tada animate__slower 
            " style={{ borderRadius: "1rem", width: "100%" }}>
                {/* style={{ borderRadius: "1rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "30%" }}> */}
                
                {/*  maxWidth: "400px"  */}
                

                <Card.Body className="p-5 text-center" >
                <h3 className="mb-3"><img src={Restroom}
                // className="animate__animated animate__tada animate__slower animate__repeat-1"
                style={{ height: "140px", display: "block", margin: "0 auto"}} alt="Restroom"></img></h3>
                    <InputGroup className="mb-4" >
                        <InputGroup.Text id="idAddOn" className="my-custom-input" style={{ fontSize: '24px' }}>&nbsp;아이디 &nbsp;</InputGroup.Text>
                        <Form.Control type="text" style={{ fontSize: '25px' }} aria-describedby="idAddOn" value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
                    </InputGroup>
                    <Row>
                        <Col>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="idAddOn" style={{ fontSize: '25px' }}>비밀번호</InputGroup.Text>
                            <Form.Control
                                type="password"
                                style={{ fontSize: '25px' }}
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
                        style={{ width: "100%", fontSize: '25px' }}
                        // onClick={handleLogin}
                        onClick={() => handleLogin()}
                    >
                    로그인
                    </Button>
                    <hr className="my-4" />
                    <Link to="/join">아이디가 없으신가요? 회원가입</Link>
                </Card.Body>

            </Card>
            </div>
        </UserInfoLayout>
        </>
    );
};

export default Login