import Header from "@/components/Header";
import {Outlet} from "react-router-dom"
import App from "./App";
import DarkVeil from '@/components/DarkVeil';




export default function Layout() {
  return (
    <div className="min-h-dvh wrap-anywhere relative">
      <div className="fixed inset-0 z-0">
        <DarkVeil noiseIntensity={0.12} warpAmount={3}/>
      </div>
      <main className="relative z-10 min-h-dvh">
        <Header/>
          <App>
            <Outlet/>
          </App>
      </main>
    </div>
    
    
  )
}


