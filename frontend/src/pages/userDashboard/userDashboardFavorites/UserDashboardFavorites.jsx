import {
  StyledUserDashboardFavorites,
  Container,
  CardsContainer,
} from "./styles.ts";

import ProductCard from "../../../components/productCard/ProductCard.jsx";

import productCards from "../../../mocks/productCards.js";

const UserDashboardFavorites = () => {
  return (
    <StyledUserDashboardFavorites>
      <Container>
        <CardsContainer>
          {productCards !== undefined &&
            productCards.length > 0 &&
            productCards.map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
        </CardsContainer>
      </Container>
    </StyledUserDashboardFavorites>
  );
};

export default UserDashboardFavorites;
