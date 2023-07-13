import React from "react";
import { useLanguage } from "../../context/language.context";
interface Props {
  theme: string;
}
const Quote: React.FC<Props> = ({ theme }) => {
  const { language } = useLanguage();
  return (
    <section className={`quote-${theme} py-8 lg:py-16`}>
      <h3 className="container text-base lg:text-xl text-center">
        {language === "es"
          ? '"Las ideas principales son simples y, a medida que se simplifican, son más poderosas"'
          : '"The main ideas are simple, and as they are simplified, they become more powerful"'}
      </h3>
    </section>
  );
};

export default Quote;
