import { useAuth } from "../auth";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return (
    <>
      <div>Welcome {user}</div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </>
  );
};
