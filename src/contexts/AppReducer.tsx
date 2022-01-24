// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any, action: any) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        users: [...state.users, action.newUser],
      };

    case "EDIT_USER":
      return {
        ...state,
        users: state.users.map((user: any) => {
          if (user.id === action.editingUser.id) {
            return action.editingUser;
          } else {
            return user;
          }
        }),
      };

    case "REMOVE_USER":
      return {
        ...state,
        users: state.users.filter((user: any) => {
          return user.id !== action.record.id;
        }),
      };

    default:
      return state;
  }
};
