import photo_preview from "@/assets/first_opt.png"

export default function About() {
  return (
    <div className="flex w-full m-4 p-4 flex-col md:justify-around gap-4 ">

        <div className="justify-center flex">
            <img className="size-40 md:size-60 rounded-full border-4" src={photo_preview} alt="Eduardo sorrindo" />
        </div>

        <div className="flex w-full flex-col">
            <h1 className="font-bold text-2xl text-justify">Quem eu sou?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam molestias consectetur! Unde cupiditate, sed pariatur earum laboriosam exercitationem architecto!</p>
        </div>

        <div className="flex w-full flex-col">
            <h1 className="font-bold text-2xl text-justify">Por que programação?</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam molestias consectetur! Unde cupiditate, sed pariatur earum laboriosam exercitationem architecto!</p>
        </div>

        <div className="flex w-full flex-col">
            <h1 className="font-bold text-2xl text-justify">Tecnologias e habilidades</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut aperiam molestias consectetur! Unde cupiditate, sed pariatur earum laboriosam exercitationem architecto!</p>
        </div>
        

    </div>
  )
}
