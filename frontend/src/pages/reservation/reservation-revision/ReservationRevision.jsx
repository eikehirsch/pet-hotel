import {
  StyledReservationRevision,
  ReservationRevisionContainer,
  ReservationRevisionSection,
  ReservationRevisionSectionHeader,
  SectionTitleAndAvatarContainer,
  Icon,
  SectionTitleContainer,
  SectionTitle,
  SectionSubtitle,
  Vacancy,
  BodyContainer,
  LeftContainer,
  LeftTitleRow,
  LeftTitle,
  Subsection,
  SubsectionTitle,
  SubsectionRow,
  SubsectionRowTitle,
  SubsectionRowDetail,
  RightContainer,
  RightContainerRow,
  RowTitle,
  RowDetail,
  TotalRow,
  TotalDetail,
} from "./styles.ts";

import Navbar from "../../../components/navbar/Navbar.jsx";
import Footer from "../../../components/footer/Footer.jsx";

import hotel from "../../../mocks/hotel.js";

const ReservationRevision = () => {
  return (
    <StyledReservationRevision>
      <Navbar />
      <ReservationRevisionContainer>
        <ReservationRevisionSection>
          <ReservationRevisionSectionHeader>
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
            <img src="./images/reservation-revision-step.svg" alt="" />
          </ReservationRevisionSectionHeader>

          <BodyContainer>
            <LeftContainer>
              <LeftTitleRow>
                <LeftTitle>Revisão</LeftTitle>
              </LeftTitleRow>
              <Subsection>
                <SubsectionTitle>Tutor</SubsectionTitle>
                <SubsectionRow>
                  <SubsectionRowTitle>Nome</SubsectionRowTitle>
                  <SubsectionRowDetail>
                    José Alcantara Silveira
                  </SubsectionRowDetail>
                </SubsectionRow>
                <SubsectionRow>
                  <SubsectionRowTitle>Endereço</SubsectionRowTitle>
                  <SubsectionRowDetail>
                    Bairro Qualquer - Florianópolis, Santa Catarina, Perto de um
                    negócio qualquer também
                  </SubsectionRowDetail>
                </SubsectionRow>
                <SubsectionRow>
                  <SubsectionRowTitle>E-mail</SubsectionRowTitle>
                  <SubsectionRowDetail>
                    josealcantasilveira@gmail.com
                  </SubsectionRowDetail>
                </SubsectionRow>
                <SubsectionRow>
                  <SubsectionRowTitle>Telefone</SubsectionRowTitle>
                  <SubsectionRowDetail>(45) 9 9584-9857</SubsectionRowDetail>
                </SubsectionRow>
              </Subsection>
              <Subsection>
                <SubsectionTitle>Pet</SubsectionTitle>
                <SubsectionRow>
                  <SubsectionRowTitle>Nome</SubsectionRowTitle>
                  <SubsectionRowDetail>Torrada</SubsectionRowDetail>
                </SubsectionRow>
                <SubsectionRow>
                  <SubsectionRowTitle>Tipo</SubsectionRowTitle>
                  <SubsectionRowDetail>Gato</SubsectionRowDetail>
                </SubsectionRow>
                <SubsectionRow>
                  <SubsectionRowTitle>Idade</SubsectionRowTitle>
                  <SubsectionRowDetail>4 anos</SubsectionRowDetail>
                </SubsectionRow>
                <SubsectionRow>
                  <SubsectionRowTitle>Serviço adicional</SubsectionRowTitle>
                  <SubsectionRowDetail>Passeio</SubsectionRowDetail>
                </SubsectionRow>
              </Subsection>
              <Subsection>
                <SubsectionTitle>Reserva</SubsectionTitle>
                <SubsectionRow>
                  <SubsectionRowTitle>Pet Hotel</SubsectionRowTitle>
                  <SubsectionRowDetail>Animal Village</SubsectionRowDetail>
                </SubsectionRow>
                <SubsectionRow>
                  <SubsectionRowTitle>Endereço</SubsectionRowTitle>
                  <SubsectionRowDetail>
                    Rua Sabino Anisio da Silveira, 1145 - Campeche,
                    Florianópolis - SC, 88065-033
                  </SubsectionRowDetail>
                </SubsectionRow>
                <SubsectionRow>
                  <SubsectionRowTitle>Check-in</SubsectionRowTitle>
                  <SubsectionRowDetail>
                    09 de dezembro de 2023
                  </SubsectionRowDetail>
                </SubsectionRow>
                <SubsectionRow>
                  <SubsectionRowTitle>Check-out</SubsectionRowTitle>
                  <SubsectionRowDetail>
                    11 de dezembro de 2023
                  </SubsectionRowDetail>
                </SubsectionRow>
                <SubsectionRow>
                  <SubsectionRowTitle>Observação</SubsectionRowTitle>
                  <SubsectionRowDetail>
                    Gosta de carinho na cabeça
                  </SubsectionRowDetail>
                </SubsectionRow>
              </Subsection>
              <Subsection borderBottom="none">
                <SubsectionTitle>Pagamento</SubsectionTitle>
                <SubsectionRow>
                  <SubsectionRowTitle>Método</SubsectionRowTitle>
                  <SubsectionRowDetail>
                    Cartão de crédito ...2345
                  </SubsectionRowDetail>
                </SubsectionRow>
                <SubsectionRow>
                  <SubsectionRowTitle>Parcelamento</SubsectionRowTitle>
                  <SubsectionRowDetail>1x</SubsectionRowDetail>
                </SubsectionRow>
              </Subsection>
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
        </ReservationRevisionSection>
      </ReservationRevisionContainer>
      <Footer />
    </StyledReservationRevision>
  );
};

export default ReservationRevision;
