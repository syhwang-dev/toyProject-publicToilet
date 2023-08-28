import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from "./pages/Login";
import Main from "./pages/Main";
import Join from "./pages/Join"
import Map from "./pages/Map"
import TableList from "./crud/TableList"
import TokenManager from './pages/TokenManger';
import './styles/reactboot.css'
import TotalCount from './pages/TotalCount';
import WelcomePage from './WelcomePage'
import React, { useState, useEffect } from 'react';

const App = () => {
  const [countingFinished, setCountingFinished] = useState(false);

  useEffect(() => {
    // 여기에 카운팅이 끝나는 로직을 작성합니다.
    setTimeout(() => setCountingFinished(true), 3000);
  }, []);

  return (
    <TokenManager> {/* TokenManager 컴포넌트를 App 컴포넌트 안에서 렌더링합니다. */}
    <BrowserRouter>
      <Routes>
        <Route path="/tmp" element={<WelcomePage />} />
        <Route path="/" element={<Login />} />
        <Route path="/join" element={<Join />} />

        {/* <Route path="/main" element={<Main />} /> */}
        <Route path="/main" element={<Main />} />
        <Route path="/map" element={<Map />} />
        <Route path="/table" element={<TableList />} />
        {/* {isAuthenticated && <Route path="/table" component={<TableList />} />} */}
      </Routes>
    </BrowserRouter>
    </TokenManager>
  );
};

export default App;

//  "proxy": "http://10.125.121.188:8080",
// spring.datasource.url=jdbc:mysql://localhost:3306/mini-project