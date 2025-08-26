import { Link } from "react-router-dom"
import profile_pic from "@/assets/first_opt.png"
export default function Header() {
  return (
    <div className="flex text-white font-bold font-stretch-condensed md:text-xl py-2">
        <header className="flex w-full mx-2 items-center">

            <div className="mr-auto flex gap-5 items-center">
              <img className="rounded-full w-12 md:w-16" src={profile_pic} alt="" />
              <h1 className="hidden sm:block underline decoration-blue-600 decoration-double md:text-4xl">Eduardo</h1>
            </div>

            <nav className="p-2">
            <ul className="flex gap-4 text-xl">
              <li className="hover:underline ease-in hover:decoration-blue-600 hover:scale-110 transition"><Link to={"contact"}>Contato</Link></li>
              <li className="hover:underline ease-in hover:decoration-blue-600 hover:scale-110 transition"><Link to={"about"}>Sobre mim</Link></li>
              <li className="hover:underline ease-in hover:decoration-blue-600 hover:scale-110 transition"><Link to={"projects"}>Projetos</Link></li>
            </ul>
            </nav>
        </header>
    </div>
  )
}
