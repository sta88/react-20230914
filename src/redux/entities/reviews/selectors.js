const selectReviewsModule = (state) => state.reviews;

export const selectReviewById = (state, id) => selectReviewsModule(state).entities[id];

export const selectReviewsIds = (state) => selectReviewsModule(state).ids;