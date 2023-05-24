import React from "react";
interface Props {
  theme: string;
}
const Quote: React.FC<Props> = ({ theme }) => {
  return (
    <section className={`quote-${theme} py-8 lg:py-16`}>
      <h3 className="container text-base lg:text-xl text-center">
        "Las ideas principales son simples y, a medida que se simplifican, son
        más poderosas."
      </h3>
    </section>
  );
};

export default Quote;
