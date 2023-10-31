import React from "react";
import { Restaurant } from "./component";
import { useParams } from "react-router-dom";
import { useGetRestaurantsQuery } from "../../redux/services/api";

export const RestaurantContainer = () => {
  const {restaurantId} = useParams();
  const {data: restaurant} = useGetRestaurantsQuery(null, {
    selectFromResult: (result) => {
      return {...result, data: result?.data?.find(({id}) => id === restaurantId)}
    }
  });

  if (!restaurant) {
    return null;
  }

  return <Restaurant restaurant={restaurant}/>;
};