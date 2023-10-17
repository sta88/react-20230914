import React from "react";
import { useSelector } from "react-redux";
import { selectRestaurantById } from "../../redux/entities/restaurants/selectors";

import { Menu } from "../../components/Menu/component";
import { Reviews } from "../../components/Reviews/component";

import styles from './styles.module.scss'

export const Restaurant = ({restaurantId}) => {
    const restaurant = useSelector((state) => selectRestaurantById(state, restaurantId));

    if (!restaurant) {
      return null;
    }

    const {name, menu, reviews} = restaurant;

    return (
        <div>
            <h1 className={styles.title}>{name}</h1>

            <Menu menu={menu} className={styles.menu} />
            <Reviews reviewsIds={reviews} />
        </div>
    );
};