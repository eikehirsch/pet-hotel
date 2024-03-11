import styled from "styled-components";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import "../VerticalSwiper/styles.css";

const StyledSwiperContainer = styled.div`
  height: 500px;
  background-color: transparent;
`;

const VerticalSwiper = ({ productImages }) => {
  return (
    <StyledSwiperContainer>
      <Swiper
        slidesPerView="4"
        direction={"vertical"}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {productImages.map((image) => (
          <SwiperSlide key={image}>
            <img src={image} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledSwiperContainer>
  );
};

export default VerticalSwiper;
