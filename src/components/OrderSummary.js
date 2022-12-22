import { useNavigate } from "react-router-dom";

export const OrderSummary = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    console.log(navigate);
    navigate(-1);
  };

  return (
    <>
      <h1>Order confirmed!</h1>
      <button onClick={handleClick}>Back</button>
    </>
  );
};
