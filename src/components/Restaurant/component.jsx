import React from "react";

import { Menu } from "../../components/Menu/component";
import { Reviews } from "../../components/Reviews/component";

import styles from './styles.module.scss'

export const Restaurant = ({restaurants, activeIndex}) => {
    return (
        <div>
            <h1 className={styles.title}>{restaurants[activeIndex].name}</h1>

            <Menu menu={restaurants[activeIndex].menu} className={styles.menu} />
            <Reviews reviews={restaurants[activeIndex].reviews} />
        </div>
    );
};