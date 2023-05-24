import { createContext, useReducer, useEffect } from "react";
import { useState } from "react";
import IntegrationData from "../IntegrationData.json";

export let AuthContext = createContext();

function AuthContextProvider({ children }) {
  let initState = {
    token: null,
    isAuth: false,
    email: null,
    name: null,
  };
  let [state, dispatch] = useReducer(reducer, initState);
  let [integrationData, setIntegrationData] = useState(IntegrationData.Data);
  let [searchValue, setSearchValue] = useState("");

  function reducer(state, action) {
    switch (action.type) {
      case "isAuth":
        return { ...state, isAuth: action.payload };
      case "token":
        return { ...state, token: action.payload };
      case "email":
        return { ...state, email: action.payload };
      case "name":
        return { ...state, name: action.payload };
      default:
        return state;
    }
  }
  function Search(e) {
    setSearchValue(e.target.value);
  }

  useEffect(() => {
    let newData = IntegrationData.Data.filter((el) => {
      return el.Title.includes(searchValue);
    });
    setIntegrationData(newData);
  }, [searchValue]);

  return (
    <AuthContext.Provider value={{ state, dispatch, Search, integrationData }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContextProvider;
