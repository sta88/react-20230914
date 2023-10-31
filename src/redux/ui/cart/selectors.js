const selectCartModule = (state) => state.cart;

export const selectDishAmountById = (state, id) => selectCartModule(state)[id] || 0;