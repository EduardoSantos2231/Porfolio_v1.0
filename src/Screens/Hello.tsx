
import "@/App.css"
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';

export default function Hello() {

  
  return (
    <div className="flex relative items-center justify-center w-full overflow-hidden">

    <div className="size-70 top-30 -left-50 absolute rounded-full bg-radial-[at_40%_80%] from-sky-200 via-blue-400 to-indigo-900 to-90%  bg-blue-500  float "></div>
    <div className="size-60 top-60 -right-40 absolute rounded-full bg-radial-[at_30%_40%] float from-purple-300 to-purple-400 to-75%"></div>
    <div className="size-28 bottom-0 left-1 absolute rounded-full bg-radial-[at_30%_40%] float from-white to-zinc-900 to-75%"></div>
    
    <div className="z-1 items-center flex flex-col gap-5 md:gap-7 p-3">
        <span className="text-center">
          <h1 className="font-sans font-extrabold text-4xl md:text-6xl bg-linear-to-r from-indigo-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString("Olá, sou o Eduardo")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Transformo ideias em projetos que ganham vida")
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString("Bem-vindo ao meu portfólio!")
                    .start()
                }}
              />
          </h1>
        </span>
        <button className="text-black font-stretch-75% p-4 bg-linear-65 from-purple-200 to-pink-400 hover:shadow-blue-50 hover:shadow-sm opacity-85 rounded-2xl text-2xl font-extrabold hover:scale-110 transition cursor-pointer">
         <Link to={"/projects"}>Projetos</Link> 
        </button>
    </div>
        
    
    </div>
  )
}
