<template>
  <Layout>
    <div class="container my-16">
      <div class="flex justify-center px-4">
        <div class="w-full md:w-10/12 lg:w-8/12">
          <h1 class="text-4xl sm:text-5xl italic font-serif text-guten-bege">
            Dúvidas
          </h1>
        </div>
      </div>
    </div>
    <div class="container mb-32">
      <div class="flex justify-center px-4">
        <div class="wysiwyg w-full md:w-10/12 lg:w-8/12">
          <ol>
            <li><b>Qual a duração do curso?</b><br>
              <p>O curso sobre a primeira guerra terá 16 semanas (4 módulos) de duração. A cada semana serão lançados três vídeos.</p>
            </li>
    
            <li><b>Qual o prazo para concluir o curso?</b><br>
              <p>O curso ficará disponível na plataforma online até 2022. Você pode fazê-lo no ritmo que preferir.</p>
            </li>
            
            <li><b>Haverá testes ou provas?</b><br>
              <p>Não. O curso é para seu aprimoramento pessoal e para entender melhor o mundo atual, não há necessidade de testes.</p>
            </li>
            
            <li><b>Poderei fazer perguntas? Terei alguma participação ativa?</b><br>
              <p>Sim. Uma vez a cada módulo (4 semanas), Flavio Morgenstern fará uma aula ao vivo respondendo às perguntas enviadas pelos alunos.</p>
            </li>
            
            <li><b>O curso tem horário fixo?</b><br>
              <p>Não. Enviaremos os vídeos semanalmente e você os assiste no seu ritmo. Apenas a aula mensal será feita em horário pré agendado, ao vivo. Mesmo assim ela ficará disponível para quem não conseguiu assistir na hora.</p>
            </li>

            <li><b>Preciso de algum conhecimento prévio para fazer o curso?</b><br>
              <p>Não. Claro que um pouco de cultura geral é sempre bem vinda, mas nada que atrapalhe o entendimento do curso.</p>
            </li>
            
            <li><b>Qual a melhor forma de contato para dúvidas técnicas, problemas de acesso e cobrança?</b><br>
              <p>O email cursos@pane.la é o melhor canal de contato para isso.</p>
            </li>
          </ol>
        </div>
      </div>
    </div>
  </Layout>
</template>

<script>
import 'wysiwyg.css'

export default {
  metaInfo: {
    title: 'Dúvidas'
  }
}
</script>

<style>
li>p{
  margin-bottom: 1.4em !important;
}

</style>
