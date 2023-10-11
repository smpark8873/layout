import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/Header';
import Main from './pages/Main';
import Intro from './pages/Intro';
import Business from './pages/Business';
import Animation from './pages/Animation';
// import Product from './pages/Product';
import NotFound from './pages/NotFound';
import './scss/common.scss';

const App = () => {
	return (
		<div className='App'>
        <BrowserRouter>
            <Header />                        
            <Routes>
              <Route path="/" element={<Main />}></Route>
              <Route path="/Intro" element={<Intro />}></Route>
              <Route path="/Business" element={<Business />}></Route>
              <Route path="/Animation" element={<Animation />}></Route>
              {/* <Route path="/product/:productId" element={<Product />}></Route> */}
              {/* 엘리먼트의 상단에 위치하는 라우트들의 규칙을 모두 확인하고, 일치하는 라우트가 없다면 이 라우트가 화면에 나타나게 됩니다. */}
              <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </BrowserRouter>
		</div>
	);
};

export default App;

