import {
  StyledCheckoutPayment,
  ImageContainer,
  Image,
  CheckoutDeliverSection,
  LeftContainer,
  LeftRow,
  InputContainer,
  InputSubcontainer,
  Icon,
  CreditIcon,
  Input,
  Label,
  RightContainer,
  RightContainerRow,
  RightTitle,
  RowTitle,
  RowDetail,
  TotalRow,
  TotalDetail,
  ProductSubcontainer,
  ProductImage,
  ProductSpan,
} from "./styles.ts";

import Navbar from "../../../components/navbar/Navbar.jsx";
import Button from "../../../components/button/Button.jsx";

import relatedProducts from "../../../mocks/relatedProductCards.js";

const CheckoutPayment = () => {
  return (
    <StyledCheckoutPayment>
      <Navbar />
      <ImageContainer>
        <Image src="./images/payment-checkout-step.svg" />
      </ImageContainer>
      <CheckoutDeliverSection>
        <LeftContainer>
          <LeftRow marginBottom="20px">
            <InputContainer width="42%">
              <InputSubcontainer>
                <Icon width="24px" src="./images/credit-card.svg" alt="" />
                <Input type="text" placeholder="Cartão de Crédito / Débito" />
              </InputSubcontainer>
            </InputContainer>
            <InputContainer flex="1">
              <InputSubcontainer>
                <Icon width="24px" src="./images/logo-pix.svg" alt="" />
                <Input paddingLeft="6px" type="text" placeholder="PIX" />
              </InputSubcontainer>
            </InputContainer>
            <InputContainer width="32%">
              <Input type="text" placeholder="Transferência Bancária" />
            </InputContainer>
          </LeftRow>
          <LeftRow>
            <InputContainer flex="1">
              <Label>Nome no cartão</Label>
              <Input type="text" placeholder="Seu nome" />
            </InputContainer>
          </LeftRow>
          <LeftRow>
            <InputContainer width="70%">
              <Label>Número</Label>
              <InputSubcontainer paddingRight="16px">
                <Input type="text" placeholder="1234 1234 1234 1234" />
                <CreditIcon width="110px" src="./images/banks.svg" alt="" />
              </InputSubcontainer>
            </InputContainer>
            <InputContainer flex="1">
              <Label>CVC</Label>
              <Input type="text" placeholder="123" />
            </InputContainer>
          </LeftRow>
          <LeftRow>
            <InputContainer width="20%">
              <Label>Validade</Label>
              <Input type="text" placeholder="01/2000" />
            </InputContainer>
            <InputContainer flex="1">
              <Label>CPF</Label>
              <Input type="text" placeholder="012.154.015-02" />
            </InputContainer>
            <InputContainer flex="1">
              <Label>CEP</Label>
              <Input type="text" placeholder="00000-000" />
            </InputContainer>
          </LeftRow>
        </LeftContainer>
        <RightContainer>
          <RightTitle>Resumo da compra</RightTitle>
          {relatedProducts.map((product) => (
            <RightContainerRow
              padding="0 10px"
              borderBottom="none"
              key={product.name}
            >
              <ProductSubcontainer>
                <ProductImage src={product.image} />
                <ProductSpan fontSize="12px">{product.title} x5</ProductSpan>
              </ProductSubcontainer>
              <ProductSpan fontWeight="600">R$ {product.price}</ProductSpan>
            </RightContainerRow>
          ))}

          <RightContainerRow>
            <RowTitle>Subtotal:</RowTitle>
            <RowDetail>R$84,00</RowDetail>
          </RightContainerRow>
          <RightContainerRow>
            <RowTitle>Frete:</RowTitle>
            <RowDetail>Grátis</RowDetail>
          </RightContainerRow>
          <TotalRow>
            <RowTitle>Total:</RowTitle>
            <TotalDetail>R$84,00</TotalDetail>
          </TotalRow>
          <Button
            color="#ffffff"
            backgroundColor="#0a846b"
            borderRadius="4px"
            fontWeight="500"
            width="60%"
          >
            Finalizar compra
          </Button>
        </RightContainer>
      </CheckoutDeliverSection>
    </StyledCheckoutPayment>
  );
};

export default CheckoutPayment;
