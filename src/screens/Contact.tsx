import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import ContactCard from "@/components/ContactCard";

export default function Contact() {
  return (
    <div className="flex w-full my-10 items-center justify-center relative overflow-hidden">
      <span className="purple-glass p-10 flex flex-col gap-3">
        <ContactCard
          callTo="Conecte-se comigo"
          icon={FaLinkedin}
          link="https://www.linkedin.com/in/edusn/"
          title="Linkedin"
        />
        <ContactCard
          callTo="Veja meus códigos"
          icon={FaGithub}
          link="https://github.com/EduardoSantos2231"
          title="Github"
        />
        <ContactCard
          callTo="Entre em contato"
          icon={FaWhatsapp}
          link="https://wa.me/71987501446"
          title="Whatsapp"
        />
      </span>
    </div>
  );
}
