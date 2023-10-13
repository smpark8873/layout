import React from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer'
import Contents from './Contents';

import '../scss/common.scss';

const Layout = () => {
	return (
		<div className='wrap'>        
            <Header />  
            <Contents />
            <Footer />
        </div> 
	);
};

export default Layout;

