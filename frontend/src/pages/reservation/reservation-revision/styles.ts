import styled from "styled-components";

export const StyledReservationRevision = styled.div`
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

export const ReservationRevisionContainer = styled.div`
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

export const ReservationRevisionSection = styled.div`
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

export const ReservationRevisionSectionHeader = styled.div`
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

  @media (max-width: 1400px) {
    gap: 50px;
  }

  @media (max-width: 1100px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 0px;
    padding: 20px 16px;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 62%;

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const LeftTitleRow = styled.div`
  margin-bottom: 10px;
`;

export const LeftTitle = styled.h1`
  margin: 0;
  font-size: 26px;
  font-weight: 600;
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};

  @media (max-width: 600px) {
    font-size: 22px;
  }
`;

export const Subsection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 32px 0;
  border-bottom: ${(props) =>
    props.borderBottom ? props.borderBottom : "1px solid #dedddd"};

  @media (max-width: 1000px) {
    padding: 14px 0;
  }
`;

export const SubsectionTitle = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #0a970a;
  margin-bottom: 20px;
`;

export const SubsectionRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 40px;
  font-size: 14px;
  margin-bottom: 10px;

  @media (max-width: 1000px) {
    gap: 20px;
  }
`;

export const SubsectionRowTitle = styled.h5`
  margin: 0;
  font-weight: bold;
  font-size: 16px;
  min-width: 140px;

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const SubsectionRowDetail = styled.span`
  @media (max-width: 600px) {
    font-size: 12px;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 14px;
  padding: 10px;
  border: 1px solid #e9e8e8;
  border-radius: 4px;
  background-color: white;
  width: 30%;
  height: min-content;
  box-shadow: 0px 0px 20px 0px #0000000d;

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
  width: 95%;
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
  width: 95%;
  font-weight: 700;
  font-size: 16px;
  margin: 20px 0;
  padding-top: 20px;
  border-top: 1px solid lightgray;
`;

export const TotalDetail = styled.span`
  font-weight: 700;
  font-size: 26px;

  @media (max-width: 600px) {
    font-size: 20px;
  }
`;
