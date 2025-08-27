import type { IconType } from "react-icons/lib"
import Descriptional from "./Descriptional";

interface contactInfos{
    icon: IconType;
    title: string;
    callTo: string;
    link: string;
}

export default function ContactCard({icon: Icon, title, callTo, link}: contactInfos) {
  return (
    <div className="hover:scale-110 transition cursor-pointer h-fit z-1">
              <span className="flex flex-row gap-2">
                <Icon size={30}/>
                <Descriptional title={title} description=""/>
              </span>
             <a href={link} target="_blank">
                <p className="underline decoration-blue-400">{callTo}</p>
             </a>
    </div>
  )
}
