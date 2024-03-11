import {
  StyledConfirmedOrder,
  ConfirmedOrderSection,
  Title,
  Subtitle,
} from "./styles.ts";

import Navbar from "../../../components/navbar/Navbar.jsx";
import Button from "../../../components/button/Button.jsx";

const ConfirmedOrder = () => {
  return (
    <StyledConfirmedOrder>
      <Navbar />
      <ConfirmedOrderSection>
        <Title>Agradecemos pela sua compra</Title>
        <Subtitle>Pedido #123RGR231567Y Confirmado</Subtitle>
        <Button
          color="#ffffff"
          backgroundColor="#0a846b"
          borderRadius="4px"
          fontWeight="500"
          width="160px"
        >
          Rastrear pedido
        </Button>
      </ConfirmedOrderSection>
    </StyledConfirmedOrder>
  );
};

export default ConfirmedOrder;
