import joinImg from "../assets/images/join.png"
import UserInfoLayout from "../layouts/UserInfoLayout";
import { useState } from "react";
import { Button, Card, Col, Form, InputGroup, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../styles/reactboot.css'
import Cursor from '../Cursor';
import JoinSuccessModal from './JoinSuccessModal'

const Join = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [intro, setIntro] = useState('');
  const [joinSuccessModalVisible, setJoinSuccessModalVisible] = useState(false); // 회원 가입 성공 모달 상태 변수

  const navigate = useNavigate();

  const handleJoin = () => {
    // 사용자가 필요한 정보를 모두 입력했는지 확인
    if (username === '' || password === '' || password2 === '') {
      alert('모든 필수 정보를 입력하세요.');
      return;
    }

    // 비밀번호와 비밀번호 확인이 일치하는지 확인
    if (password !== password2) {
      alert('비밀번호와 비밀번호 확인이 일치하지 않습니다.');
      return;
    }

      // 서버로 보낼 회원가입 정보
      const joinData = {
        username: username,
        password: password,
        // intro: intro,
      };
  
      // 회원가입 엔드포인트 URL
      // const joinEndpoint = 'http://10.125.121.188:8080/join';
      const joinEndpoint = 'http://localhost:8080/join';
  
      axios
        .post(joinEndpoint, joinData)
        .then((response) => {
          if (response.data === "Not") {
            alert('중복아이디입니다.');
            setUsername(''); // 아이디 초기화
            setPassword(''); // 비밀번호 초기화
            setPassword2(''); // 비밀번호 확인 초기화
            return;
          }
        
          // console.log('회원가입에 성공했습니다.', response);
          alert('회원가입에 성공했습니다.');
          
        // 회원 가입 성공 시 모달 열기
        setJoinSuccessModalVisible(true);
          navigate('/'); // 회원가입 후 로그인 페이지로 이동
        })
        .catch((error) => {
          console.error('Error during registration:', error);
          alert('회원가입에 실패했습니다.');
        });
    };


  return (
    <>
    <Cursor />
    <UserInfoLayout>
      {/* <Card className="shadow-2-strong" style={{ borderRadius: "1rem", position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "30%" }}> */}
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "90vh"}}>
            
        <Card className="shadow-2-strong animate__animated animate__pulse animate__slower animate__repeat-1" style={{ borderRadius: "1rem", width: "100%" }}>
        <Card.Body className="p-5 text-center">
          <h3 className="mb-3">
            <img src={joinImg} style={{ height: "140px", display: "block", margin: "0 auto"}} alt="Restroom"></img>
          </h3>
          {/* <Row> */}
          <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text id="idAddOn" style={{ fontSize: '25px' }}>아이디</InputGroup.Text>
            <Form.Control
              type="text"
              style={{ fontSize: '25px' }}
              aria-describedby="idAddOn"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
          </Col>

          {/* <Col>
          <InputGroup className="mb-3">
            <InputGroup.Text id="idAddOn" style={{ fontSize: '25px' }}>닉네임</InputGroup.Text>
            <Form.Control
              type="text"
              aria-describedby="idAddOn"
              value={name}
              onChange={(e) => setUsername(e.target.value)}
            />
          </InputGroup>
          </Col> */}

          {/* </Row> */}
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="pwAddOn" style={{ fontSize: '25px' }}>비밀번호</InputGroup.Text>
                <Form.Control
                  type="password"
                  style={{ fontSize: '25px' }}
                  aria-describedby="pwAddOn"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </InputGroup>
            </Col>
            <Col>
              <InputGroup className="mb-3">
                <InputGroup.Text id="pw2AddOn" style={{ fontSize: '25px' }}>비번확인</InputGroup.Text>
                <Form.Control
                  type="password"
                  style={{ fontSize: '25px' }}
                  aria-describedby="pw2AddOn"
                  value={password2}
                  onChange={(e) => setPassword2(e.target.value)}
                />
              </InputGroup>
            </Col>
          
          {/* <InputGroup className="mb-3">
            <InputGroup.Text id="simpleDescAddOn">한 줄 소개</InputGroup.Text>
            <Form.Control
              type="text"
              aria-describedby="simpleDescAddOn"
              value={intro}
              onChange={(e) => setIntro(e.target.value)}
            />
          </InputGroup> */}
          <Button
            className="btn-primary"
            style={{ width: "100%", fontSize: '25px' }}
            onClick={handleJoin}
          >
            회원가입
          </Button>
        </Card.Body>
      </Card>
      </div>
    </UserInfoLayout>
          {/* JoinSuccessModal 추가 */}
          <JoinSuccessModal
        showModal={joinSuccessModalVisible}
        onClose={() => setJoinSuccessModalVisible(false)}
      />
    </>
  );
};

export default Join;
