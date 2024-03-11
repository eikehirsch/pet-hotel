import { StyledReviews, ReviewContainer, FirstRow, Profile, Avatar, UsernameRatingBox, Username, UserRating, ReviewDate, ReviewSecondRow } from "./styles.ts";

const Review = ({ review }) => {
  return (
    <StyledReviews>
      <ReviewContainer>
        <FirstRow>
          <Profile>
            <Avatar src={review.avatar} />
            <UsernameRatingBox>
              <Username>{review.userName}</Username>
              <UserRating>
                {Array.from(Array(review.userRating), (e, i) => {
                  return <img src="./images/full-star.svg" key={i} />;
                })}
                {Array.from(Array(5 - review.userRating), (e, i) => {
                  return <img src="./images/empty-star.svg" key={i} />;
                })}
              </UserRating>
            </UsernameRatingBox>
          </Profile>
          <ReviewDate></ReviewDate>
        </FirstRow>
        <ReviewSecondRow>{review.comment}</ReviewSecondRow>
      </ReviewContainer>
    </StyledReviews>
  );
};

export default Review;
