export default function Header() {
  return (
    <div className="flex text-white font-light font-stretch-condensed md:text-xl text-lg py-2 fixed top-0 right-0">
      <header className="flex w-full mx-2 items-center">
        <nav className="p-2 flex gap-4">
          <a href="#sobre">
            <p>Sobre</p>
          </a>
          <a href="#contatos">
            <p>Contatos</p>
          </a>
          <a href="#projetos">
            <p>Projetos</p>
          </a>
        </nav>
      </header>
    </div>
  );
}
