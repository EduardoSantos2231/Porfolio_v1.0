interface cardOptions{
    title: string,
    description: string,
    link: string
}


export default function Card({title, description, link}: cardOptions) {
  return (
    <div className="rounded-br-md bg-linear-to-r text-black from-indigo-500 via-indigo-300 to-indigo-200 w-72 h-72 text-center flex flex-col p-5">
        
        <div className="my-auto">
            <h1 className="font-bold h-11 text-2xl">{title}</h1>
            <p className="text-justify">{description}</p>
        </div>
        <div className="flex justify-center">
            <p className="bg-blue-100 hover:scale-110 transition hover:opacity-90 text-lg p-2 rounded-sm font-semibold shadow-lg"><a href={link}>Acessar</a></p>
        </div>

    </div>
  )
}
