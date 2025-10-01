
import GooeyNav from './GooeyNav'
export default function Header() {
  const items = [
    { label: "Sobre", href: "#sobre" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contatos", href: "#contatos" }];
  return (
    <div className="flex text-white font-bold font-stretch-condensed md:text-xl text-lg py-2">
        <header className="flex w-full mx-2 items-center">

            <nav className="p-2 h-fit ml-auto">
              <GooeyNav
              items={items}
              particleCount={15}
              particleDistances={[90, 10]}
              particleR={100}
              initialActiveIndex={0}
              animationTime={600}
              timeVariance={300}
              colors={[1, 2, 3, 1, 2, 3, 1, 4]}/>
            </nav>
        </header>
    </div>
  )
}
