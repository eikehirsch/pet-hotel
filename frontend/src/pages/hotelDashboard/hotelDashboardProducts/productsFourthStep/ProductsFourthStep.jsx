import {
  StyleProductsFourthStep,
  StepImage,
  Container,
  ButtonBox,
  RightSection,
  ProductTitle,
  ProductPrice,
  ColorBox,
  ColorCircle,
  SizeBox,
  SizeRow,
  Size,
} from "./styles.ts";

import Button from "../../../../components/button/Button.jsx";

const ProductsFourthStep = ({ updateStep }) => {
  return (
    <StyleProductsFourthStep>
      <StepImage src="../images/dashboard-product-step4.png" />
      <Container>
        <RightSection>
          <ProductTitle>Lorem ipsum</ProductTitle>
          <ProductPrice>R$ 159,99</ProductPrice>
          <ColorBox>
            Cor:
            <ColorCircle backgroundColor="red" />
            <ColorCircle backgroundColor="yellow" />
          </ColorBox>
          <SizeBox>
            Tamanhos disponíveis:
            <SizeRow>
              <Size>P</Size>
              <Size>M</Size>
              <Size>G</Size>
              <Size>GG</Size>
            </SizeRow>
          </SizeBox>
        </RightSection>
      </Container>
      <ButtonBox>
        <Button
          onClick={() => updateStep(3)}
          color="#0a846b"
          backgroundColor="white"
          borderRadius="8px"
          fontWeight="500"
          border="1px solid #0a846b"
        >
          <img src="../images/arrow-left.svg" alt="" />
          Anterior
        </Button>

        <Button
          onClick={() => updateStep(3)}
          color="white"
          backgroundColor="#0a846b"
          borderRadius="8px"
          fontWeight="500"
          border="1px solid #0a846b"
        >
          Confirmar
        </Button>
      </ButtonBox>
    </StyleProductsFourthStep>
  );
};

export default ProductsFourthStep;
