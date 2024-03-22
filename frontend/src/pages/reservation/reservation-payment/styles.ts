import styled from "styled-components";

export const StyledReservationPayment = styled.div`
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

export const ReservationPaymentContainer = styled.div`
  width: 80%;
  margin: auto;
  margin-bottom: 2rem;

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

export const ReservationPaymentSection = styled.div`
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

export const ReservationPaymentSectionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  border-bottom: 2px solid #e1e1e1;

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 0px;
  }

  @media (max-width: 1000px) {
    padding: 10px 0px;
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
  gap: 60px;

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

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
`;

export const LeftMainInfos = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
`;

export const LeftRow = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: ${(props) => props.marginBottom};
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

export const InputSubcontainer = styled.div`
  display: flex;
  background-color: white;
  padding-left: ${(props) => (props.paddingLeft ? props.paddingLeft : "14px")};
  padding-right: ${(props) =>
    props.paddingRight ? props.paddingRight : "14px"};
  border-radius: 4px;
  width: 100%;
  border: 1px solid #d8d7d7;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const Label = styled.label`
  font-size: 12px;
  font-weight: 500;
  color: #1a1a1a;
`;

export const Input = styled.input`
  width: ${(props) => (props.width ? props.width : "100%")};
  outline: none;
  background-color: #ffffff;
  padding: 12px 0px 12px 6px;
  border-radius: 4px;
  border: ${(props) => (props.border ? props.border : "1px solid lightgrey")};
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
  margin: 0px 40px;
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
  border: 1px solid #d4d4d4;
  border-radius: 10px;
  background-color: white;
  height: fit-content;
  width: 24%;

  @media (max-width: 1100px) {
    width: fit-content;
    margin: 0 auto;
    width: 44%;
    padding: 10px;
  }

  @media (max-width: 850px) {
    width: 70%;
  }
`;

export const RightContainerRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 14px;
  padding: 10px;
`;

export const RowTitle = styled.span`
  font-weight: 400;
`;

export const RowDetail = styled.span`
  font-weight: 500;
`;

export const TotalRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-weight: 700;
  font-size: 16px;
  margin: 20px 0;
  padding-top: 20px;
  border-top: 1px solid lightgray;

  @media (max-width: 1100px) {
    margin: 0 auto;
  }
`;

export const TotalDetail = styled.span`
  font-weight: 700;
  font-size: 26px;

  @media (max-width: 1100px) {
    font-size: 22px;
  }
`;
