import Card from "@/components/Card"




export default function Projects() {
  return (
    <div className="min-w-full flex flex-col md:flex-row items-center justify-center mt-5 gap-4 flex-wrap md:items-start">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <Card title="Simulador x86" description="Durante o 4º período da faculdade, estudamos e implementamos um simulador de instruções de um processador x86 em modo real, aplicando conceitos vistos em sala de aula"
          link="https://github.com/klayera7/visualizadorInstrucoesAssembly" />

        <Card title="ScreenShotApi" description="Buscando entender mais sobre bancos de dados e compartilhamento de imagens, construí uma api de compartilhamento de screenshots que recebem um id pseudoaleatório"
          link="https://github.com/EduardoSantos2231/screenshotshareapi" />

        <Card title="Cadastro de produtos" description="Um CRUD fundamental para entender sobre o funcionamento de apis no express, bem como  a integração com React"
          link="https://github.com/EduardoSantos2231/screenshotshareapi" />

      </div>
    </div>
  )
}
