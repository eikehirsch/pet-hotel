import {
  StyledPetRegister,
  PetRegisterContainer,
  PetRegisterSection,
  PetRegisterSectionHeader,
  SectionTitleAndAvatarContainer,
  Icon,
  SectionTitleContainer,
  SectionTitle,
  LeftSubtitle,
  SectionSubtitle,
  ImageContainer,
  Image,
  PetRegisterBodyContainer,
  PetRegisterLeftContainer,
  PetMainInfos,
  AditionalServices,
  AdicionalServicesRow,
  AditionalService,
  Remarks,
  RemarkInput,
  LeftTitleRow,
  LeftTitle,
  LeftRow,
  InputContainer,
  Label,
  Vacancy,
  Input,
  ButtonRow,
  PetRegisterRightContainer,
} from "./styles.ts";

import DateRangePicker from "../../../components/DatePicker/DatePicker.jsx";
import Navbar from "../../../components/navbar/Navbar.jsx";
import Button from "../../../components/button/Button.jsx";
import Footer from "../../../components/footer/Footer.jsx";

import hotel from "../../../mocks/hotel.js";

const PetRegister = () => {
  return (
    <StyledPetRegister>
      <Navbar />
      <PetRegisterContainer>
        <PetRegisterSection>
          <PetRegisterSectionHeader>
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
            <ImageContainer>
              <Image src="./images/pet-register-step.svg" alt="" />
            </ImageContainer>
          </PetRegisterSectionHeader>

          <PetRegisterBodyContainer>
            <PetRegisterLeftContainer>
              <PetMainInfos>
                <LeftTitleRow>
                  <LeftTitle>Pet</LeftTitle>
                </LeftTitleRow>

                <LeftRow>
                  <InputContainer width="60%">
                    <Label>Nome</Label>
                    <Input type="text" placeholder="Nome do pet" />
                  </InputContainer>
                  <InputContainer flex="1">
                    <Label>Porte</Label>
                    <Input type="text" placeholder="Porte do pet" />
                  </InputContainer>
                </LeftRow>
                <LeftRow>
                  <InputContainer width="100px">
                    <Label>Idade</Label>
                    <Input type="text" placeholder="Idade" />
                  </InputContainer>
                  <InputContainer width="100px">
                    <Label>Gênero</Label>
                    <Input type="text" placeholder="Gênero" />
                  </InputContainer>
                </LeftRow>
              </PetMainInfos>

              <AditionalServices>
                <LeftTitleRow>
                  <LeftTitle>Serviços adicionais</LeftTitle>
                </LeftTitleRow>
                <AdicionalServicesRow>
                  <AditionalService>
                    <Icon width="30px" src="./images/pet-bath.svg" alt="" />
                    <span>Banho</span>
                  </AditionalService>
                  <AditionalService>
                    <Icon width="30px" src="./images/pet-cut.svg" alt="" />
                    <span>Tosa</span>
                  </AditionalService>
                  <AditionalService>
                    <Icon width="30px" src="./images/pet-walk.svg" alt="" />
                    <span>Passeio</span>
                  </AditionalService>
                  <AditionalService>
                    <Icon width="30px" src="./images/pet-check.svg" alt="" />
                    <span>Check-up</span>
                  </AditionalService>
                </AdicionalServicesRow>
              </AditionalServices>

              <Remarks>
                <LeftTitleRow>
                  <LeftTitle>Observações</LeftTitle>
                </LeftTitleRow>
                <LeftRow>
                  <LeftSubtitle>
                    Escreva observações que você possa achar necessário que
                    nossos profissionais saibam sobre o seu pet
                  </LeftSubtitle>
                </LeftRow>
                <LeftRow>
                  <RemarkInput rows="4" placeholder="Observações" />
                </LeftRow>
              </Remarks>
            </PetRegisterLeftContainer>

            <PetRegisterRightContainer>
              <DateRangePicker />
            </PetRegisterRightContainer>
          </PetRegisterBodyContainer>
          <ButtonRow>
            <Button
              color="#0a846b"
              backgroundColor="#ffffff"
              border="2px solid #0a846b"
              borderRadius="6px"
              fontWeight="600"
              width="10%"
            >
              Anterior
            </Button>

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
        </PetRegisterSection>
      </PetRegisterContainer>
      <Footer />
    </StyledPetRegister>
  );
};

export default PetRegister;
