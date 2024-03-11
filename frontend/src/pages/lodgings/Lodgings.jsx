import {
  StyledLodgings,
  LodgingsContainer,
  LeftContainer,
  LeftTitle,
  LeftSection,
  LeftSectionTitle,
  LeftSectionItem,
  RightContainer,
  InputRangeContainer,
  InputRangeDetails,
  InputRange,
  SearchInputContainer,
  SearchInput,
  Icon,
  CardsContainer,
} from "./styles.ts";

import lodgingCards from "../../mocks/lodgingCards.js";
import LodgingCard from "../../components/lodgingCard/LodgingCard.jsx";
import Navbar from "../../components/navbar/Navbar.jsx";

const Lodgings = () => {
  return (
    <StyledLodgings>
      <Navbar />
      <LodgingsContainer>
        <LeftContainer>
          <LeftTitle>Filtros</LeftTitle>
          <LeftSection>
            <LeftSectionTitle>Tipo</LeftSectionTitle>
            <LeftSectionItem>Daycare / Creche</LeftSectionItem>
            <LeftSectionItem>Hotel Pet</LeftSectionItem>
            <LeftSectionItem>Hotel Pet Friendly</LeftSectionItem>
          </LeftSection>
          <LeftSection>
            <LeftSectionTitle>Quero hospedar</LeftSectionTitle>
            <LeftSectionItem>Cão de pequeno porte</LeftSectionItem>
            <LeftSectionItem>Cão de médio porte</LeftSectionItem>
            <LeftSectionItem>Cão de grande porte</LeftSectionItem>
            <LeftSectionItem>Gato</LeftSectionItem>
            <InputRangeContainer>
              <InputRangeDetails>
                <span>R$ 0</span>
                <span>R$ 1000</span>
              </InputRangeDetails>
              <InputRange type="range" />
            </InputRangeContainer>
          </LeftSection>
        </LeftContainer>
        <RightContainer>
          <SearchInputContainer>
            <Icon width="16px" src="./images/search-icon.svg" alt="" />
            <SearchInput type="text" placeholder="Procure por hotéis" />
          </SearchInputContainer>
          <CardsContainer>
            {lodgingCards !== undefined &&
              lodgingCards.length > 0 &&
              lodgingCards.map((lodging) => (
                <LodgingCard lodging={lodging} key={lodging.id} />
              ))}
          </CardsContainer>
        </RightContainer>
      </LodgingsContainer>
    </StyledLodgings>
  );
};

export default Lodgings;
