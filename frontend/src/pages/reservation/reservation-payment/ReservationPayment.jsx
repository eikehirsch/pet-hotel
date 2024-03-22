import {
  StyledReservationPayment,
  ReservationPaymentContainer,
  ReservationPaymentSection,
  ReservationPaymentSectionHeader,
  SectionTitleAndAvatarContainer,
  Icon,
  SectionTitleContainer,
  SectionTitle,
  SectionSubtitle,
  Vacancy,
  BodyContainer,
  LeftContainer,
  LeftMainInfos,
  LeftRow,
  InputContainer,
  InputSubcontainer,
  Label,
  Input,
  ButtonRow,
  RightContainer,
  RightContainerRow,
  RowTitle,
  RowDetail,
  TotalRow,
  TotalDetail,
} from "./styles.ts";

import Navbar from "../../../components/navbar/Navbar.jsx";
import Button from "../../../components/button/Button.jsx";

import hotel from "../../../mocks/hotel.js";

const ReservationPayment = () => {
  return (
    <StyledReservationPayment>
      <Navbar />
      <ReservationPaymentContainer>
        <ReservationPaymentSection>
          <ReservationPaymentSectionHeader>
            <SectionTitleAndAvatarContainer>
              <Icon width="60px" height="60px" src={hotel.avatar} />
              <SectionTitleContainer>
                <SectionTitle>Animal Village</SectionTitle>
                <SectionSubtitle>
                  <Vacancy>
                    <img src="./images/green-dot.png" alt="" />{" "}
                    {"Vagas disponíveis"}
                  </Vacancy>
                </SectionSubtitle>
              </SectionTitleContainer>
            </SectionTitleAndAvatarContainer>
          </ReservationPaymentSectionHeader>

          <BodyContainer>
            <LeftContainer>
              <LeftMainInfos>
                <LeftRow marginBottom="20px">
                  <InputContainer width="42%">
                    <InputSubcontainer>
                      <Icon
                        width="24px"
                        src="./images/credit-card.svg"
                        alt=""
                      />
                      <Input
                        border="none"
                        type="text"
                        placeholder="Cartão de Crédito / Débito"
                      />
                    </InputSubcontainer>
                  </InputContainer>
                  <InputContainer width="10%">
                    <InputSubcontainer>
                      <Icon width="24px" src="./images/logo-pix.svg" alt="" />
                      <Input
                        border="none"
                        paddingLeft="6px"
                        type="text"
                        placeholder="PIX"
                      />
                    </InputSubcontainer>
                  </InputContainer>
                  <InputContainer width="38%">
                    <Input type="text" placeholder="Transferência Bancária" />
                  </InputContainer>
                </LeftRow>
                <LeftRow>
                  <InputContainer width="100%">
                    <Label>Nome no cartão</Label>
                    <Input type="text" placeholder="Seu nome" />
                  </InputContainer>
                </LeftRow>
                <LeftRow>
                  <InputContainer width="80%">
                    <Label>Número</Label>
                    <InputSubcontainer paddingLeft="0px">
                      <Input
                        border="none"
                        type="text"
                        placeholder="1234 1234 1234 1234"
                      />
                      <Icon width="110px" src="./images/banks.svg" alt="" />
                    </InputSubcontainer>
                  </InputContainer>
                  <InputContainer width="20%">
                    <Label>CVC</Label>
                    <Input type="text" placeholder="123" />
                  </InputContainer>
                </LeftRow>
                <LeftRow>
                  <InputContainer width="33%">
                    <Label>Validade</Label>
                    <Input type="text" placeholder="01/2000" />
                  </InputContainer>
                  <InputContainer width="33%">
                    <Label>CPF</Label>
                    <Input type="text" placeholder="012.154.015-02" />
                  </InputContainer>
                  <InputContainer width="33%">
                    <Label>CEP</Label>
                    <Input type="text" placeholder="00000-000" />
                  </InputContainer>
                </LeftRow>
              </LeftMainInfos>

              <ButtonRow>
                <Button
                  color="#ffffff"
                  backgroundColor="#0a846b"
                  border="2px solid #0a846b"
                  borderRadius="6px"
                  fontWeight="500"
                  width="10%"
                >
                  Próximo
                </Button>
              </ButtonRow>
            </LeftContainer>

            <RightContainer>
              <RightContainerRow>
                <RowTitle>Hospedagem 2 dias</RowTitle>
                <RowDetail>R$241,94</RowDetail>
              </RightContainerRow>
              <RightContainerRow>
                <RowTitle>Serviço adicional</RowTitle>
                <RowDetail>R$52,00</RowDetail>
              </RightContainerRow>
              <TotalRow>
                <RowTitle>Subtotal:</RowTitle>
                <TotalDetail>R$293,94</TotalDetail>
              </TotalRow>
            </RightContainer>
          </BodyContainer>
        </ReservationPaymentSection>
      </ReservationPaymentContainer>
    </StyledReservationPayment>
  );
};

export default ReservationPayment;
