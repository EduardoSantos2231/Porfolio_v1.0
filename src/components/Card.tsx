interface cardOptions{
    title: string,
    description: string,
    link: string
}


export default function Card({title, description, link}: cardOptions) {
  return (
    <div className="bg-linear-to-r text-black from-indigo-200 to-indigo-300 min-w-72 max-h-72 text-center flex flex-col p-5">
        
        <div className="my-auto">
            <h1 className="font-bold h-11">{title}</h1>
            <p className="text-justify">{description}</p>
        </div>
        <p>{link}</p>

    </div>
  )
}
