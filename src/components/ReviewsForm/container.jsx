import classNames from "classnames";
import { useReducer } from "react";
import { Button } from "../Button/component";
import { ReviewsForm } from "./component";

import styles from "./styles.module.scss";
import { useMakeRequest } from "../../hooks/use-make-request";
import { addReview } from "../../redux/entities/reviews/thunks/add-review";

const DEFAULT_VALUE = {
  userId: "",
  text: "",
  rating: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return { ...state, userId: action.payload };
    case "setReview":
      return { ...state, text: action.payload };
    case "setRating":
      return { ...state, rating: action.payload };
    case "reset":
      return { ...DEFAULT_VALUE };
    default:
      return state;
  }
};

export const ReviewsFormContainer = ({
  className,
  onClose,
  restaurantId,
}) => {
  const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);
  const [creatingReviewStatus, createReview] = useMakeRequest(addReview);

  const resetForm = () => {
    dispatch({ type: "reset" });
    onClose();
  };

  const submitFrom = () => {
    createReview({
      restaurantId,
      newReview: {
        ...formValue,
        userId: "dfb982e9-b432-4b7d-aec6-7f6ff2e6af54",
      },
    });
    onClose();
  };

  return <ReviewsForm
      className={className}
      onSubmit={submitFrom}
      onReset={resetForm}
      formValue={formValue}
      onChange={(type, payload) =>
        dispatch({ type: type, payload: payload })
      }
    />
};
