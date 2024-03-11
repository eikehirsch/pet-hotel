import {
  StylePetOwner,
  PetOwnerContainer,
  MainSection,
  MainSectionHeader,
  SectionTitleAndAvatarContainer,
  Icon,
  SectionTitleContainer,
  SectionTitle,
  SectionSubtitle,
  BodyContainer,
  LeftContainer,
  LeftTitleRow,
  LeftTitle,
  LeftRow,
  InputContainer,
  Vacancy,
  Label,
  Input,
  ButtonRow,
  RightContainer,
} from "./styles.ts";

import DateRangePicker from "../../../components/DatePicker/DatePicker.jsx";

import Navbar from "../../../components/navbar/Navbar.jsx";
import Button from "../../../components/button/Button.jsx";

import hotel from "../../../mocks/hotel.js";

const PetOwner = () => {
  return (
    <StylePetOwner>
      <Navbar />
      <PetOwnerContainer>
        <MainSection>
          <MainSectionHeader>
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
            <img src="./images/dog-owner-step.svg" alt="" />
          </MainSectionHeader>

          <BodyContainer>
            <LeftContainer>
              <LeftTitleRow>
                <LeftTitle>Tutor</LeftTitle>
              </LeftTitleRow>

              <LeftRow>
                <InputContainer width="30%">
                  <Label>Nome</Label>
                  <Input type="text" placeholder="Seu nome" />
                </InputContainer>
                <InputContainer width="60%">
                  <Label>Sobrenome</Label>
                  <Input type="text" placeholder="Seu sobrenome" />
                </InputContainer>
              </LeftRow>
              <LeftRow>
                <InputContainer width="30%">
                  <Label>CPF</Label>
                  <Input type="text" placeholder="000.000.000-00" />
                </InputContainer>
                <InputContainer width="60%">
                  <Label>E-mail</Label>
                  <Input type="text" placeholder="E-mail" />
                </InputContainer>
              </LeftRow>
              <LeftRow>
                <InputContainer width="70%">
                  <Label>Endereço</Label>
                  <Input type="text" placeholder="Endereço" />
                </InputContainer>
                <InputContainer width="20%">
                  <Label>Número</Label>
                  <Input type="text" placeholder="Número" />
                </InputContainer>
              </LeftRow>
              <LeftRow>
                <InputContainer width="45%">
                  <Label>CEP</Label>
                  <Input type="text" placeholder="00000-00" />
                </InputContainer>
                <InputContainer width="45%">
                  <Label>Estado</Label>
                  <Input type="text" placeholder="Estado" />
                </InputContainer>
              </LeftRow>
              <LeftRow>
                <InputContainer width="60%">
                  <Label>Complemento</Label>
                  <Input type="text" placeholder="Complemento" />
                </InputContainer>
                <InputContainer width="30%">
                  <Label>Telefone</Label>
                  <Input type="text" placeholder="Telefone" />
                </InputContainer>
              </LeftRow>
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
              <DateRangePicker />
            </RightContainer>
          </BodyContainer>
        </MainSection>
      </PetOwnerContainer>
    </StylePetOwner>
  );
};

export default PetOwner;
