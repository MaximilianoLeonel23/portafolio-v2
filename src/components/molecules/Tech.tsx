interface Props {
  source: string;
}

const Tech: React.FC<Props> = ({ source }) => {
  return (
    <div className="h-24 w-24 lg:h-36 lg:w-36 inline-flex ml-16 lg:ml-24">
      <img src={source} className="h-full w-full object-contain" alt="tech" />
    </div>
  );
};

export default Tech;
