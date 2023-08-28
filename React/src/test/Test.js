import React, { useState, useEffect } from "react";
//import './App.css';



function KakaoMap (props) {

  const [member1List, setMember1List] = useState([])
  const [member2List, setMember2List] = useState([])

  useEffect(() => {
    const key = 'e6a331db57a19280eec798002d40195a';
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${key}&autoload=false`;
    document.head.appendChild(script);




    script.onload = () => {
      
      const { kakao } = window;

      kakao.maps.load(() => {
        const mapContainer = document.getElementById("map");
        var mapOption = {
          center: new kakao.maps.LatLng(35.179805, 129.074969),
          level: 6
        };

        // 마커를 표시할 위치입니다 
        var  map = new kakao.maps.Map(mapContainer, mapOption);

        // 여러개 포지션 찍기(1)
        var positions = member1List

      
        for (var i = 0; i < positions.length; i++)  {
          
          
          var position_temp = new kakao.maps.LatLng(member1List[i].mb_latitude, member1List[i].mb_longitude)
          

          var marker = new kakao.maps.Marker({
            map: map, 
            position: position_temp, 
            title : positions[i].title   
          });
          var iwContent = `<div style="padding:5px;">${member1List[i].mb_name}</div>`
          
          var infowindow = new kakao.maps.InfoWindow({
            content: iwContent
          });
          
          (function(marker, infowindow){
            kakao.maps.event.addListener(marker,'mouseover', function(){
              infowindow.open(map, marker);
            });
          
            kakao.maps.event.addListener(marker,'mouseout', function(){
              infowindow.close();
            });
          })(marker,infowindow);

          marker.setMap(map)

        
          
        }    

        // 여러개 포지션 찍기 (2)

        var positions = member2List

      
        for (var i = 0; i < positions.length; i++)  {
          
          
          var position_temp = new kakao.maps.LatLng(member2List[i].mb_latitude, member2List[i].mb_longitude)
          
          var imageSize = new kakao.maps.Size(24, 35)
          var markerImage = new kakao.maps.MarkerImage('icon/star.png', imageSize)


          var marker = new kakao.maps.Marker({
            map: map, 
            position: position_temp, 
            title : positions[i].title,
            image : markerImage
          });
          var iwContent = `<div style="padding:5px;">${member2List[i].mb_name}</div>`
          var infowindow = new kakao.maps.InfoWindow({
            content: iwContent
          });
          
          (function(marker, infowindow){
            kakao.maps.event.addListener(marker,'mouseover', function(){
              infowindow.open(map, marker);
            });
          
            kakao.maps.event.addListener(marker,'mouseout', function(){
              infowindow.close();
            });
          })(marker,infowindow);



          marker.setMap(map)
          
        }        

      });
    };
  }, [member1List, member2List]);


  useEffect(() => {

    fetch('http://localhost:8080/member1')
    .then(response => response.json())
    .then(response => {
      setMember1List(response)
      console.log(member1List)
    })
    .catch(error => console.error('Error fetching data:', error));


    fetch('http://localhost:8080/member2')
    .then(response => response.json())
    .then(response => {
      setMember2List(response)
      console.log(member2List)
    })
    .catch(error => console.error('Error fetching data:', error));
    console.log("Hello World")
  }, [])

  return (
    
    
    <div className="Map">
      <div id="map" style={{ width: "960px", height: "750px" }}></div>
    </div>
    

  );
}

export default KakaoMap;


// // import logo from './logo.svg';
// import React, {useState, useEffect} from 'react';
// // import './App.css';

// function Test() {

//   // message 초기값을 ""으로 설정.
//   const [message, setMessage] = useState("");

//   // useEffect(함수,배열) : 컴포넌트가 화면에 나타났을(마운트)때 자동 실행.
//   useEffect( () => {
     
//         // fetch(url,options) : HTTP 요청 함수
//         fetch('/hello')
//         .then(response => response.text())
//         .then(message => {
//         setMessage(message);
//         });
//         },[])
        
//   return (
//   <div className="App">
//     <header className="App-header">
//       {/* <img src={logo} className="App-logo" alt="logo"/> */}
//        <h1 className="App-title">{message}</h1>
//     </header>
//     <p className="App-intro">
//       안녕
//     </p>
//   </div>
//   )
// }

// export default Test;