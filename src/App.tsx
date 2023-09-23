import { useState } from "react";
import PhotoManager from "./components/photoManager/PhotoManager";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <PhotoManager />;
}

export default App;
