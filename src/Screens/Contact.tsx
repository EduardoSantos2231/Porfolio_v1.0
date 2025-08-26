import Descriptional from "@/components/Descriptional";
import PinkBubble from "@/components/PinkBubble";

export default function Contact() {
  return (
    <div className="flex w-full my-10 flex-row justify-center md:gap-5 relative">
        <span className="hover:scale-110 transition cursor-pointerw  h-fit">
         <a href="https://www.linkedin.com/in/edusn/" target="_blank">
           <Descriptional title="Linkedin" description=""/>
            <p>Conecte-se comigo</p>
         </a>
        </span>

        <PinkBubble/>

        <span className="hover:scale-110 transition cursor-pointer h-fit">
         <a href="https://github.com/EduardoSantos2231" target="_blank">
           <Descriptional title="Github" description=""/>
            <p>Veja meus códigos</p>
         </a>
        </span>

        <span className="hover:scale-110 transition cursor-pointer h-fit">
         <Descriptional title="Email" description=""/>
         <p>Entre em contato</p>
        </span>
      
    </div>
  )
}
