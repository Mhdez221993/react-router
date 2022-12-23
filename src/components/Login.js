import { useLocation, useNavigate } from "react-router-dom";

import { useAuth } from "../auth";
import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  const handleLogin = () => {
    if (user !== "") {
      login(user);
      navigate(redirectPath, { replace: true });
    }
  };

  return (
    <>
      <input
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <button onClick={handleLogin}>Submit</button>
    </>
  );
};
