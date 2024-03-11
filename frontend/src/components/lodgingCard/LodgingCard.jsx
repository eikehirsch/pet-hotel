import {
  StyledLodgingCard,
  CardImage,
  CardContentContainer,
  CardTitle,
  RatingContainer,
  CardAvgRating,
  RatingsNumber,
  City,
  Price,
} from "./styles.ts";

const LodgingCard = ({ lodging }) => {
  return (
    <StyledLodgingCard key={lodging.image}>
      <CardImage src={lodging.img} alt="" />
      <CardContentContainer>
        <CardTitle>{lodging.name}</CardTitle>
        <RatingContainer>
          <CardAvgRating>{lodging.ratingAverage}</CardAvgRating>
          <RatingsNumber>
            {`(${lodging.ratingsNumber} avaliações)`}
          </RatingsNumber>
        </RatingContainer>
        <City>{lodging.city}</City>
        <Price>R$ {lodging.daily} Dia</Price>
      </CardContentContainer>
    </StyledLodgingCard>
  );
};

export default LodgingCard;
