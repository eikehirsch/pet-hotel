import {
  StyledPetRegister,
  PetRegisterContainer,
  PetRegisterSection,
  PetRegisterSectionHeader,
  SectionTitleAndAvatarContainer,
  Icon,
  SectionTitleContainer,
  SectionTitle,
  SectionSubtitle,
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
            <img src="./images/pet-register-step.svg" alt="" />
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
                  <InputContainer width="30%">
                    <Label>Tipo</Label>
                    <Input type="text" placeholder="Tipo do pet" />
                  </InputContainer>
                </LeftRow>
                <LeftRow>
                  <InputContainer width="40%">
                    <Label>Idade</Label>
                    <Input type="text" placeholder="Idade" />
                  </InputContainer>
                  <InputContainer width="50%">
                    <Label>Tamanho</Label>
                    <Input type="text" placeholder="Tamanho" />
                  </InputContainer>
                </LeftRow>
              </PetMainInfos>

              <AditionalServices>
                <LeftTitleRow>
                  <LeftTitle fontSize="18px">Serviços adicionais</LeftTitle>
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
                  <LeftTitle fontSize="18px">Observações</LeftTitle>
                </LeftTitleRow>
                <LeftRow>
                  <LeftTitle fontSize="14px" fontWeight="400">
                    Escreva observações que você possa achar necessário que
                    nossos profissionais saibam sobre o seu pet
                  </LeftTitle>
                </LeftRow>
                <LeftRow>
                  <RemarkInput rows="4" placeholder="Observações" />
                </LeftRow>
              </Remarks>

              <ButtonRow>
                <Button
                  color="#0a846b"
                  backgroundColor="#ffffff"
                  border="2px solid #0a846b"
                  borderRadius="6px"
                  fontWeight="600"
                  width="15%"
                >
                  + Adicionar Pet
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
            </PetRegisterLeftContainer>

            <PetRegisterRightContainer>
              <DateRangePicker />
            </PetRegisterRightContainer>
          </PetRegisterBodyContainer>
        </PetRegisterSection>
      </PetRegisterContainer>
    </StyledPetRegister>
  );
};

export default PetRegister;
