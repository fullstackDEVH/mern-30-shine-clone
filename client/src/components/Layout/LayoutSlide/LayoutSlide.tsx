import React, { FC} from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {  Navigation } from "swiper";
import { Swiper, SwiperSlide  } from "swiper/react";

import img from '../../../assets/img1.jpg';
import { IBlog } from '../../../interface/layout';

interface IProp {
  blog : IBlog[] | undefined
}

const LayoutSlide:FC<IProp> = () => {
    // thử useSwipper trên react codesanbox
   
    // const swiper = useSwiper();

    return <div className = "layout-blog">
        
        <Swiper
        // onSlideChange={(swiper) => console.log(swiper.realIndex)}
        slidesPerView={1}
        spaceBetween={10}
        grabCursor={true}
      
        pagination={{
          clickable: false
        }}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50
          }
        }}
        modules={[ Navigation]}
        className="mySwiper"
      >
        {
          [1,2,3,4,5,6,7,8].map((a,i)=> (
            <SwiperSlide key = {i}>
              <div className="slide__item">
                  <a href="/" >
                    <img src={img} alt="" className = "hover-scale" />
                  </a>
                  <a href="/">
                    <p className="box-2">Supporter thân thiện - Đón tiếp, lắng nghe và hỗ trợ bạn mọi lúc</p>
                  </a>
              </div>
            </SwiperSlide>
          ))
        }
        
      </Swiper>

     
    </div>
};

export default LayoutSlide;