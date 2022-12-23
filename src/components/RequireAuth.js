import { Navigate, useLocation } from "react-router-dom";

import { useAuth } from "../auth";

export const RequireAuth = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) {
    return <Navigate to="/login" state={{ path: location.pathname }} />;
  }

  return children;
};
