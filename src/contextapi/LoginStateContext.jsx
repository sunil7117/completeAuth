import { createContext, useState } from "react";

const loginStateContext = createContext(null);
const LoginStateContext = ({ children }) => {
  const [loginstate, setloginstate] = useState("login");

  return (
    <LoginStateContext.Provider value={theme}>
      {children}
    </LoginStateContext.Provider>
  );
};
