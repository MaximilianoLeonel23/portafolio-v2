import Header from "./components/organism/Header";
import Main from "./components/organism/Main";
import { useState } from "react";
const App = () => {
  const [theme, setTheme] = useState<string>("dark");

  return (
    <div className={`blackout-${theme}`}>
      <Header theme={theme} setTheme={setTheme} />
      <Main theme={theme} />
    </div>
  );
};

export default App;
