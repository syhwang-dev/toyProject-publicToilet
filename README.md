![header](https://capsule-render.vercel.app/api?type=soft&color=0:2e87ec,100:8dd2f7&height=300&section=header&text=Public%20Toilet%20Info&fontColor=FFFFFF&fontSize=60&desc=Web%20Project%20using%20public%20data&descAlignY=70&animation=fadeIn)



<div align="center">
	<img src="https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white"/>
    <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=flat&logo=Tailwind CSS&logoColor=white"/>
</div>

<div align="center">
    <img src="https://img.shields.io/badge/springboot-6DB33F?style=flat&logo=springboot&logoColor=white">
    <img src="https://img.shields.io/badge/springsecurity 6.1.1-6DB33F?style=flat&logo=springsecurity&logoColor=white">
    <img src="https://img.shields.io/badge/mysql-4479A1?style=flat&logo=mysql&logoColor=white">
</div>

<div align="center">
    <img src="https://img.shields.io/badge/Visual Studio Code-007ACC?style=flat&logo=Visual Studio Code&logoColor=white"/>
    <img src="https://img.shields.io/badge/Postman-FF6C37?style=flat&logo=Postman&logoColor=white"/>
    <img src="https://img.shields.io/badge/GitHub-181717?style=flat&logo=GitHub&logoColor=white"/>
    

</div>

## 💻 프로젝트 소개
공공데이터를 활용한 부산광역시 공공화장실 안내 사이트

## 🎥 시연
![](/_source/Project_Demo.gif)

## 👩🏻‍🤝‍👩🏻 팀원
|황선영|김은빈|
|:---:|:---:|
|FE|BE|
|[GitHub](https://github.com/syhwang-dev)|[GitHub](https://github.com/ksm54654)|
|![](/_source/FE.png)|![](/_source/BE.png)|

## ⏰ 개발 기간
- 23.07.24 ~ 23.08.17

## 📚 개발 환경
- React 18.2.0
- Spring Boot 3.1.2
- MySQL 8.0.33

## 📌 주요 기능
- 회원가입 
- 로그인 & 로그아웃
- 이미지 업로드
- 지도에서 공공화장실 위치 보기
- 공공화장실 정보 리스트 보기
- 공공화장실 정보 상세 기능 구현
    - 공공화장실 정보 상세 보기
    - 공공화장실 정보 추가하기
    - 공공화장실 정보 수정하기
    - 공공화장실 정보 삭제하기

## 📃 개발 일지
### 23.07.24
- 프로젝트 주제 선정
    - 공공데이터포털에서 제공하는 공중화장실데이터를 활용하여 웹 서비스 만들기
- 데이터 다운로드
    - <https://www.data.go.kr/data/15012892/standard.do>
- 데이터 베이스 생성

### 23.07.25
- 프로젝트 이름 결정
    - "지금, 화장실"
- 테이블 생성 및 csv파일 업로드

### 23.07.26
- 화면 설계
    - main / map / upload 페이지 
- API 설계

### 23.07.27
- 회원가입 & 로그인 컴포넌트 생성
- 스프링부트 domain / controller 생성
- Member 테이블 생성 (postman으로 회원가입 테스트)
- 회원가입 구현

### 23.07.28
- 로그인 시도 및 연결 → 잘 되지 않음😥

### 23.07.31
- Main 페이지 작업
- ToiletData 테이블 생성
- 데이터 조회 & 데이터 리스트 불러오기 구현

### 23.08.01
- 리액트와 스프링부트 연결 성공🤩
    - 잘못된 url로 시도했었음.
- WebConfig 파일 추가
- 데이터 정보 수정 기능 구현

### 23.08.02
- 공공화장실 테이블 페이지 구현
- 데이터 정보 삽입 구현
- 데이터 정보 삭제 구현

### 23.08.03
- 테이블 페이징 구현
- 로그인 로직 구현 > 실패

### 23.08.04
- Kakao map API를 사용한 지도 구현
- 로그인 로직 구현 > 성공

### 23.08.07
- 테이블 상세 보기 컴포넌트 구현
- 권한 테스트

### 23.08.08
- 폰트 및 배경 컬러 통일
- 권한 테스트

### 23.08.09
- 필수 컬럼 정리 및 코드 정리
- 테이블 정리

### 23.08.10
- 테이블 삭제 및 경고창 구현
- 공공화장실 정보 추가하기
- 로그인 오류 수정 

### 23.08.11
- 지도에 공공화장실 정보 출력
- 로그아웃 구현

### 23.08.14
- main 페이지 애니메이션 효과 추가
- 커스텀 커서 구현 성공
- 공공화장실 정보 필터 구현

### 23.08.15
- 화장실 정보 필터 기능 추가
- 이미지를 서버에 저장하고 데이터베이스에는 링크 저장하는 방식 시도

### 23.08.16
- 이미지만 업로드 구현
- 최종 기능 확인 및 정리 

### 23.08.17
- ✨ 발표 🎉

<br/>

![footer](https://capsule-render.vercel.app/api?type=soft&color=0:2e87ec,100:8dd2f7&section=footer)