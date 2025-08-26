import Descriptional from "@/components/Descriptional";
import GrayBubble from "@/components/GrayBubble";
import PinkBubble from "@/components/PinkBubble";

export default function Contact() {
  return (
    <div className="flex w-full my-10 flex-col items-center md:justify-center md:gap-5 relative overflow-hidden">
        <span className="hover:scale-110 transition cursor-pointerw  h-fit">
         <a href="https://www.linkedin.com/in/edusn/" target="_blank">
           <Descriptional title="Linkedin" description=""/>
            <p>Conecte-se comigo</p>
         </a>
        </span>

        <div className="size-80 bg-radial from-blue-500 opacity-90 to-blue-500 rounded-full float absolute top-10 -left-50 md:-left-44"></div>

        <span className="hover:scale-110 transition cursor-pointer h-fit z-1">
         <a href="https://github.com/EduardoSantos2231" target="_blank">
           <Descriptional title="Github" description=""/>
            <p>Veja meus códigos</p>
         </a>
        </span>

        <span className="hover:scale-110 transition cursor-pointer h-fit z-1">
         <Descriptional title="Email" description=""/>
         <p>Entre em contato</p>
        </span>
        <PinkBubble/>
        <GrayBubble/>
      
    </div>
  )
}
