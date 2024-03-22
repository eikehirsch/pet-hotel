import styled from "styled-components";

export const StyledPetRegister = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(
    175.31deg,
    #c7ded9 3.79%,
    rgba(199, 222, 217, 0) 87.34%
  );
  margin: auto;
  padding-bottom: 10rem;
`;

export const PetRegisterContainer = styled.div`
  width: 80%;
  margin: auto;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Icon = styled.img`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

export const Vacancy = styled.span`
  font-size: 15px;
  color: #0a846b;
  font-weight: 500;
`;

export const PetRegisterSection = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  margin-top: 4rem;
  padding-bottom: 26px;
  box-shadow: 0px 0px 50px 0px #0000000d;

  @media (max-width: 1000px) {
    margin-top: 2rem;
  }

  @media (max-width: 600px) {
    margin-top: 1rem;
  }
`;

export const PetRegisterSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  border-bottom: 2px solid #e1e1e1;

  @media (max-width: 600px) {
    padding: 0px;
  }
`;

export const SectionTitleAndAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 32px 0px;
`;

export const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;
`;

export const SectionSubtitle = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 14px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    width: 100%;
    padding: 20px;
  }

  @media (max-width: 760px) {
    margin-top: 1rem;
  }
`;

export const Image = styled.img`
  @media (max-width: 760px) {
    width: 100%;
  }
`;

export const PetRegisterBodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 32px 40px;
  gap: 100px;

  @media (max-width: 1400px) {
    gap: 50px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 0px;
    padding: 20px 30px;
  }
`;

export const PetRegisterLeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

export const PetMainInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const AditionalServices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 20px;
`;

export const AdicionalServicesRow = styled.div`
  display: flex;
  gap: 14px;
`;

export const AditionalService = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 14px 8px;
  border: 1px solid #e6e3e3;
  border-radius: 8px;
  gap: 8px;
  font-size: 14px;
  color: #b3b3b3;
  width: 80px;
  cursor: pointer;

  @media (max-width: 1000px) {
    padding: 8px 4px;
    width: 70px;

    & > :first-child {
      width: 20px;
    }

    & > :nth-child(2) {
      font-size: 12px;
    }
  }
`;

export const Remarks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const RemarkInput = styled.textarea`
  border-radius: 4px;
  outline: none;
  padding: 14px;
  border-color: #e0e0e0;
  font-weight: 400;
  font-size: 16px;
  resize: none;
  width: 100%;

  &::placeholder {
    color: #a5a5a5;
    font-size: 14px;
    font-family: "Poppins";
  }
`;

export const LeftTitleRow = styled.div`
  @media (max-width: 600px) {
    margin-bottom: 0px;
  }
`;

export const LeftTitle = styled.h1`
  font-size: 21px;
  margin: 0;
  font-weight: 600;

  @media (max-width: 1000px) {
    font-size: 18px;
  }
`;

export const LeftSubtitle = styled.span`
  margin: 0;
  font-size: 14px;

  @media (max-width: 1000px) {
  }
`;

export const LeftRow = styled.div`
  display: flex;
  gap: 10px;

  @media (max-width: 600px) {
    gap: 10px;
  }
`;

export const InputContainer = styled.div`
  width: ${(props) => (props.width ? props.width : "auto")};
  flex-direction: ${(props) =>
    props.flexDirection ? props.flexDirection : "column"};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : "flex-start"};
  display: flex;
  flex: ${(props) => props.flex};
  gap: 4px;
`;

export const Label = styled.label`
  font-size: 12px;
  color: #757575;
  font-weight: 500;
  color: #1a1a1a;
`;

export const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "100%")};
  border: 1px solid #d8d7d7;
  outline: none;
  background-color: #ffffff;
  padding: 12px;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  &::placeholder {
    color: #bebdbd;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 40px;

  @media (max-width: 1000px) {
    & > :first-child {
      width: 130px;
      padding: 6px 10px;
    }
  }
`;

export const PetRegisterRightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  padding-bottom: 10px;
  border: 1px solid #e9e8e8;
  border-radius: 4px;
  background-color: white;
  height: min-content;
  box-shadow: 0px 0px 20px 0px #0000000d;
  margin-top: 70px;

  @media (max-width: 1100px) {
    width: fit-content;
    margin: 0 auto;
  }
`;
