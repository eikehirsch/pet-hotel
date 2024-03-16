import {
  StyleHotel,
  HotelContainer,
  HotelContainerHeader,
  Icon,
  TitleContainer,
  Title,
  Vacancy,
  HotelMainSection,
  HotelMainSectionHeader,
  SectionTitleContainer,
  ButtonsContainer,
  SectionTitle,
  SectionSubtitle,
  HotelBodyContainer,
  HotelLeftContainer,
  RatingsRow,
  Stars,
  Ratings,
  ReviewsContainer,
  HotelRightContainer,
  ChecksRow,
  CheckinBox,
  CheckinTitle,
  CheckinDate,
  CheckoutBox,
  CheckoutTitle,
  CheckoutDate,
  RightTitle,
  RightContainerRow,
  RowTitle,
  RowDetail,
  TotalRow,
  IconBox,
  TotalDetail,
  ProductsSection,
  SectionHeaderContainer,
  HeaderTitleContainer,
  GoogleMapsSection,
  GoogleMapTitle,
  GoogleMapAddress,
  ProductsTitle,
  ProductsSubtitle,
  SectionSubtitleContainer,
  CardsContainer,
} from "./styles.ts";

import Navbar from "../../components/navbar/Navbar.jsx";
import Button from "../../components/button/Button.jsx";
import Review from "../../components/review/Review.jsx";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import GoogleMaps from "../../components/googleMaps/GoogleMaps.jsx";

import hotel from "../../mocks/hotel.js";
import productCards from "../../mocks/productCards.js";

const Hotel = () => {
  return (
    <StyleHotel>
      <Navbar />
      <HotelContainer>
        <HotelContainerHeader>
          <Icon width="60px" height="60px" src={hotel.avatar} />
          <TitleContainer>
            <Title>{hotel.name}</Title>
            <Vacancy>
              <img src="./images/green-dot.png" alt="" /> {"Vagas disponíveis"}
            </Vacancy>
          </TitleContainer>
          <Icon width="32px" height="32px" src="./images/gray-flag.png" />
        </HotelContainerHeader>

        <HotelMainSection>
          <HotelMainSectionHeader>
            <SectionTitleContainer>
              <SectionTitle>Animal Village</SectionTitle>
              <SectionSubtitle>
                <img
                  width="6px"
                  height="6px"
                  src="./images/black-dot.png"
                  alt=""
                />
                <span style={{ color: "red" }}>Fechado</span>
                <span>Abre às 9:30</span>
              </SectionSubtitle>
            </SectionTitleContainer>
            <ButtonsContainer>
              <IconBox>
                <Icon
                  width="20px"
                  height="20px"
                  src="./images/green-whats.svg"
                />
              </IconBox>
              <IconBox>
                <Icon
                  width="20px"
                  height="20px"
                  src="./images/green-face.svg"
                />
              </IconBox>
              <IconBox>
                <Icon
                  width="20px"
                  height="20px"
                  src="./images/green-insta.svg"
                />
              </IconBox>
            </ButtonsContainer>
          </HotelMainSectionHeader>

          <HotelBodyContainer>
            <HotelLeftContainer>
              <RatingsRow>
                <span>{hotel.averageScore}</span>
                <Stars>
                  {Array.from(
                    Array(Number(Math.round(hotel.averageScore))),
                    (e, i) => {
                      return <img src="./images/black-star.svg" key={i} />;
                    }
                  )}
                </Stars>
                <Ratings>{`(${hotel.ratingsNumber})`}</Ratings>
              </RatingsRow>
              <ReviewsContainer>
                {hotel.userReviews.map((review) => (
                  <Review key={review.userName} review={review} />
                ))}
              </ReviewsContainer>
            </HotelLeftContainer>
            <HotelRightContainer>
              <ChecksRow>
                <CheckinBox>
                  <CheckinTitle>CHECK-IN</CheckinTitle>
                  <CheckinDate>19/02/2022</CheckinDate>
                </CheckinBox>
                <CheckoutBox>
                  <CheckoutTitle>CHECK-OUT</CheckoutTitle>
                  <CheckoutDate>26/02/2022</CheckoutDate>
                </CheckoutBox>
              </ChecksRow>
              <RightTitle>
                R$75,00 / <span>diária</span>
              </RightTitle>
              <Button
                color="#ffffff"
                backgroundColor="#0a846b"
                borderRadius="4px"
                fontWeight="400"
                width="80%"
              >
                Reservar
              </Button>
              <RowTitle color="#a7a7a7" fontSize="12px">
                Você não será cobrado ainda
              </RowTitle>
              <RightContainerRow>
                <RowTitle>R$79 x 7 diárias</RowTitle>
                <RowDetail>R$555</RowDetail>
              </RightContainerRow>
              <RightContainerRow>
                <RowTitle>Desconto:</RowTitle>
                <RowDetail>-R$28</RowDetail>
              </RightContainerRow>
              <RightContainerRow>
                <RowTitle>Taxa de serviço:</RowTitle>
                <RowDetail>R$83</RowDetail>
              </RightContainerRow>
              <RightContainerRow
                padding="0 10px 22px 10px"
                borderBottom="1px solid #e3e0e0"
              >
                <RowTitle>Taxa de ocupação:</RowTitle>
                <RowDetail>R$29</RowDetail>
              </RightContainerRow>
              <RightContainerRow>
                <TotalRow>Total:</TotalRow>
                <TotalDetail>R$701</TotalDetail>
              </RightContainerRow>
            </HotelRightContainer>
          </HotelBodyContainer>
        </HotelMainSection>

        <GoogleMapsSection>
          <GoogleMapTitle>Localização</GoogleMapTitle>
          <GoogleMapAddress>
            <Icon src="/images/map-pointer.svg" />
            {hotel.address}
          </GoogleMapAddress>
          {/* <GoogleMaps /> */}
        </GoogleMapsSection>

        <ProductsSection>
          <SectionHeaderContainer>
            <HeaderTitleContainer>
              <ProductsTitle>Os melhores produtos para o seu pet</ProductsTitle>
              <SectionSubtitleContainer>
                <ProductsSubtitle>Produtos</ProductsSubtitle>
              </SectionSubtitleContainer>
            </HeaderTitleContainer>
            <Button
              color="#0a846b"
              backgroundColor="transparent"
              border="2px solid #0a846b"
              borderRadius="50px"
              fontWeight="500"
              width="10%"
            >
              Ver mais {">"}
            </Button>
          </SectionHeaderContainer>

          <CardsContainer>
            {productCards !== undefined &&
              productCards.length > 0 &&
              productCards.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </CardsContainer>
        </ProductsSection>
      </HotelContainer>
    </StyleHotel>
  );
};

export default Hotel;
