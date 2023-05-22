import calculator from "../../assets/portfolio/calculator.png";

const Project = () => {
  return (
    <article className="border-b py-4 border-gray-200">
      <div className="columns-2 gap-32">
        <div className="flex justify-between">
          <p className="text-gray-400">01</p>
          <div className="w-3/4 -m-2">
            <a href="/">
              <img src={calculator} className="rounded" />
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <h4 className="font-semibold text-xl text-gray-600">
            Calculator App
          </h4>
          <p className="font-normal text-sm text-gray-500">
            Esta calculadora forma parte de un desafío de frontend mentor y
            permite realizar las operaciones básicas.
          </p>
          <div className="flex gap-4">
            <p className="px-2 py-1 bg-gray-200 rounded text-sm text-gray-400">
              desktop
            </p>
            <p className="px-2 py-1 bg-gray-200 rounded text-sm text-gray-400">
              mobile
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
