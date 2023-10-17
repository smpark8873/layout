import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Autoplay, A11y } from 'swiper/modules';
import styled from 'styled-components';


// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import "swiper/scss/effect-fade";

const SwiperWapper = styled.div`
	
`;

function Slide() {
    return (
        <SwiperWapper>
            <Swiper className='main-slide' modules={[Navigation, Pagination, EffectFade, Autoplay, A11y]} 
                spaceBetween={50}
                slidesPerView={7}                
                navigation
                pagination={{ clickable: true }}
                effect="fade"
                autoplay={{ delay: 2000, disableOnInteraction: true}}
                loop={true}
                >
                <SwiperSlide className='slide-item1'></SwiperSlide>
                <SwiperSlide className='slide-item2'></SwiperSlide>
                <SwiperSlide className='slide-item3'></SwiperSlide>				
            </Swiper>

            <Swiper className='gallery-slide' modules={[Navigation, Pagination, Autoplay, A11y]} 
                spaceBetween={30}
                slidesPerView={7}
                loop={true}
                navigation={true}
                pagination={{ clickable: true }}                
                autoplay={{ delay: 2000, disableOnInteraction: true }}
                loopedSlides={1}
             //   speed = '500'
              //  reverseDirection = {true}
                >
                <SwiperSlide><img src="https://lifet-img.s3.ap-northeast-2.amazonaws.com/6b980705-1d57-46a4-8193-ca490d19d00d" /></SwiperSlide>
                <SwiperSlide><img src="https://img.catpre.com/mobile/catpre/event/main_banner/_top1_m_202310131412371.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://dimg.donga.com/wps/NEWS/IMAGE/2023/05/12/119255016.1.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://www.sisain.co.kr/news/photo/202110/45791_82634_4851.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://cat-lab.co.kr/data/editor/2203/4fea39b9ee8ab23e62522153035041fc_1646215721_8448.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://cdn.ccdailynews.com/news/photo/202104/2050116_530468_210.png" /></SwiperSlide>
                <SwiperSlide><img src="https://cdn.ccdailynews.com/news/photo/202104/2050116_530468_210.png" /></SwiperSlide>
                <SwiperSlide><img src="https://cdn.edujin.co.kr/news/photo/202105/35768_68227_247.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://wimg.mk.co.kr/meet/neds/2021/06/image_readtop_2021_535745_16226846584668330.jpg" /></SwiperSlide>
                <SwiperSlide><img src="https://i.namu.wiki/i/XGgP6E-6eOwHuC84pFQpqvTvFAj1VjJQJlOOQV7Ky3MrBzI-IdXGw9r4L1YkCxUv5Uk3rYVWkmWHY8unoh8iSQ.webp" /></SwiperSlide>
			
            </Swiper>		
        </SwiperWapper>
    );
}

export default Slide;