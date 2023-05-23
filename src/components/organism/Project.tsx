const Project = ({ project }: any) => {
  const { id, title, link, shortLink, source, desktop, mobile, description } =
    project;
  return (
    <article className="border-b py-4 border-gray-200">
      <div className="columns-1 lg:columns-2 gap-32">
        <div className="flex justify-between">
          <p className="w-1/4 text-gray-400">0{id}</p>
          <div className="w-3/4 -mt-2">
            <a href={link}>
              <img src={source} className="rounded" />
            </a>
          </div>
        </div>
        <div className="py-8 pl-[25%] lg:pl-0 flex flex-col gap-y-4">
          <h4 className="font-semibold text-xl text-gray-600">{title}</h4>
          <p className="font-normal text-sm text-gray-500">{description}</p>
          <a
            href={link}
            className="font-normal text-sm text-primary-light-500 hover:underline underline-offset-4"
          >
            {shortLink}
          </a>
          <div className="flex gap-4">
            {desktop && (
              <p className="px-2 py-1 bg-gray-200 rounded text-sm text-gray-400">
                desktop
              </p>
            )}
            {mobile && (
              <p className="px-2 py-1 bg-gray-200 rounded text-sm text-gray-400">
                mobile
              </p>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default Project;
