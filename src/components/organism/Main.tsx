import About from "../sections/About";
import Banner from "../sections/Banner";
import Home from "../sections/Home";
import Projects from "../sections/Projects";
import Quote from "../sections/Quote";

interface Props {
  theme: string;
}
const Main: React.FC<Props> = ({ theme }) => {
  return (
    <main className="pt-16">
      <Home theme={theme} />
      <Banner theme={theme} />
      <Projects theme={theme} />
      <Quote theme={theme} />
      <About theme={theme} />
    </main>
  );
};

export default Main;
