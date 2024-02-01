import { useState } from "react";
import "./App.css";
import { GetImageUrl } from "./components/ImageUrl";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GetImageUrl />
    </>
  );
}

export default App;
