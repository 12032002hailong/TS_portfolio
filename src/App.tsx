import { useState } from "react";
import Portfolio from "@/screens/portfolio";
import "@/styles/plugins.scss";
import "@/styles/style.scss";

function App() {
  const [count, setCount] = useState(0);

  return <Portfolio />;
}

export default App;
