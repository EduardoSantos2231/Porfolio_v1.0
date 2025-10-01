interface profileDescription {
  title: string;
  description: string;
}

export default function Descriptional({
  title,
  description,
}: profileDescription) {
  return (
    <div className="flex w-fit h-fit flex-col">
      <h1 className="font-bold text-2xl bg-linear-to-r from-blue-400 via-fuchsia-500 to-fuchsia-400 text-transparent bg-clip-text">
        {title}
      </h1>
      <p className="text-lg text-justify">{description}</p>
    </div>
  );
}
