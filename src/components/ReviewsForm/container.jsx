import classNames from "classnames";
import { useReducer } from "react";
import { Button } from "../Button/component";
import { ReviewsForm } from "./component";

import styles from "./styles.module.scss";
import { useMakeRequest } from "../../hooks/use-make-request";
import { addReview } from "../../redux/entities/reviews/thunks/add-review";

const DEFAULT_VALUE = {
  name: "",
  review: "",
  rating: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setName":
      return { ...state, name: action.payload };
    case "setReview":
      return { ...state, review: action.payload };
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
  const [creatingReviewStatus, createReview] = useMakeRequest(addReview, {
    restaurantId,
    newReview: formValue,
  }, {dispatch});

  const resetForm = () => {
    dispatch({ type: "reset" });
    onClose();
  };

  const submitFrom = () => {
    console.log(formValue);
    createReview();
    onClose();
  };

  return (
    <ReviewsForm
      className={className}
      onSubmit={submitFrom}
      onReset={resetForm}
      formValue={formValue}
      onChange={(type, payload) =>
        dispatch({ type: type, payload: payload })
      }
    />
        // <div className={classNames(styles.form, className)}>
        //   <h4>Enter your review</h4>
        //   <div className={styles.formRow}>
        //       <input
        //           className={styles.input}
        //           type="text"
        //           placeholder="Name"
        //           value={formValue.name}
        //           onChange={(e) => dispatch({type: 'setName', payload: e.target.value})}
        //       />
        //   </div>
        //   <div className={styles.formRow}>
        //       <textarea
        //           className={styles.textarea}
        //           placeholder="..."
        //           value={formValue.review}
        //           onChange={(e) => dispatch({type: 'setReview', payload: e.target.value})}
        //       ></textarea>
        //   </div>
        //   <div className={styles.formRow}>
        //       <input
        //           className={styles.input}
        //           type="number"
        //           min="0"
        //           max="5"
        //           placeholder="0-5"
        //           value={formValue.rating}
        //           onChange={(e) => dispatch({type: 'setRating', payload: e.target.value})}
        //       />
        //   </div>
        //   <Button
        //     onClick={resetForm}
        //     variant={'cancel'}>
        //     Cancel
        //   </Button>
        //   <Button
        //     onClick={resetForm}
        //     className={styles.button}>
        //     Save
        //   </Button>
        // </div>
    );
};
