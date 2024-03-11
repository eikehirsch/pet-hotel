import {
  StyledHotelProducts,
  HotelContainerHeader,
  Banner,
  HotelProductsContainer,
  Icon,
  TitleContainer,
  Title,
  Vacancy,
  GalerySection,
  SectionTitle,
  SectionSubtitle,
  AboutSection,
  AboutLeftBox,
  AboutRightBox,
  RightDescription,
  ProductsSection,
  PaginatorSection,
  ProductsHeader,
  ProductsTitleBox,
  CardsContainer,
  ReviewsSection,
  ReviewsContainer,
  LocationSection,
  LocationDescriptionBox,
  LocationDescription,
  LocationPosition,
} from "./styles.ts";

import Navbar from "../../components/navbar/Navbar.jsx";
import Footer from "../../components/footer/Footer.jsx";
import Button from "../../components/button/Button.jsx";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import Review from "../../components/review/Review.jsx";

import hotel from "../../mocks/hotel.js";
import productCards from "../../mocks/productCards.js";

const HotelProducts = () => {
  return (
    <StyledHotelProducts>
      <Navbar borderBottom="none" />
      <Banner />
      <HotelProductsContainer>
        <HotelContainerHeader>
          <Icon width="60px" height="60px" src={hotel.avatar} />
          <TitleContainer>
            <Title>{hotel.name}</Title>
            <Vacancy>
              <img src="./images/green-dot.png" alt="" /> {"Vagas disponíveis"}
            </Vacancy>
          </TitleContainer>
          <Icon
            marginRight="10px"
            width="32px"
            height="32px"
            src="./images/gray-flag.png"
          />
          <Button
            padding="10px 20px"
            color="white"
            backgroundColor="#f26938"
            borderRadius={"10px"}
          >
            <Icon
              width="18px"
              height="18px"
              src="./images/reservation-icon.svg"
            />
            Reservar
          </Button>
        </HotelContainerHeader>
        <GalerySection>
          <SectionTitle>Nosso espaço</SectionTitle>
          <SectionSubtitle>Galeria</SectionSubtitle>
        </GalerySection>
        <AboutSection>
          <AboutLeftBox>
            <SectionTitle>Sobre nós</SectionTitle>
            <SectionSubtitle>Animal Village</SectionSubtitle>
          </AboutLeftBox>
          <AboutRightBox>
            <RightDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              auctor, velit vel faucibus interdum, justo urna aliquet massa, ac
              volutpat libero orci ac justo. Nullam cursus, purus ac dapibus
              tincidunt, libero erat volutpat quam, eu fermentum tortor mauris
              ac risus. Integer nec odio eu elit congue laoreet. Fusce eget
              justo ac nisl ultrices gravida non nec urna. Sed id ultricies
              odio. Curabitur vitae condimentum justo.
            </RightDescription>
          </AboutRightBox>
        </AboutSection>
        <ProductsSection>
          <ProductsHeader>
            <ProductsTitleBox>
              <SectionTitle>Para o seu pet</SectionTitle>
              <SectionSubtitle>Produtos</SectionSubtitle>
            </ProductsTitleBox>
            <Button
              color="#0a846b"
              backgroundColor="transparent"
              border="2px solid #0a846b"
              borderRadius="50px"
              fontWeight="500"
              width="80px"
            >
              Ver mais {">"}
            </Button>
          </ProductsHeader>
          <CardsContainer>
            {productCards !== undefined &&
              productCards.length > 0 &&
              productCards.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </CardsContainer>
        </ProductsSection>
        <PaginatorSection>
          <Button
            padding="6px 20px"
            border="1px solid #cccccc"
            borderRadius={"10px"}
            color="black"
          >
            <Icon src="./images/arrow-left.svg" />
            Anterior
          </Button>
          <Button
            padding="6px 20px"
            border="1px solid #cccccc"
            borderRadius={"10px"}
            color="black"
          >
            Próximo
            <Icon src="./images/arrow-right.svg" />
          </Button>
        </PaginatorSection>
        <ReviewsSection>
          <SectionTitle>Os nossos clientes dizem</SectionTitle>
          <SectionSubtitle>Avaliações</SectionSubtitle>
          <ReviewsContainer>
            {hotel.userReviews.map((review) => (
              <Review key={review.userName} review={review} />
            ))}
          </ReviewsContainer>
        </ReviewsSection>
        <LocationSection>
          <SectionTitle>Nos encontre</SectionTitle>
          <SectionSubtitle>Localização</SectionSubtitle>
          <LocationDescriptionBox>
            <Icon width="18px" height="18px" src="./images/location-icon.svg" />
            <LocationDescription>
              Rua Sabino Anisio da Silveira, 1145 - Campeche, Florianópolis -
              SC, 88065-033
            </LocationDescription>
          </LocationDescriptionBox>
          <LocationPosition src="./images/google-maps.png" />
        </LocationSection>
      </HotelProductsContainer>
      <Footer />
    </StyledHotelProducts>
  );
};

export default HotelProducts;
