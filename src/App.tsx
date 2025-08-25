
import "@/App.css"
import type { ReactNode } from "react"


interface appChildren{
  children: ReactNode
}

function App({children}: appChildren) {
  

  return (
        <div className="flex flex-row gap-2 min-h-dvh text-white">
          {children}
        </div>
  )
}

export default App
