import styled from "styled-components";

export const StyledLogin = styled.div`
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(
    175.31deg,
    #c7ded9 3.79%,
    rgba(199, 222, 217, 0) 87.34%
  );
`;

export const LogoMobile = styled.img`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 80px;
  }
`;

export const LoginImage = styled.img`
  width: 50%;
  object-fit: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const RightSection = styled.div`
  width: 50%;
  padding-top: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    padding-top: 2rem;
  }
`;

export const RightContainer = styled.div`
  width: 60%;
  padding: 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  text-align: center;

  @media (min-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 478px) {
    padding: 20px;
  }
`;

export const Title = styled.h1`
  color: black;
  font-weight: 600;
  font-size: 30px;
  width: 100%;

  @media (max-width: 1290px) {
    width: 100%;
  }

  @media (max-width: 768px) {
    font-size: 22px;
  }
`;

// export const OptionContainer = styled.div`
//   display: flex;
//   gap: 14px;
// `;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 30px;
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 12px;
  color: #757575;
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  border-bottom: 1px solid #c1bebe;
`;

export const SubmitContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SubmitCheckContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    justify-content: flex-start;
    margin-bottom: 1rem;
  }
`;

export const ButtonBox = styled.div`
  @media (max-width: 768px) {
    width: 130px;
    margin: 0 auto;
  }
`;

export const InputCheck = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

export const InputCheckSpan = styled.span`
  font-size: 10px;
  color: #aeacac;
`;

export const AccessLoginContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 12px;
  gap: 6px;
`;

export const RegisterLink = styled.span`
  text-transform: capitalize;
  text-decoration: underline;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;
`;