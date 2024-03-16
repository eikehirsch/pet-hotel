import { Link } from "react-router-dom";

import {
  StyledLogin,
  LoginImage,
  RightSection,
  RightContainer,
  LogoMobile,
  Title,
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
  RegisterLink,
} from "./styles.ts";

import Button from "../../components/button/Button.jsx";

const Login = () => {
  return (
    <StyledLogin>
      <LoginImage src="images/login-image.png" />
      <RightSection>
        <RightContainer>
          <LogoMobile src="./images/logo-mobile.svg" />
          <Title>Seja bem-vindo de volta ao Pet Hotel!</Title>
          {/* <OptionContainer>
            <Button
              padding="12px 14px"
              fontSize="12px"
              borderRadius="6px"
              backgroundColor="white"
            >
              <img src="images/google-icon.svg" alt="" />
              Entrar com Google
            </Button>
            <Button
              padding="12px 14px"
              fontSize="12px"
              backgroundColor="white"
              borderRadius="6px"
            >
              <img src="images/facebook-icon.svg" alt="" />
              Entrar com Facebook
            </Button>
          </OptionContainer> */}
          <Form>
            <InputContainer>
              <Label>E-mail ou CNPJ</Label>
              <Input type="text" />
            </InputContainer>
            <InputContainer>
              <Label>Senha</Label>
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
                  Login
                </Button>
              </ButtonBox>
            </SubmitContainer>
          </Form>

          <AccessLoginContainer>
            {"Não tem uma conta ainda?"}
            <Link
              to="/cadastro"
              style={{ textDecoration: "none", color: "black" }}
            >
              <RegisterLink>Cadastre-se</RegisterLink>
            </Link>
          </AccessLoginContainer>
        </RightContainer>
      </RightSection>
    </StyledLogin>
  );
};

export default Login;
