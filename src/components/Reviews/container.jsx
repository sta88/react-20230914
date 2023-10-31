import { Reviews } from "./component";
import { useGetReviewsQuery } from "../../redux/services/api";

export const ReviewsContainer = ({ restaurantId }) => {
  const {data: reviews, isFetching} = useGetReviewsQuery(restaurantId);

  if (isFetching) {
    return <div>Loading...</div>;
  }

  return <Reviews reviews={reviews} restaurantId={restaurantId} />;
};
