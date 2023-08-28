import React, { useState, useEffect } from "react";
import axios from "axios";
// import markerImageSrc from "../assets/images/free-icon-toilet-map.png"
import markerImageSrc from "../assets/images/map2.png"
import mapImage from "../assets/images/free-icon-restroom-map.png"

import "./MarkerOverlayStyle.css";


const Map = () => {
  const [openMarker, setOpenMarker] = useState(null);

  useEffect(() => {
    // 카카오맵 스크립트 읽어오기
    const script = document.createElement("script");
    script.src = "https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=fbc9bab75cda0fbd181adf55e503d79b";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById("kakaoMap");
        const options = {
          center: new window.kakao.maps.LatLng(35.179805, 129.074969), // 좌표설정
          level: 8
        };

        const map = new window.kakao.maps.Map(mapContainer, options);

        // 마커 클릭 시 팝업 띄우기 함수
        const showMarkerPopup = (marker, toilet) => {
          const overlay = new window.kakao.maps.CustomOverlay({
            content: `
            <div class="wrap">
            <div class="info">
              <div class="title">${toilet.toilet_name}</div>
              
            </div>
            <div class="content">
              <div class="img">
                <img src="${mapImage}" alt="마커 이미지" />
              </div>
              <div class="desc">${toilet.city} ${toilet.county}</div>
              <p class="desc">${toilet.load_address ? toilet.load_address : toilet.num_address}</p>
            </div>
          </div>

            `,
            position: marker.getPosition(),
            yAnchor: 1,
          });
          overlay.setMap(map);
          setOpenMarker(overlay);
        };

        const closeOverlay = () => {
          if (openMarker) {
            openMarker.setMap(null);
            setOpenMarker(null);
          }
        };

        // <div class="ellipsis"></div>

        
        const markerImage = new window.kakao.maps.MarkerImage(
          markerImageSrc, // 이미지 경로
          new window.kakao.maps.Size(40, 40), // 마커 이미지 크기 조정: 너비 30px, 높이 40px로 조정
          {
            offset: new window.kakao.maps.Point(15, 30), // 마커 이미지에서 중심으로 맞추어질 지점
            alt: "마커 이미지" // 대체 텍스트
          }
        );

        const fetchToiletsData = async () => {
          try {
            const response = await axios.get("http://localhost:8080/toilets");
            // const response = await axios.get("http://10.125.121.188:8080/toilets");
            const toiletsData = response.data;

            toiletsData.forEach((toilet) => {
              const latitude = parseFloat(toilet.latitude);
              const longitude = parseFloat(toilet.longitude);
              const markerPosition = new window.kakao.maps.LatLng(latitude, longitude);
              const marker = new window.kakao.maps.Marker({
                position: markerPosition,
                image: markerImage // 마커 이미지 설정
              });

            // 마커 클릭 이벤트 리스너 추가
            window.kakao.maps.event.addListener(marker, "click", () => {
              showMarkerPopup(marker, toilet);
            });

              marker.setMap(map);
            });
          } catch (error) {
            console.error("Error fetching toilet data: ", error);
          }
        };

        fetchToiletsData();
      });
    };


  }, []);

  useEffect(() => {
    return () => {
      if (openMarker) {
        openMarker.setMap(null);
      }
    };
  }, [openMarker]);



  

  return (
  <>
    <div id="kakaoMap" style={{ width: "100%", height: "700px" }}> </div>
  </>
  );
};

export default Map;




///////////////////// 소재지지번주소를 geocoder로 경도와 위도로 변환하여 마크를 찍으려 했지만, 아무 것도 표시가 안 됨.
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// // import './styles/map.css';

// const Map = () => {
//   const [toilets, setToilets] = useState([]);

//   useEffect(() => {
//     const fetchToilets = async () => {
//       try {
//         const response = await axios.get('http://localhost:8080/toilets');
//         setToilets(response.data);
//       } catch (error) {
//         console.error('Failed to fetch toilets:', error);
//       }
//     };

//     fetchToilets();
//   }, []);

//   useEffect(() => {
//     if (window.kakao) {
//       const script = document.createElement('script');
//       script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=fbc9bab75cda0fbd181adf55e503d79b';
//       document.head.appendChild(script);

//       script.onload = () => {
//         const kakao = window.kakao;
//         kakao.maps.load(() => {
//           const mapContainer = document.getElementById('map');
//           const options = {
//             center: new kakao.maps.LatLng(35.179805, 129.074969),
//             level: 4,
//           };

//           const map = new kakao.maps.Map(mapContainer, options);

//           toilets.forEach((toilet) => {
//             const geocoder = new kakao.maps.services.Geocoder();
//             geocoder.addressSearch(toilet.소재지지번주소, (result, status) => {
//               if (status === kakao.maps.services.Status.OK) {
//                 const markerPosition = new kakao.maps.LatLng(result[0].y, result[0].x);
//                 const marker = new kakao.maps.Marker({
//                   position: markerPosition,
//                 });
//                 marker.setMap(map);
//               }
//             });
//           });
//         });
//       };
//     }
//   }, [toilets]);

//   return (
//     <div className="App">
//       <div id="map" className="map" />
//     </div>
//   );
// };

// export default Map;




///////////////////////// 참고1.
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import './styles/map.css'

// const Map = () => {
//   const [toilets, setToilets] = useState([]);

//   useEffect(() => {
//     // 화장실 데이터를 스프링부트로부터 받아오는 함수
//     const fetchToilets = async () => {
//       try {
//         const response = await axios.get("http://localhost:8080/toilets");
//         setToilets(response.data);
//         console.log(toilets, "toilets")
//       } catch (error) {
//         console.error("Error fetching toilets data:", error);
//       }
//     };

//     fetchToilets();
//   }, []);

//   useEffect(() => {
//     // 카카오맵 스크립트 읽어오기
//     const new_script = src => {
//       return new Promise((resolve, reject) => {
//         const script = document.createElement('script');
//         script.src = src;
//         script.addEventListener('load', () => {
//           resolve();
//         });
//         script.addEventListener('error', e => {
//           reject(e);
//         });
//         document.head.appendChild(script);
//       });
//     };

//     // 스크립트 읽기 완료 후 카카오맵 설정
//     new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=fbc9bab75cda0fbd181adf55e503d79b')
//       .then(() => {
//         const kakao = window.kakao;
//         kakao.maps.load(() => {
//           const mapContainer = document.getElementById('map');
//           const options = {
//             center: new kakao.maps.LatLng(35.179805, 129.074969), // 기본 위치 설정
//             level: 4
//           };
//           const map = new kakao.maps.Map(mapContainer, options); // 맵 생성

//           // toilets 데이터에서 주소 정보 추출하여 지도에 마커 표시
//           toilets.forEach(toilet => {
//             const geocoder = new kakao.maps.services.Geocoder();
//             const address = toilet.소재지지번주소; // "소재지지번주소" 컬럼 사용
//             geocoder.addressSearch(address, (result, status) => {
//               if (status === kakao.maps.services.Status.OK) {
//                 const position = new kakao.maps.LatLng(result[0].y, result[0].x);
//                 const marker = new kakao.maps.Marker({
//                   position: position
//                 });
//                 marker.setMap(map);
//               }
//             });
//           });
//         });
//       });
//   }, [toilets]);

//   return (
//     <div className="App">
//       <div id="map" className="map" style={{ width: '500px', height: '500px' }} />
//     </div>
//   );
// }

// export default Map;







/////////////////////////// 참고2.
// import React, { useState, useEffect } from "react";
// import './styles/map.css'

// const Map = () => {
//   //스크립트 파일 읽어오기
//   const new_script = src => { 
//     return new Promise((resolve, reject) => { 
//       const script = document.createElement('script'); 
//       script.src = src; 
//       script.addEventListener('load', () => { 
//         resolve(); 
//       }); 
//       script.addEventListener('error', e => { 
//         reject(e); 
//       }); 
//       document.head.appendChild(script); 
//     }); 
//   };
  
//   useEffect(() => { 
//     //카카오맵 스크립트 읽어오기
//     const my_script = new_script('https://dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=fbc9bab75cda0fbd181adf55e503d79b');
    
//     //스크립트 읽기 완료 후 카카오맵 설정
//     my_script.then(() => { 
//       console.log('script loaded!!!');  
//       const kakao = window['kakao']; 

//       kakao.maps.load(() => {
//         const mapContainer = document.getElementById('map');
//         const options = { 
//           center: new kakao.maps.LatLng(35.179805, 129.074969), //좌표설정
//           level: 4 
//         }; 

//         const map = new kakao.maps.Map(mapContainer, options); //맵생성
//         //마커설정
//         const markerPosition = new kakao.maps.LatLng(35.179805, 129.074969); 
//         const marker = new kakao.maps.Marker({ 
//           position: markerPosition
//         }); 
//         marker.setMap(map); 
//       });   
//     }); 
//   }, []);

//   return (
//     <div className="App">
//       <div id="map" className="map"/>
//     </div>
//   );
// }


// export default Map;