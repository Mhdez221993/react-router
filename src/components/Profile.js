import { useAuth } from "../auth";

export const Profile = () => {
  const { user } = useAuth();

  return (
    <>
      <div>Welcome {user}</div>
    </>
  );
};
