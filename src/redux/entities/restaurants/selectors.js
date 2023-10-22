const selectRestaurantsModule = (state) => state.restaurants;

export const selectRestaurantById = (state, id) => selectRestaurantsModule(state).entities[id];

export const selectRestaurantsIds = (state) => selectRestaurantsModule(state).ids;

export const selectRestaurantsLoadingStatus = (state) => selectRestaurantsModule(state).status;

export const selectRestaurantMenuById = (state, id) => selectRestaurantById(state, id).menu;

export const selectRestaurantReviewsById = (state, id) => selectRestaurantById(state, id).reviews;