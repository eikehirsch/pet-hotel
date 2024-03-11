import styled from "styled-components";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';
import "./styles.css";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';

import relatedProducts from "../../mocks/relatedProductCards.js";

const StyledRelatedProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledRelatedProductCard = styled.div`
  background-color: white;
  border: 1px solid #ebe9e9;
  border-radius: 4px;
  padding: 6px 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: auto;
  height: auto;
  cursor: pointer;
`;

const StyledRelatedProductImage = styled.img`
  width: 220px !important;
  height: 220px !important;
`;

const StyledRelatedProductDetails = styled.div`
  padding: 0 8px;
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: 8px;
`;

const StyledRelatedProductTitle = styled.span`
  font-weight: 500;
  font-size: 14px;
  text-align: start;
`;

const StyledRelatedProductPriceRow = styled.div`
  display: flex;
  gap: 6px;
`;

const StyledRelatedProductPrices = styled.div`
  display: flex;
  gap: 6px;
`;

const StyledRelatedProductPrice = styled.span`
  font-weight: 500;
  font-size: 16px;
`;

const StyledRelatedProductDiscountedPrice = styled.span`
  color: #999999;
  font-weight: 500;
  font-size: 16px;
  text-decoration: line-through;
`;

const StyledRelatedProductBagIcon = styled.div``;

const StyledRelatedProductRating = styled.div`
  display: flex;
`;

const RelatedProducts = () => {
  return (
    <StyledRelatedProductsContainer>
      <Swiper
        slidesPerView="4"
        className="mySwiper"
        freeMode={true}
        scrollbar={true}
        mousewheel={true}
        modules={[FreeMode, Scrollbar, Mousewheel]}
      >
        {relatedProducts.map((relatedProduct) => (
          <SwiperSlide key={relatedProduct.title}>
            <StyledRelatedProductCard>
              <StyledRelatedProductImage src={relatedProduct.image} alt="" />
              <StyledRelatedProductDetails>
                <StyledRelatedProductTitle>
                  {relatedProduct.title}
                </StyledRelatedProductTitle>
                <StyledRelatedProductPriceRow>
                  <StyledRelatedProductPrices>
                    <StyledRelatedProductPrice>
                      R${relatedProduct.price}
                    </StyledRelatedProductPrice>
                    {relatedProduct.discountedPrice && (
                      <StyledRelatedProductDiscountedPrice>
                        {`R$ ${relatedProduct.discountedPrice}`}
                      </StyledRelatedProductDiscountedPrice>
                    )}
                  </StyledRelatedProductPrices>
                  <StyledRelatedProductBagIcon></StyledRelatedProductBagIcon>
                </StyledRelatedProductPriceRow>
                <StyledRelatedProductRating>
                  {Array.from(Array(relatedProduct.averageScore), (e, i) => {
                    return (
                      <img
                        style={{ width: "10px", height: "10px" }}
                        src="./images/full-star.svg"
                        key={i}
                      />
                    );
                  })}
                  {Array.from(
                    Array(5 - relatedProduct.averageScore),
                    (e, i) => {
                      return (
                        <img
                          style={{ width: "10px", height: "10px" }}
                          src="./images/empty-star.svg"
                          key={i}
                        />
                      );
                    }
                  )}
                </StyledRelatedProductRating>
              </StyledRelatedProductDetails>
            </StyledRelatedProductCard>
          </SwiperSlide>
        ))}
      </Swiper>
    </StyledRelatedProductsContainer>
  );
};

export default RelatedProducts;
