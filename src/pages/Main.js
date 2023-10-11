import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import "swiper/scss/effect-fade";

const MainWrapper = styled.div`
	
`;

const Main = (props) => {
	return (
		<MainWrapper>
			<Swiper className='main-slide' modules={[Navigation, Pagination, EffectFade, Autoplay, A11y]} 
				spaceBetween={50}
				slidesPerView={1}
				// navigation
				// pagination={{ clickable: true }}
				 effect="fade"
				autoplay={{ delay: 2000, disableOnInteraction: false }}
				loop={true}
				>
				<SwiperSlide className='slide-item1'></SwiperSlide>
				<SwiperSlide className='slide-item2'></SwiperSlide>
				<SwiperSlide className='slide-item3'></SwiperSlide>				
			</Swiper>			
		</MainWrapper>
	);
};

export default Main;