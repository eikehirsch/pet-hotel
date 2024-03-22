import styled from "styled-components";

export const StylePetOwner = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background: linear-gradient(
    175.31deg,
    #c7ded9 3.79%,
    rgba(199, 222, 217, 0) 87.34%
  );
  margin: auto;
`;

export const PetOwnerContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 3rem;

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

export const MainSection = styled.div`
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

export const MainSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  border-bottom: 2px solid #e1e1e1;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0px;
  }

  @media (max-width: 600px) {
    padding: 0px;
  }
`;

export const SectionTitleAndAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 32px 0px;

  @media (max-width: 1000px) {
    padding: 10px 0px;
  }
`;

export const SectionTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  margin: 0;

  @media (max-width: 1000px) {
    font-size: 18px;
  }
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
    padding: 10px 0px;
  }
`;

export const Image = styled.img`
  @media (max-width: 760px) {
    width: 80%;
  }
`;

export const BodyContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 32px 40px;
  gap: 50px;

  @media (max-width: 1000px) {
    flex-direction: column;
    gap: 30px;
    margin-top: 0px;
    padding: 20px 30px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

export const LeftTitleRow = styled.div`
  margin-bottom: 10px;

  @media (max-width: 600px) {
    margin-bottom: 0px;
  }
`;

export const LeftTitle = styled.h1`
  margin: 0;
  font-size: 28px;
  font-weight: 600;

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export const LeftRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 40px;

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
  justify-content: flex-end;
  margin-right: 50px;
`;

export const RightContainer = styled.div`
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

  @media (max-width: 1000px) {
    width: fit-content;
    margin: 0 auto;
  }
`;
