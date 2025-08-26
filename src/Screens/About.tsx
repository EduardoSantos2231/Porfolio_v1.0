import photo_preview from "@/assets/second_opt.png"

export default function About() {
  return (
    <div className="flex w-full m-4 p-4 flex-col md:justify-between">

        <div className="justify-center flex">
            <img className="size-40 rounded-full border-3" src={photo_preview} alt="Eduardo sorrindo" />
        </div>

        <div className="flex w-full flex-col">
            <h1 className="font-bold text-2xl">Quem eu sou?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam molestias consectetur! Unde cupiditate, sed pariatur earum laboriosam exercitationem architecto!</p>
        </div>

        <div className="flex w-full flex-col">
            <h1 className="font-bold text-2xl">Por que programação?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam molestias consectetur! Unde cupiditate, sed pariatur earum laboriosam exercitationem architecto!</p>
        </div>

        <div className="flex w-full flex-col">
            <h1 className="font-bold text-2xl">Tecnologias e habilidades</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam molestias consectetur! Unde cupiditate, sed pariatur earum laboriosam exercitationem architecto!</p>
        </div>
        

    </div>
  )
}
