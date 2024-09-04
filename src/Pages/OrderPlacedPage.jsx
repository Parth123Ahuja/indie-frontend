import { Navigate } from "react-router";

const OrderPlacedPage = () => {
  const navigate = Navigate();

  setTimeout(() => navigate("/shop"), 2000);
  return (
    <div className="flex-row justify-center align-middle">
      <p>Thankyou For placing an order</p>
      <p>Please wait while we redirect you...</p>
    </div>
  );
};

export default OrderPlacedPage;
