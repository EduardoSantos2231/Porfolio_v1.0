import Header from "@/components/Header";
import DarkVeil from '@/components/DarkVeil';
import Hello from "./Screens/Hello";


export default function Layout() {
  return (
    <div className="min-h-dvh wrap-anywhere relative text-white">
      <div className="fixed inset-0 z-0 h-dvh"> 
        <DarkVeil noiseIntensity={0.12} warpAmount={3}/>
      </div>
      <main className="relative z-10 min-h-dvh">
        <Header/>
        <Hello/> 
      </main>
    </div>
    
    
  )
}
