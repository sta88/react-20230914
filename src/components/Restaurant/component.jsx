import React from "react";
import { ReviewsContainer } from "../Reviews/container";
import { MenuContainer } from "../Menu/container";

import styles from './styles.module.scss'

export const Restaurant = ({restaurant}) => {
    return (
        <div>
            <h1 className={styles.title}>{restaurant.name}</h1>

            <MenuContainer restaurantId={restaurant.id} className={styles.menu} />
            <ReviewsContainer restaurantId={restaurant.id} />
        </div>
    );
};