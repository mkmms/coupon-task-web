import { useState, useContext, createContext } from "react";
const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const defaultAuth = {
    token: "",
    email: "",
    name: "",
    client: "",
  };
  const persistedAuthString = localStorage.getItem("auth");
  let persistedAuth;
  if (persistedAuthString) {
    persistedAuth = JSON.parse(persistedAuthString);
  }

  const [isLoggedin, setLoggedin] = useState(!!persistedAuth);
  const [auth, setAuth] = useState(persistedAuth || defaultAuth);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const logout = () => {
    setLoggedin(false);
    localStorage.removeItem("auth");
    setAuth(defaultAuth);
  };

  const setLogin = (isAuth, user) => {
    setLoggedin(isAuth);
    localStorage.setItem("auth", JSON.stringify(user));
    setAuth(user);
  };

  const appObject = {
    isLoggedin,
    auth,
    products,
    cart,
    setLoggedin,
    setLogin,
    logout,
    setProducts,
    setCart
  };

  return (
    <AppContext.Provider value={appObject}>{children}</AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export default useAppContext;
