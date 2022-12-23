import { useAuth } from "../auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (user !== "") {
      login(user);
      navigate("/");
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
