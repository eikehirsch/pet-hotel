import {
  StyledHome,
  FirstBanner,
  Hero,
  HeroTitle,
  OrangeHeroSpan,
  HeroInputContainer,
  HeroInput,
  SectionContainer,
  SectionTitle,
  ButtonBox,
  SectionSubtitleContainer,
  SectionSubtitle,
  CardsContainer,
  SecondBanner,
  SecondBannerButton,
} from "./styles.ts";

import Navbar from "../../components/navbar/Navbar.jsx";
import LodgingCard from "../../components/lodgingCard/LodgingCard.jsx";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import Button from "../../components/button/Button.jsx";
import Footer from "../../components/footer/Footer.jsx";

import lodgingCards from "../../mocks/lodgingCards.js";
import productCards from "../../mocks/productCards.js";

const Home = () => {
  return (
    <StyledHome>
      <Navbar borderBottom="none" />
      <FirstBanner />
      <Hero>
        <HeroTitle>
          Reserva agora e proporcione ao seu pet uma{" "}
          <OrangeHeroSpan>estadia segura</OrangeHeroSpan> e{" "}
          <OrangeHeroSpan>cheia de carinho</OrangeHeroSpan>!
        </HeroTitle>

        <HeroInputContainer>
          <HeroInput borderRight type="text" placeholder="Cidade" />
          <HeroInput type="text" placeholder="Pet" />
          <Button color="white" backgroundColor="#f26938" borderRadius={"50px"}>
            Buscar
          </Button>
        </HeroInputContainer>
      </Hero>

      <SectionContainer>
        <SectionTitle>Hospedagens</SectionTitle>
        <SectionSubtitleContainer>
          <SectionSubtitle>Mais Populares</SectionSubtitle>
          <ButtonBox>
            <Button
              color="#0a846b"
              backgroundColor="transparent"
              border="2px solid #0a846b"
              borderRadius="50px"
              fontWeight="500"
            >
              Ver mais {">"}
            </Button>
          </ButtonBox>
        </SectionSubtitleContainer>
        <CardsContainer>
          {lodgingCards !== undefined &&
            lodgingCards.length > 0 &&
            lodgingCards.map((lodging) => (
              <LodgingCard lodging={lodging} key={lodging.id} />
            ))}
        </CardsContainer>
      </SectionContainer>

      <SecondBanner>
        <SecondBannerButton>Ver mais {">"}</SecondBannerButton>
      </SecondBanner>

      <SectionContainer>
        <SectionTitle>Para o seu pet</SectionTitle>
        <SectionSubtitleContainer>
          <SectionSubtitle>Produtos</SectionSubtitle>
        </SectionSubtitleContainer>
        <CardsContainer>
          {productCards !== undefined &&
            productCards.length > 0 &&
            productCards.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </CardsContainer>

        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "30px",
          }}
        >
          <ButtonBox>
            <Button
              color="#0a846b"
              backgroundColor="transparent"
              border="2px solid #0a846b"
              borderRadius="50px"
              fontWeight="500"
            >
              Ver mais {">"}
            </Button>
          </ButtonBox>
        </div>
      </SectionContainer>

      <Footer />
    </StyledHome>
  );
};

export default Home;
