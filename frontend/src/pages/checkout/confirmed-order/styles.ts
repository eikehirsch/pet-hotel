import styled from "styled-components";

export const StyledConfirmedOrder = styled.div`
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

export const ConfirmedOrderSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  padding-top: 6rem;
  display: flex;
  gap: 2rem;
`;

export const Title = styled.span`
  text-align: center;
  margin-bottom: 7rem;
`;

export const Subtitle = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 24px;
  font-weight: 500;
`;