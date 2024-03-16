import { Link } from "react-router-dom";

import {
  StyledRegister,
  LogoMobile,
  RegisterImage,
  RightSection,
  RightContainer,
  Title,
  Subtitle,
  OptionContainer,
  Form,
  InputContainer,
  Label,
  Input,
  SubmitContainer,
  SubmitCheckContainer,
  ButtonBox,
  InputCheck,
  InputCheckSpan,
  AccessLoginContainer,
  LoginLink,
} from "./styles.ts";

import Button from "../../components/button/Button.jsx";

const Register = () => {
  return (
    <StyledRegister>
      <RegisterImage src="images/register-image.png" />
      <RightSection>
        <RightContainer>
          <LogoMobile src="./images/logo-mobile.svg" />
          <Title>Seja bem-vindo ao Pet Hotel!</Title>
          <Subtitle>Seleciona uma opção para se cadastrar</Subtitle>
          <OptionContainer>
            <Button
              padding="12px 34px"
              color="#79c4b5"
              fontSize="18px"
              fontWeight="600"
              borderRadius="8px"
              border="2px solid #79c4b5"
              backgroundColor="#ebf4f3"
            >
              Sou Hóspede
            </Button>
            <Button
              padding="12px 34px"
              color="#79c4b5"
              fontSize="18px"
              fontWeight="600"
              borderRadius="8px"
              border="2px solid #79c4b5"
              backgroundColor="#ebf4f3"
            >
              Sou PetHotel
            </Button>
          </OptionContainer>
          <Form>
            <InputContainer>
              <Label>Nome</Label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <Label>E-mail</Label>
              <Input type="email" />
            </InputContainer>
            <InputContainer>
              <Label>Senha</Label>
              <Input type="password" placeholder="*************" />
            </InputContainer>
            <InputContainer>
              <Label>Confirmar senha</Label>
              <Input type="password" placeholder="*************" />
            </InputContainer>
            <SubmitContainer>
              <SubmitCheckContainer>
                <InputCheck type="checkbox" />
                <InputCheckSpan>Eu aceito os termos e condições</InputCheckSpan>
              </SubmitCheckContainer>

              <ButtonBox>
                <Button
                  padding="12px 40px"
                  borderRadius="8px"
                  backgroundColor="#0A846B"
                  border="#0A846B"
                  color="#FFFFFF"
                  fontSize="18px"
                  fontWeight="600"
                >
                  Cadastrar
                </Button>
              </ButtonBox>
            </SubmitContainer>
          </Form>

          <AccessLoginContainer>
            {"Já tem uma conta?"}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "black" }}
            >
              <LoginLink>ACESSE</LoginLink>
            </Link>
          </AccessLoginContainer>
        </RightContainer>
      </RightSection>
    </StyledRegister>
  );
};

export default Register;
