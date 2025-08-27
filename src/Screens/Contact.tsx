import Descriptional from "@/components/Descriptional";
import GrayBubble from "@/components/GrayBubble";
import PinkBubble from "@/components/PinkBubble";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import ContactCard from "@/components/ContactCard";

export default function Contact() {
  return (
    <div className="flex w-full gap-3 my-10 flex-col items-center md:justify-center md:gap-5 relative overflow-hidden">
        <div className="hover:scale-110 transition cursor-pointerw h-fit flex-col">
          <span className="flex flex-row items-center gap-2">
          <FaLinkedin size={30}/>
          <Descriptional title="Linkedin" description=""/>
          </span>
         <a href="https://www.linkedin.com/in/edusn/" target="_blank">
            <p className="underline decoration-blue-400">Conecte-se comigo</p>
         </a>
        </div>

        <div className="size-80 bg-radial from-blue-500 opacity-90 to-blue-500 rounded-full float absolute top-10 -left-50 md:-left-44"></div>

        <ContactCard callTo="Veja meus códigos" 
        icon={FaGithub} 
        link="https://github.com/EduardoSantos2231" title="Github"/>

        <div className="hover:scale-110 transition cursor-pointer h-fit z-1">
           <span className="flex flex-row gap-2">
            <CiMail size={30}/>
            <Descriptional title="Email" description=""/>
           </span>
         <a href="mailto:denoticiadose@gmail.com">
           <p className="underline decoration-blue-400">Entre em contato</p>
         </a>
        </div>
        <PinkBubble/>
        <GrayBubble/>
      
    </div>
  )
}
