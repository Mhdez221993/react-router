import { useAuth } from "../auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const Login = () => {
  const [user, setUser] = useState(null);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    if (user != null && user !== "") {
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
      <button onClick={handleClick}>Submit</button>
    </>
  );
};
