import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GitTab from "./components/GitTab";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <GitTab />
    </>
  );
}

export default App;
