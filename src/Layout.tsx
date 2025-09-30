import Header from "@/components/Header";
import {Outlet} from "react-router-dom"
import App from "./App";
import DarkVeil from '@/components/DarkVeil';




export default function Layout() {
  return (
    <div className="min-h-dvh wrap-anywhere p-2 relative">
      <div className="absolute inset-0 z-0 w-full min-h-dvh">
        <DarkVeil noiseIntensity={0.1} warpAmount={3}/>
      </div>
      <main className="relative z-10">
        <Header/>
          <App>
            <Outlet/>
          </App>
      </main>
    </div>
    
    
  )
}


