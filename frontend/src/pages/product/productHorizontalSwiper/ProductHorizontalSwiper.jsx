import styled from "styled-components";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

import "./styles.css";

const StyledSwiperContainer = styled.div`
  height: 100px;
  width: 100%;
  background-color: transparent;
`;

const ProductHorizontalSwiper = ({ productImages }) => {
  return (
    <StyledSwiperContainer>
      <Swiper
        slidesPerView="4"
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          800: {
            slidesPerView: 4,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        id="mySwiper2"
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

export default ProductHorizontalSwiper;
