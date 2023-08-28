import React, { useState, useEffect } from "react";
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import Cursor from '../Cursor';
import Map from './Map';
import NavMain from './NavMain';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

import toiletImg from '../assets/images/free-icon-toilet-main.png'
import restroomImg from "../assets/images/free-icon-toilet-map.png"
import goImg from "../assets/images/go.png"
import goImg2 from "../assets/images/go2.png"

const Intro = styled.div`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  
}

display: flex;
justify-content: center;
align-items: center;
height: 100vh;
background-color: #2e87ec;
font-family: 'GamjaFlower', sans-serif;

`;

const Left = styled.div`
display: flex;
flex-direction: column;  // 아이템들이 위에서 아래로 쌓이는 형태로 배치됨.
align-items: center;
justify-content: center; // 아이템들을 수평 방향으로 중앙 정렬

width: 50%; /* 왼쪽 영역이 화면의 절반을 차지 */
// padding: 20px;
// margin-right: 20px;
// margin-top: 40px;
// margin-left: 20px;
`

const ToiletImg = styled.div`
display: flex;
justify-content: center;
// margin-left: 20px;
// margin-bottom: 50px;

> img {
  width: 400px;
  height: 340px;
}



`;

const MainTitle = styled.div`
margin: 20px 0 0 0;
color: white;
font-size: 80px;

> span {
  font-weight: 600;

`;

const SubTitle = styled.div`
margin: 20px 0 30px 0;
color: white;
font-size: 24px;
font-weight: 600;

`
const InMoveTb = styled.div`
position: relative;
width: 200px;
height: 50px;
margin-top: -42px;
left: -350px;
transition: 0.3s;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;

> .btnText2 {
  // margin-right: -300px;
  margin-right: -150px;
}

`

const OutMoveTb = styled.button`
  background: white;
  width: 430px;
  height: 50px;
  overflow: hidden;
  transition: 0.2s;
  border: none;
  border-radius: 3px;
  cursor: pointer;

  > .btnText {
    margin-top: 12px;
    font-size: 20px;
    font-weight: 700;
    color: #1e2236;
    transition: 0.3s;
  }

  &:hover .btnText {
    margin-left: 65px;
  }

  &:hover ${InMoveTb} {
    left: -135px;
  }

  &:hover ${Intro} {
    background-color: white;
  }

`

const Right = styled.div`
  display: flex;
  width: 50%;
  align-items: center;
  justify-content: center;
`;


const MapContainer = styled.div`
height: 700px;

width: 100%;
border-radius: 10px; /* 테두리 둥글게 처리 */
overflow: hidden; /* 내부 내용이 넘치는 경우를 처리 */


margin-left: auto;
margin-right: 150px;
border-style: solid;
border-width: medium;
border-color: #dbeafe;
`


const Main = () => {
  const [mapTypeId, setMapTypeId] = useState(null);

  const [showTotal, setShowTotal] = useState(true);
  const [countingFinished, setCountingFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTotal(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
    <Cursor />


    <Intro>

    {/* {showTotal && (
          <div className="welcome-message">
                <div>
                    <CountUp end={1764} redraw={true}>
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                        <span ref={countUpRef} />
                        </VisibilitySensor>
                    )}
                    </CountUp>
                    {countingFinished && <p>이용 가능한 공공화장실 개수</p>}
                </div>
          </div>
        )} */}




    {/* {!showTotal && ( */}
      <>
      <Left>
        <ToiletImg>
          <img className='animate__animated animate__bounceInDown animate__slow'
            
            src={toiletImg}
            alt='toiletImg'
          />
        </ToiletImg>

        <MainTitle>
          지금,<span> 화장실</span>
        </MainTitle>

        <SubTitle className='animate__animated animate__zoomInDown  animate__slower'>
          <span>부산에서 화장실이 급할 땐!</span>
        </SubTitle>

        <Link to='/table'>
        <OutMoveTb>
              <p className='btnText'>화장실 리스트 보기</p>
            
            <InMoveTb>
              <p className='btnText2'>
                {/* <img src={restroomImg}style={{ height: "70px"}} alt='이미지' /> */}
                <img src={goImg2}style={{ height: "45px"}} alt='이미지' />
              </p>
            </InMoveTb>

          </OutMoveTb>
          {/* OutMoveTb */}
        </Link>

      </Left>
      <Right>
        <NavMain />


        
      <MapContainer>
        {/* Map 컴포넌트를 렌더링 */}
        <Map />

        </MapContainer>


      </Right>
      </>

    {/* )} */}
      </Intro>
    
    </>
  )
}

export default Main;
