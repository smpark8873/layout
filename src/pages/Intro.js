import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper/modules';
// , EffectFade, Autoplay, A11y
// import { useState } from 'react';
import ReactPlayer from 'react-player'

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import 'swiper/scss/scrollbar';
import "swiper/scss/effect-fade";




const Intro = () => {
    // const videos = [
    //     {
    //         id: 1,
    //         url: 'https://www.youtube.com/embed/xVZoH0wG5mg?si=ZYyB8vqqaBmm7HSG',
    //     },
    //     {
    //         id: 2,
    //         url: 'https://www.youtube.com/embed/ooVfckLBtks?si=NU8wcMYcMYwbesOY',
    //     }
    // ];

    // const [isPlaying, setIsPlaying] = useState(null);

    return (
        <div className='wrapper'>            
            {/* <Swiper
                className="mySwiper"
                onSlideChange={() => { setIsPlaying(null); }}
                autoplay={false}
                watchSlidesProgress={true}
                navigation
				pagination={{ clickable: true }}
            >
                {videos.map((data) => (
                    <SwiperSlide key={data.id}>
                        <ReactPlayer
                            width="100%" 
                            height="100%" 
                            muted={true}
                            key={data.id}
                            url={data.url}
                            controls={true}
                            onPlay={() => {
                                setIsPlaying(data.id);
                            }}
                            playing={isPlaying === data.id}
                         />
                    </SwiperSlide>
                ))}
            </Swiper> */}
            <div className='player-wrapper'>                
                <ReactPlayer
                className='react-player'
                url='https://www.youtube.com/embed/xVZoH0wG5mg?si=ZYyB8vqqaBmm7HSG'
                width='100%'
                height='100%'
                muted={true}
                playing={true}
                />
            </div>            
        </div>
    );
};
  
export default Intro;