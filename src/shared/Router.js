import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

function Router() {
  return (
    // BrowserRouter 컴포넌트는 브라우저에서 사용되는 HTML5 history API 기반으로 라우팅을 처리
    <BrowserRouter>
      {/* Routes 컴포넌트는 라우트들을 그룹화하고, 경로에 따라 해당하는 컴포넌트를 렌더링 */}
      <Routes>
        {/* Route 각각의 컴포넌트는 특정 경로에 대해 라우팅을 저의, 해당 경로에 매칭될 경우
        지정된 컴포넌트를 렌더링 */}
        <Route path="/" element={<Home />} />
        {/* Home 컴포넌트를 렌더링하고, 애플리케이션 루트 경로인 "/"에 대한 라우팅을 정의 */}
        <Route path="/detail/:id/:title/:content" element={<Detail />} />
        {/* Detail 컴포넌트를 렌더링하고, :id/:title/:content는 해당 경로에서 변하는 값들을 나타내고
        이 값들은 Detail 컴포넌트에서 useParams를 통해 추출 */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
