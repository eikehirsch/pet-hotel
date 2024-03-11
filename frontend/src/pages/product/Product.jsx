import {
  StyledProduct,
  ProductSection,
  ProductContainer,
  ProductLeftSubcontainer,
  ProductRightSubcontainer,
  SliderImage,
  MainImage,
  RightTitle,
  ReviewsRow,
  Stars,
  Reviews,
  PricesRow,
  Prices,
  Price,
  DiscountedPrice,
  DiscountedPercentage,
  Description,
  ButtonsRow,
  CounterContainer,
  CounterDecrease,
  CounterIncrease,
  CounterInput,
  FavouriteButton,
  MediaRow,
  MediaImage,
  MediaSvg,
  ReviewsContainer,
  RelatedProductsContainer,
  RelatedProductsTitle,
} from "./styles.ts";

import Navbar from "../../components/navbar/Navbar.jsx";
import Review from "../../components/review/Review.jsx";
import Button from "../../components/button/Button.jsx";
import VerticalSwiper from "../../components/VerticalSwiper/VerticalSwiper.jsx";
import RelatedProducts from "../../components/RelatesProducts/RelatedProducts.jsx";
import Footer from "../../components/footer/Footer.jsx";

import product from "../../mocks/product.js";

const Product = () => {
  return (
    <StyledProduct>
      <Navbar />
      <ProductSection>
        <ProductContainer>
          <ProductLeftSubcontainer>
            <SliderImage>
              <VerticalSwiper productImages={product.images} />
            </SliderImage>
            <MainImage src={product.images[0]} />
          </ProductLeftSubcontainer>
          <ProductRightSubcontainer>
            <div>
              <RightTitle>{product.name}</RightTitle>
              <ReviewsRow>
                <Stars>
                  {Array.from(Array(product.averageScore), (e, i) => {
                    return <img src="./images/full-star.svg" key={i} />;
                  })}
                  {Array.from(Array(5 - product.averageScore), (e, i) => {
                    return <img src="./images/empty-star.svg" key={i} />;
                  })}
                </Stars>
                <Reviews>{`${product.reviewsNumber} Avaliações`}</Reviews>
              </ReviewsRow>
              <PricesRow>
                <Prices>
                  <Price>R${product.price}</Price>
                  <DiscountedPrice>R${product.discountedPrice}</DiscountedPrice>
                </Prices>
                <DiscountedPercentage>
                  {product.discountedPercentage}% Oferta
                </DiscountedPercentage>
              </PricesRow>
            </div>
            <Description>{product.description}</Description>
            <ButtonsRow>
              <CounterContainer>
                <CounterDecrease>-</CounterDecrease>
                <CounterInput value={1} />
                <CounterIncrease>+</CounterIncrease>
              </CounterContainer>
              <Button
                color="#ffffff"
                backgroundColor="#0a846b"
                borderRadius="8px"
                fontWeight="500"
              >
                Adicionar ao carrinho
                <img src="images/cart-white.svg" alt="" />
              </Button>

              <FavouriteButton>
                <img src="images/heart.svg" alt="" />
              </FavouriteButton>
            </ButtonsRow>
            <MediaRow>
              <span>Compartilhar:</span>
              <MediaImage src="./images/facebook.png" />
              <MediaSvg src="./images/twitter.svg" />
              <MediaSvg src="./images/pinterest.svg" />
              <MediaSvg src="./images/instagram.svg" />
            </MediaRow>
          </ProductRightSubcontainer>
        </ProductContainer>
        <ReviewsContainer>
          {product.userReviews.map((review) => (
            <Review key={review.userName} review={review} />
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              marginTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <Button
              color="#0a846b"
              backgroundColor="#e5efec"
              borderRadius="50px"
              fontWeight="500"
              padding="10px 26px"
            >
              Mostrar mais
            </Button>
          </div>
        </ReviewsContainer>
        <RelatedProductsContainer>
          <RelatedProductsTitle>Produtos relacionados</RelatedProductsTitle>
          <RelatedProducts />
        </RelatedProductsContainer>
      </ProductSection>

      <Footer />
    </StyledProduct>
  );
};

export default Product;
