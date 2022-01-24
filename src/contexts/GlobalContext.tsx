import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial State
const initialState = {
  users: [
    {
      id: "1",
      name: "Mokbul Hossain",
    },
    {
      id: "2",
      name: "Jim Green",
    },
    {
      id: "3",
      name: "Joe Black",
    },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider Component
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        // @ts-ignore: Unreachable code error
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
