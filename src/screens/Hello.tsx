import "@/App.css";
import FadeContent from "@/components/FadeContent";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";

export default function Hello() {
  return (
    <div className="min-w-full">
      <div className="mx-5 flex flex-col">
        <section className="min-h-dvh flex flex-col justify-center items-center text-center py-20">
          <FadeContent
            blur={true}
            duration={1000}
            easing="ease-out"
            initialOpacity={10}
          >
            <h1 className="text-4xl font-extralight md:text-6xl max-w-4xl tracking-tight leading-tight">
              TRANSFORME A SUA IDEIA EM ALGO CONCRETO.
            </h1>
          </FadeContent>
        </section>

        <div className="flex justify-center flex-col">
          <section id="sobre" className="flex justify-center py-20">
            <About />
          </section>

          <section className="flex flex-col items-center py-50" id="projetos">
            <h1 className="text-4xl font-extralight md:text-5xl mb-12">
              Projetos Recentes
            </h1>
            <div>
              <Projects />
            </div>
          </section>

          <section className="flex flex-col items-center py-50" id="contatos">
            <h1 className="text-4xl font-extralight md:text-5xl mb-12">
              Entre com contato comigo
            </h1>
            <Contact />
          </section>
        </div>
      </div>
    </div>
  );
}
