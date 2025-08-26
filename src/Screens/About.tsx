import photo_preview from "@/assets/first_opt.png"
import Descriptional from "@/components/Descriptional"

export default function About() {
  return (
    <div className="flex w-full m-4 p-4 flex-col md:justify-around gap-4 ">

        <div className="justify-center flex">
            <img className="size-40 md:size-60 rounded-full border-4" src={photo_preview} alt="Eduardo sorrindo" />
        </div>

        <div className="flex w-full flex-col">
            <h1 className="font-bold text-2xl bg-linear-to-r from-blue-400 via-fuchsia-500 to-fuchsia-400 text-transparent bg-clip-text"></h1>
            <p className="text-lg text-justify"></p>
        </div>

        <Descriptional title="Quem eu sou?"  description="Olá! Sou Eduardo, um estudante de Engenharia de Software no 
                4º período, apaixonado por traduzir ideias em soluções digitais. 
                Minha jornada na programação é guiada pela curiosidade constante 
                e pelo desejo de dominar novas tecnologias. Fora das telas, encontro 
                equilíbrio e foco nos esportes, como o MMA e o levantamento de peso, 
                que me ensinam a importância da disciplina e da superação. A mesma 
                dedicação que aplico nos treinos, eu levo para o código. Nos momentos 
                de pausa, recarrego as energias com a leitura, explorando a mente de 
                grandes autores como Dostoiévski e Orwell, que, com suas obras-primas 
                como Memórias do Subsolo e 1984, me inspiram a pensar de forma crítica 
                e a ver o mundo sob diferentes perspectivas."/>

        <Descriptional title="Por que programação?" description="Minha fascinação pelo universo da programação começou na 
                infância, com a ideia de dar 'vida' às máquinas. Sempre me impressionei 
                com a robótica e com a forma como o código, que parecia uma espécie de magia, 
                podia criar mundos e funcionalidades do zero. O que me move hoje é a oportunidade 
                de transformar conceitos abstratos em algo tangível e funcional. Para mim, programar não é apenas escrever linhas de código, mas sim resolver problemas, inovar e construir ferramentas que impactam a vida das pessoas. 
                É essa paixão pela criação e pela resolução de desafios que me 
                mantém motivado a aprimorar minhas habilidades a cada dia."/>

        <Descriptional title="Tecnologias e habilidades" description="Minha base de conhecimento e as ferramentas que utilizo para dar vida aos meus projetos 
                são as seguintes:"/>

        <div className="flex w-full flex-col">
            <ul className="underline decoration-1 decoration-blue-500 text-lg">
                <li>Front-end: React, JavaScript, TypeScript e Tailwind.</li>
                <li>Back-end: Node.js, Express.</li>
                <li>Banco de Dados: PostgreSQL.</li>
                <li>Controle de Versão: Git.</li>
            </ul>
        </div>
        

    </div>
  )
}
