import Card from "@/components/Card"
import { useState } from "react"
import { type cardsData } from "@/components/Card"


export default function Projects() {
    const [cards, setCards] = useState<cardsData[]| null>(null)
  return (
    <div className="min-w-full flex flex-row justify-center mt-5 gap-4 flex-wrap">
        {cards && cards.length> 0? cards.map((project)=> (
            <Card description={project.description} link={project.link} title={project.title}/>
            )
        ):
            <></>
        }
    </div>
  )
}
