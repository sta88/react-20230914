import React from "react";

import { Menu } from "../../components/Menu/component";
import { Reviews } from "../../components/Reviews/component";

export const Restaurant = ({restaurants, activeIndex}) => {
    return (
        <div>
            <h1>{restaurants[activeIndex].name}</h1>

            <Menu data={restaurants[activeIndex].menu} />
            <Reviews data={restaurants[activeIndex].reviews} />
        </div>
    );
};