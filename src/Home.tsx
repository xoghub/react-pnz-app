import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  
  function handleNavigateToData() {
    navigate({
      pathname: "/data",
    });
  }
  return (
    <div>
      <h1>Home</h1>
      <p>Welcome to the Home page!</p>

      <button onClick={handleNavigateToData}>
        Go to Data
      </button>
    </div>
  );
}