import Card from "@/components/Card"




export default function Projects() {
  return (
    <div className="min-w-full flex flex-col md:flex-row items-center justify-center mt-5 gap-4 flex-wrap">
    

          <Card title="Timer" description="Um projeto que realizei durante a fase de aprendizado de 
          manipulação do DOM e funções nativas do javascript, implementei funções de pausar, continuar e começar o timer." 
          link="https://eduardosantos2231.github.io/Timer/"/>

          <Card title="Lista de Tarefas" description="Um projeto clássico e interessante para entender o uso de funcionalidades e uso de hooks no react. Foi um dos primeiros projetos que criei com a biblioteca."
          link="https://eduardosantos2231.github.io/ListaTarefas/"/>
        
    </div>
  )
}
