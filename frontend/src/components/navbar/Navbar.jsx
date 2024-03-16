import {
  StyledNavbar,
  LeftContainer,
  LeftList,
  Icon,
  LeftListItem,
  RightContainer,
  CartIcon,
} from "./styles.ts";

import { Link } from "react-router-dom";

import Button from "../button/Button.jsx";

const Navbar = ({ borderBottom }) => {
  return (
    <StyledNavbar borderBottom={borderBottom}>
      <LeftContainer>
        <LeftList>
          <Link to="/">
            <Icon src="images/logo-navbar.svg" alt="" />
          </Link>
          <LeftListItem>
            <Link to="/hospedagens">Hospedagens</Link>
          </LeftListItem>
          <LeftListItem>
            <Link to="/produtos">Produtos</Link>
          </LeftListItem>
        </LeftList>
      </LeftContainer>
      <RightContainer>
        <Link to="/carrinho">
          <CartIcon src="images/cart.svg" alt="" />
        </Link>
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Button
            padding="10px 22px"
            fontSize="18px"
            color="white"
            borderRadius={"50px"}
            backgroundColor="#0a846b"
          >
            Login
          </Button>
        </Link>
        <Link to="/cadastro" style={{ textDecoration: "none" }}>
          <Button
            padding="10px 22px"
            fontSize="18px"
            color="white"
            backgroundColor="#f26938"
            borderRadius={"50px"}
          >
            Registrar
          </Button>
        </Link>
      </RightContainer>
    </StyledNavbar>
  );
};

export default Navbar;
