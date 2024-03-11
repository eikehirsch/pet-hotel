import {
  StyleProductsSecondStep,
  StepImage,
  Container,
  Section,
  LeftSubsection,
  LeftSubsectionTitle,
  LeftSubsectionDescription,
  DescriptionInput,
  ButtonBox,
} from "./styles.ts";

import Button from "../../../../components/button/Button.jsx";

const ProductsSecondStep = ({ updateStep }) => {
  return (
    <StyleProductsSecondStep>
      <StepImage src="../images/dashboard-product-step2.png" />
      <Container>
        <Section>
          <LeftSubsection>
            <LeftSubsectionTitle>Descrição</LeftSubsectionTitle>
            <LeftSubsectionDescription>
              Capte a atenção dos clientese e transmita o valor do seu produto
              de maneira impactante
            </LeftSubsectionDescription>
          </LeftSubsection>
          <DescriptionInput rows={6} />
        </Section>
      </Container>

      <ButtonBox>
        <Button
          onClick={() => updateStep(1)}
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
          color="#ffffff"
          backgroundColor="#0a846b"
          borderRadius="8px"
          fontWeight="500"
        >
          Próximo
          <img src="../images/arrow-right.svg" alt="" />
        </Button>
      </ButtonBox>
    </StyleProductsSecondStep>
  );
};

export default ProductsSecondStep;
