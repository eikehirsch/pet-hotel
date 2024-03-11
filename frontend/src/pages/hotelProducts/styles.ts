import styled from "styled-components";

export const StyledHotelProducts = styled.div`
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

export const HotelProductsContainer = styled.div`
  width: 80%;
  margin: auto;
`;

export const HotelContainerHeader = styled.div`
  display: flex;
  padding: 2.5rem 0;
  align-items: center;
  width: 100%;
`;

export const Icon = styled.img`
  width: ${(props) => (props.width ? props.width : "auto")};
  height: ${(props) => (props.height ? props.height : "auto")};
  margin-right: ${(props) => props.marginRight};
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  margin-left: 16px;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 20px;
`;

export const Vacancy = styled.span`
  font-size: 15px;
  color: #0a846b;
  font-weight: 500;
`;

export const Banner = styled.div`
  background-image: url("/images/hotel-banner.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  width: 100%;
  height: 285px;
  margin: 0;
`;

export const GalerySection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  margin-bottom: 2.5rem;
`;

export const SectionTitle = styled.h5`
  margin: 0;
  font-size: 16px;
  font-weight: 500;
`;

export const SectionSubtitle = styled.h2`
  margin: 0;
  color: #0a846b;
  width: 100%;
`;

export const AboutSection = styled.div`
  display: flex;
  gap: 5rem;
  margin-bottom: 2.5rem;
`;

export const AboutLeftBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
  gap: 6px;
`;

export const AboutRightBox = styled.div`
  text-align: justify;
  text-justify: inter-word;
`;

export const RightDescription = styled.span`
  line-height: 30px;
  font-size: 14px;
`;

export const ProductsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`;

export const PaginatorSection = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3rem;
`;

export const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ProductsTitleBox = styled.div`
  display: flex;
  flex-direction: column;
`;

export const CardsContainer = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  row-gap: 30px;
`;

export const ReviewsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
`;

export const ReviewsContainer = styled.div`
  margin-top: 20px;
`;

export const LocationSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6rem;
`;

export const LocationDescriptionBox = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px 0 40px 0;
`;

export const LocationDescription = styled.span`
  font-size: 14px;
`;

export const LocationPosition = styled.img``;