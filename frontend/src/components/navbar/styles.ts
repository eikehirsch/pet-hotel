import styled from "styled-components";

export const StyledNavbar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 30px 6px 30px;
  width: 80%;
  margin: 0 auto;
  font-size: 14px;
  border-bottom: ${(props) =>
    props.borderBottom ? props.borderBottom : "1px solid #ffffff"};
  z-index: 10;
  position: relative;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const LeftList = styled.div`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 46px;
  color: #0a846b;
  font-weight: 600;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Icon = styled.img`
  cursor: pointer;
`;

export const LeftListItem = styled.li`
  cursor: pointer;

  a {
    text-decoration: none;
    color: #0a846b;
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const CartIcon = styled.img`
  cursor: pointer;
  margin-right: 16px;
`;