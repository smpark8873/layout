import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MainWrapper = styled.div`
	
`;

const Main = (props) => {
	return (
		<MainWrapper>
			<Swiper className='main-slide' modules={[Navigation, Pagination, EffectFade, Autoplay]} 
				effect="fade"
				autoplay={{ delay: 2000, disableOnInteraction: false }}
				loop={true}      
				spaceBetween={50}
				slidesPerView={1}          
				// onSlideChange={() => console.log('slide change')}
				// onSwiper={(swiper) => console.log(swiper)}
				navigation
				pagination={{ clickable: true }          
				}
				>
				<SwiperSlide className='slide-item1'>Slide 1</SwiperSlide>
				<SwiperSlide className='slide-item2'>Slide 2</SwiperSlide>
				<SwiperSlide className='slide-item3'>Slide 3</SwiperSlide>
			</Swiper>			
		</MainWrapper>
	);
};

export default Main;