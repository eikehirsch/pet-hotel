import {
  StyledCart,
  CartSection,
  CartTitle,
  CartContainer,
  LeftContainer,
  CoupumRow,
  CoupumTitle,
  CoupumInputContainer,
  CoupumInput,
  CoupumButton,
  RightContainer,
  RightTitle,
  RightContainerRow,
  RowTitle,
  RowDetail,
  TotalRow,
  TotalDetail,
} from "./styles.ts";

import Navbar from "../../components/navbar/Navbar.jsx";
import CartTable from "../../components/cartTable/CartTable.jsx";
import Button from "../../components/button/Button.jsx";
import Footer from "../../components/footer/Footer.jsx";

const Cart = () => {
  return (
    <StyledCart>
      <Navbar />
      <CartSection>
        <CartTitle>Carrinho</CartTitle>
        <CartContainer>
          <LeftContainer>
            <CartTable />
            <CoupumRow>
              <CoupumTitle>Cupom de desconto</CoupumTitle>
              <CoupumInputContainer>
                <CoupumInput type="text" placeholder="Insira o código" />
                <CoupumButton>Aplicar cupom</CoupumButton>
              </CoupumInputContainer>
            </CoupumRow>
          </LeftContainer>
          <RightContainer>
            <RightTitle>Total</RightTitle>
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
              borderRadius="8px"
              fontWeight="500"
              width="60%"
            >
              Checkout
            </Button>
          </RightContainer>
        </CartContainer>
      </CartSection>
      <Footer />
    </StyledCart>
  );
};

export default Cart;
