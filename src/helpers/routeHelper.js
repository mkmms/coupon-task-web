import { Navigate, useLocation } from "react-router-dom";
import useApp from "../hooks/appContext";

export const Protected = ({ children }) => {
  const { isLoggedin } = useApp();
  const location = useLocation();

  if (!isLoggedin) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export const LoginRedirect = ({ children }) => {
  const { isLoggedin } = useApp();
  const location = useLocation();

  if (isLoggedin) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};
