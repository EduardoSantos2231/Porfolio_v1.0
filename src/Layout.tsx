import Footer from "@/components/Footer";
import Header from "@/components/Header";
import {Outlet} from "react-router-dom"
import App from "./App";




export default function Layout() {
  return (
    <div className="bg-black min-h-dvh wrap-anywhere p-2">
        <Header/>
          <App>
            <Outlet/>
          </App>
        <Footer/>
    </div>
    
    
  )
}


