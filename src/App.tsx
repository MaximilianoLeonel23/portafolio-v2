import Header from "./components/organism/Header";
import Main from "./components/organism/Main";
import { useState } from "react";
const App = () => {
  const [theme, setTheme] = useState<string>("light");

  return (
    <div className={`blackout-${theme}`}>
      <Header />
      <Main />
      <footer></footer>
    </div>
  );
};

export default App;
