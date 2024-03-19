import {
  StyledCheckoutDeliver,
  ImageContainer,
  Image,
  CheckoutDeliverSection,
  LeftContainer,
  LeftRow,
  InputContainer,
  Label,
  Input,
  AnotherAddress,
  DeliverRow,
  DeliverTitle,
  DeliverInputContainer,
  DeliverInput,
  DeliverButton,
  ForgotCEP,
  AditionalInfoContainer,
  AditionalInfoTitle,
  AditionalInfoSubTitle,
  AditionalInfoInput,
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

const CheckoutDeliver = () => {
  return (
    <StyledCheckoutDeliver>
      <Navbar />
      <ImageContainer>
        <Image src="./images/delivery-checkout-step.svg" />
      </ImageContainer>
      <CheckoutDeliverSection>
        <LeftContainer>
          <LeftRow>
            <InputContainer width="30%">
              <Label>Nome</Label>
              <Input type="text" placeholder="Seu nome" />
            </InputContainer>
            <InputContainer flex="1">
              <Label>Sobrenome</Label>
              <Input type="text" placeholder="Seu sobrenome" />
            </InputContainer>
          </LeftRow>
          <LeftRow>
            <InputContainer width="60%">
              <Label>Endereço</Label>
              <Input type="text" placeholder="Endereço" />
            </InputContainer>
            <InputContainer flex="1">
              <Label>Número</Label>
              <Input type="text" placeholder="Número" />
            </InputContainer>
          </LeftRow>
          <LeftRow>
            <InputContainer width="40%">
              <Label>CEP</Label>
              <Input type="text" placeholder="00000-00" />
            </InputContainer>
            <InputContainer flex="1">
              <Label>Estado</Label>
              <Input type="text" placeholder="Estado" />
            </InputContainer>
          </LeftRow>
          <LeftRow>
            <InputContainer width="50%">
              <Label>Endereço</Label>
              <Input type="text" placeholder="Endereço" />
            </InputContainer>
            <InputContainer flex="1">
              <Label>Número</Label>
              <Input type="text" placeholder="Número" />
            </InputContainer>
          </LeftRow>
          <LeftRow>
            <InputContainer
              flexDirection="row"
              width="100%"
              alignItems="center"
            >
              <Input type="checkbox" width="10px" />
              <AnotherAddress>Enviar para um endereço diferente</AnotherAddress>
            </InputContainer>
          </LeftRow>
          <DeliverRow>
            <DeliverTitle>Calcular frete</DeliverTitle>
            <DeliverInputContainer>
              <DeliverInput type="text" placeholder="Insira o CEP" />
              <DeliverButton>Calcular</DeliverButton>
            </DeliverInputContainer>
          </DeliverRow>
          <ForgotCEP>Não sei meu CEP</ForgotCEP>

          <AditionalInfoContainer>
            <AditionalInfoTitle>Informações adicionais</AditionalInfoTitle>
            <AditionalInfoSubTitle>
              Observações para o pedido (opcional)
            </AditionalInfoSubTitle>
            <AditionalInfoInput
              rows="4"
              placeholder="Notas e observações sobre o seu pedido"
            />
          </AditionalInfoContainer>
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
            width="50%"
          >
            Ir ao pagamento
          </Button>
        </RightContainer>
      </CheckoutDeliverSection>
    </StyledCheckoutDeliver>
  );
};

export default CheckoutDeliver;
