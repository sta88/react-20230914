import React from "react";
import { useSelector } from "react-redux";

import { Menu } from "../../components/Menu/component";
import { Reviews } from "../../components/Reviews/component";

import styles from './styles.module.scss'

export const Restaurant = ({restaurantsIds, activeIndex}) => {
    const restaurant = useSelector((state) => state.restaurants.entities[restaurantsIds[activeIndex]]);
    const {name, menu, reviews} = restaurant;

    return (
        <div>
            <h1 className={styles.title}>{name}</h1>

            <Menu menu={menu} className={styles.menu} />
            <Reviews reviews={reviews} />
        </div>
    );
};