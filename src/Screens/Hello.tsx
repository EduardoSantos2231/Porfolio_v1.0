
import "@/App.css"
import { Link } from "react-router-dom";
import AnimatedContent from '@/components/AnimatedContent'
import Magnet from '@/components/Magnet'

export default function Hello() {

  
  return (
    <div className="flex relative items-center justify-center w-full overflow-hidden">
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

         
        <Magnet padding={100} disabled={false} magnetStrength={3}>
          <button className="text-white bg-gradient-to-br p-4 rounded-2xl text-2xl font-extrabold transition cursor-pointer purple-glass">
          <Link to={"/about"}>Sobre mim</Link> 
          </button>
        </Magnet>

      </AnimatedContent>
    
        
    
    </div>
  )
}
