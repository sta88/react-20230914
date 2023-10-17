const selectUsersModule = (state) => state.users;

export const selectUserById = (state, id) => selectUsersModule(state).entities[id];

export const selectUsersIds = (state) => selectUsersModule(state).ids;