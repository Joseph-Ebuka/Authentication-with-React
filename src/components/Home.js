import { useNavigate } from "react-router-dom";
export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <p>Home page</p>
      <button onClick={() => navigate("order-summary")}>Place order</button>
    </>
  );
};
