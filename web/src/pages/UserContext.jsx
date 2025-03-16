import { createContext, useState } from "react";
import { postLogin, postLogout, postRegister } from "../services/api/auth";
import { useNavigate } from "react-router";

export const UserContext = createContext({
  user: {},
  login: () => {},
  logout: () => {},
  register: () => {},
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  let navigate = useNavigate();

  const login = (email, username, password) => {
    postLogin(email, username, password).then((data) => {
      setUser(data.user);
      navigate("/");
    });
  };

  const logout = () => {
    postLogout().then(() => {
      setUser({});
    });
  };

  const register = (username, email, password) => {
    postRegister(username, email, password).then(() => {
      login(email, username, password);
    });
  };

  return (
    <UserContext.Provider value={{ user, login, logout, register }}>
      {children}
    </UserContext.Provider>
  );
};