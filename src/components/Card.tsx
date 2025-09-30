import { FaExternalLinkAlt } from "react-icons/fa";

interface cardsData{
    title: string,
    description: string,
    link: string
}


export default function Card({title, description, link}: cardsData) {
  return (
    
      <div className="rounded-sm w-72 h-70 text-center flex flex-col p-6 purple-glass m-3">

        <div className="my-auto">
            <h1 className="font-bold h-11 text-2xl underline decoration-2 decoration-blue-500">
              {title}
            </h1>
            <p className="text-justify">{description}</p>
        </div>

        <div className="flex justify-center p-2">
            <p className="hover:scale-110 transition hover:opacity-90 text-lg p-2 rounded-sm font-semibold hover:shadow-2xs shadow-purple-300">
              <a className="flex gap-2 items-center" target="_blank" href={link}><FaExternalLinkAlt size={20}/>Ver</a>
            </p>
        </div>

      </div>
  )
}
