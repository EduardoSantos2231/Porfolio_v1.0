
import GrayBubble from "@/components/GrayBubble";
import PinkBubble from "@/components/PinkBubble";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import ContactCard from "@/components/ContactCard";

export default function Contact() {
  return (
    <div className="flex w-full gap-3 my-10 flex-col items-center md:justify-center md:gap-5 relative overflow-hidden">
      
        <ContactCard callTo="Conecte-se comigo" icon={FaLinkedin} link="https://www.linkedin.com/in/edusn/" title="Linkedin"/>

        <div className="size-80 bg-radial from-blue-500 opacity-90 to-blue-500 rounded-full float absolute top-10 -left-50 md:-left-44"></div>

        <ContactCard callTo="Veja meus códigos" icon={FaGithub} link="https://github.com/EduardoSantos2231" title="Github"/>

        <ContactCard callTo="Entre em contato" icon={CiMail} link="mailto:denoticiadose@gmail.com" title="Email"/>
        <PinkBubble/>
        <GrayBubble/>
      
    </div>
  )
}
