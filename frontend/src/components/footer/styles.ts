import styled from "styled-components";

export const StyledFooter = styled.div`
  background: linear-gradient(
    180deg,
    rgba(10, 132, 107, 0) 10%,
    #0a846b 100%
  );
`;

export const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60%;
  margin: 0 auto;
  padding: 6rem 0 4rem 0;
  gap: 20px;
  color: white;

  @media (max-width: 1024px) {
    width: 80%;
  }
`;

export const Icon = styled.img`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
`;

export const FooterRow = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 20px;
  font-weight: 300;
  font-weight: ${(props) => props.fontWeight};
  padding-top: ${(props) => props.paddingPop};
`;