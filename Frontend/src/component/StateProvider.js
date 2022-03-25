import React, { createContext, useContext, useReducer } from "react";


// prepares the datalayer
export const StateContext = createContext();


// wrap our app and provide teh data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);


// pulll information from the data layer
export const useStateValue = () => useContext(StateContext);
