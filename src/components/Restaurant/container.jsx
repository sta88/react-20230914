import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/selectors";
import { Restaurant } from "./component";

export const RestaurantContainer = ({restaurantId}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

    if (!restaurant) {
      return null;
    }

    return <Restaurant restaurant={restaurant}/>;
};