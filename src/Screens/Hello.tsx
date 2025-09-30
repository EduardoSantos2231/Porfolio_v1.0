
import "@/App.css"
import { Link } from "react-router-dom";
import AnimatedContent from '@/components/AnimatedContent'

export default function Hello() {

  
  return (
    <div className="flex relative items-center justify-center w-full overflow-hidden">

    <div className="z-1 items-center flex flex-col gap-5 md:gap-7 p-3">
        
        <AnimatedContent
        distance={140}
        direction="vertical"
        reverse={true}
        duration={1.2}
        ease="elastic.out"
        initialOpacity={0.2}
        scale={1.1}
        threshold={0.2}
        delay={0.3}>

        <button className="text-white bg-gradient-to-br p-4 rounded-2xl text-2xl font-extrabold hover:scale-110 transition cursor-pointer purple-glass">
         <Link to={"/about"}>Sobre mim</Link> 
        </button>

      </AnimatedContent>
    </div>
        
    
    </div>
  )
}
