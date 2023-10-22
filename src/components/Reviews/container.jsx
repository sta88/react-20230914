import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectReviewsLoadingStatus } from "../../redux/entities/reviews/selectors";
import { getReviews } from "../../redux/entities/reviews/thunks/get-reviews";
import { getUsers } from "../../redux/entities/users/thunks/get-users";
import { selectUsersLoadingStatus } from "../../redux/entities/users/selectors";
import { REQUEST_STATUS } from "../../constants/statuses";
import { Reviews } from "./component";
import { selectRestaurantReviewsById } from "../../redux/entities/restaurants/selectors";

export const ReviewsContainer = ({restaurantId}) => {
  const reviewsLoadingStatus = useSelector(selectReviewsLoadingStatus);
  const usersLoadingStatus = useSelector(selectUsersLoadingStatus);
  const restaurantReviewsIds = useSelector(state => selectRestaurantReviewsById(state, restaurantId));

  const dispatchReviews = useDispatch();
  useEffect(() => {
    dispatchReviews(getReviews(restaurantId));
  }, [restaurantId]);

  const dispatchUsers = useDispatch();
  useEffect(() => {
    dispatchUsers(getUsers());
  }, []);

  if (reviewsLoadingStatus === REQUEST_STATUS.pending || usersLoadingStatus === REQUEST_STATUS.pending) {
    return <div>Loading...</div>;
  }

  return <Reviews reviewsIds={restaurantReviewsIds} />
};
