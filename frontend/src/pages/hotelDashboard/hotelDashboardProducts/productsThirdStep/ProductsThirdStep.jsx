import {
  StyleProductsThirdStep,
  StepImage,
  Container,
  Section,
  LeftSubsection,
  LeftSubsectionTitle,
  LeftSubsectionDescription,
  Input,
  ButtonBox,
} from "./styles.ts";

import Button from "../../../../components/button/Button.jsx";

const ProductsThirdStep = ({ updateStep }) => {
  return (
    <StyleProductsThirdStep>
      <StepImage src="../images/dashboard-product-step3.png" />
      <Container>
        <Section>
          <LeftSubsection>
            <LeftSubsectionTitle>Preço</LeftSubsectionTitle>
            <LeftSubsectionDescription>
              Digite aqui por qual preço você gostaria de vender o seu produto
            </LeftSubsectionDescription>
          </LeftSubsection>
          <Input width="20%" />
        </Section>

        <Section>
          <LeftSubsection>
            <LeftSubsectionTitle>Oferta</LeftSubsectionTitle>
            <LeftSubsectionDescription>
              Digite a porcentagem da oferta
            </LeftSubsectionDescription>
          </LeftSubsection>
          <Input width="20%" />%
        </Section>
      </Container>

      <ButtonBox>
        <Button
          onClick={() => updateStep(2)}
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
          onClick={() => updateStep(4)}
          color="#ffffff"
          backgroundColor="#0a846b"
          borderRadius="8px"
          fontWeight="500"
        >
          Próximo
          <img src="../images/arrow-right.svg" alt="" />
        </Button>
      </ButtonBox>
    </StyleProductsThirdStep>
  );
};

export default ProductsThirdStep;
