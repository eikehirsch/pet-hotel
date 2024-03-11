import { useState } from "react";

import {
  StyleHotelDashboardProducts,
  Container,
  CardsContainer,
  ButtonRow,
  SearchBox,
  SearchInput,
} from "./styles.ts";

import ProductsFirstStep from "./productsFirstStep/ProductsFirstStep.jsx";
import ProductsSecondStep from "./productsSecondStep/ProductsSecondStep.jsx";
import ProductsThirdStep from "./productsThirdStep/ProductsThirdStep.jsx";
import ProductsFourthStep from "./productsFourthStep/ProductsFourthStep.jsx";

import productCards from "../../../mocks/productCards.js";

import ProductCard from "../../../components/productCard/ProductCard.jsx";
import Button from "../../../components/button/Button.jsx";

const HotelDashboardProducts = () => {
  const [pageStep, setPageStep] = useState(0);

  const updateStep = (stepNumber) => {
    setPageStep(stepNumber);
  };
  return (
    <StyleHotelDashboardProducts>
      {pageStep === 0 && (
        <Container>
          <ButtonRow>
            <Button
              color="#0a846b"
              backgroundColor="white"
              borderRadius="8px"
              fontWeight="500"
              border="1px solid #0a846b"
            >
              <img style={{ width: "20px" }} src="/images/filter.png" alt="" />
              Filtrar
            </Button>
            <SearchBox>
              <img
                style={{ width: "20px" }}
                src="/images/search-icon.svg"
                alt=""
              />
              <SearchInput placeholder="Buscar produto cadastrado" />
            </SearchBox>
            <Button
              onClick={() => updateStep(1)}
              color="white"
              backgroundColor="#0a846b"
              borderRadius="8px"
              fontWeight="500"
              border="1px solid #0a846b"
            >
              + Cadastrar produto
            </Button>
          </ButtonRow>
          <CardsContainer>
            {productCards !== undefined &&
              productCards.length > 0 &&
              productCards.map((product) => (
                <ProductCard product={product} key={product.id} />
              ))}
          </CardsContainer>
        </Container>
      )}
      {pageStep === 1 && <ProductsFirstStep updateStep={updateStep} />}
      {pageStep === 2 && <ProductsSecondStep updateStep={updateStep} />}
      {pageStep === 3 && <ProductsThirdStep updateStep={updateStep} />}
      {pageStep === 4 && <ProductsFourthStep updateStep={updateStep} />}
    </StyleHotelDashboardProducts>
  );
};

export default HotelDashboardProducts;
