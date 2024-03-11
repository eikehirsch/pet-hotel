import {
  StyledProducts,
  ProductsContainer,
  LeftContainer,
  LeftSection,
  LeftTitle,
  LeftSectionTitle,
  LeftSectionItem,
  InputRangeContainer,
  InputRange,
  InputRangeDetails,
  RightContainer,
  CardsContainer,
} from "./styles.ts";

import productCards from "../../mocks/productCards.js";
import ProductCard from "../../components/productCard/ProductCard.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

const Lodgings = () => {
  return (
    <StyledProducts>
      <Navbar />
      <ProductsContainer>
        <LeftContainer>
          <LeftTitle>Filtros</LeftTitle>
          <LeftSection>
            <LeftSectionTitle>Tipo</LeftSectionTitle>
            <LeftSectionItem>Ração</LeftSectionItem>
            <LeftSectionItem>Brinquedos</LeftSectionItem>
            <LeftSectionItem>Remédio</LeftSectionItem>
          </LeftSection>
          <LeftSection>
            <LeftSectionTitle>Quero hospedar</LeftSectionTitle>
            <LeftSectionItem>Cão de pequeno porte</LeftSectionItem>
            <LeftSectionItem>Cão de médio porte</LeftSectionItem>
            <LeftSectionItem>Cão de grande porte</LeftSectionItem>
            <LeftSectionItem>Gato</LeftSectionItem>
            <InputRangeContainer>
              <InputRangeDetails>
                <span>R$ 0</span>
                <span>R$ 1000</span>
              </InputRangeDetails>
              <InputRange type="range" />
            </InputRangeContainer>
          </LeftSection>
        </LeftContainer>
        <RightContainer>
          {/* <SearchInputContainer>
            <Icon width="16px" src="./images/search-icon.svg" alt="" />
            <SearchInput type="text" placeholder="Procure por produtos" />
          </SearchInputContainer> */}
          <CardsContainer>
            {productCards !== undefined &&
              productCards.length > 0 &&
              productCards.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </CardsContainer>
        </RightContainer>
      </ProductsContainer>
    </StyledProducts>
  );
};

export default Lodgings;
