import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "620b8d940f2b5514c7f76007",
    username: "jane",
    email: "jane@gmail.com",
    profilePicture: "person/5.jpeg",
    coverPicture: "",
    isAdmin: false,
    followers: [],
    followings: ["620b8d8a0f2b5514c7f76005"],
    city: "Paris",
    desc: "Welcometo my page",
    from: "Berlin",
    relationship: 2,
  },
  isFetching: false,
  error: false,
};
export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
