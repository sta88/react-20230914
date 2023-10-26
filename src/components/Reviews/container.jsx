import { useSelector } from "react-redux";
import { getReviews } from "../../redux/entities/reviews/thunks/get-reviews";
import { getUsers } from "../../redux/entities/users/thunks/get-users";
import { REQUEST_STATUS } from "../../constants/statuses";
import { Reviews } from "./component";
import { selectRestaurantReviewsById } from "../../redux/entities/restaurants/selectors";
import { useRequest } from "../../hooks/use-request";
import { useMakeRequest } from "../../hooks/use-make-request";
import { addReview } from "../../redux/entities/reviews/thunks/add-review";

export const ReviewsContainer = ({ restaurantId }) => {
  const reviewsLoadingStatus = useRequest(getReviews, restaurantId);
  const usersLoadingStatus = useRequest(getUsers);

  const restaurantReviewsIds = useSelector((state) =>
    selectRestaurantReviewsById(state, restaurantId)
  );

  if (
    reviewsLoadingStatus === REQUEST_STATUS.pending ||
    usersLoadingStatus === REQUEST_STATUS.pending
  ) {
    return <div>Loading...</div>;
  }

  return <Reviews reviewsIds={restaurantReviewsIds} restaurantId={restaurantId} />;
};
