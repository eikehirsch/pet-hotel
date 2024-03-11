import {
  StyledProductCard,
  CardImage,
  CardContentContainer,
  Title,
  DetailsContainer,
  Type,
  Size,
  City,
  Price,
} from "./styles.ts";

const ProductCard = ({ product }) => {
  return (
    <StyledProductCard key={product.image}>
      <CardImage src={product.img} alt="" />
      <CardContentContainer>
        <Title>{product.name}</Title>
        <DetailsContainer>
          <Type>{product.type}</Type>
          {product.size && (
            <>
              <span>·</span>
              <Size>
                Tamanho: <b>{product.size}</b>
              </Size>
            </>
          )}
        </DetailsContainer>
        <City>{product.city}</City>
        <Price>R$ {product.price}</Price>
      </CardContentContainer>
    </StyledProductCard>
  );
};

export default ProductCard;
