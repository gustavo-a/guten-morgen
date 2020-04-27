<template>
  <section class="bg-black py-32">
    <div class="container px-4">
      <div class="flex justify-center mb-16">
        <h2 class="title-1">Assine agora</h2>
      </div>
      <div class="flex flex-wrap md:justify-around">
        <div
          class="w-full md:w-1/2 lg:w-1/3 rounded-lg bg-gray-100 text-center px-4 py-10 self-center mb-16 md:mb-0"
        >
          <Star class="m-auto mb-4" />
          <div class="text-3xl font-serif text-guten-bege italic">
            De R$ <span class="line-through">489,90</span>
          </div>
          <span>Por apenas:</span>
          <div class="grid font-serif text-guten-bege my-4 italic">
            <div class="text-2xl">10x de</div>
            <div class="text-5xl">R$ 33,90</div>
          </div>
          <span>Total:R$339,00</span>
        </div>
        <div class="w-full md:w-1/3 text-white">
          <p class="mb-4 font-bold">
            Esse é o mais valioso e completo curso online sobre a Primeira
            Guerra Mundial já produzido.
          </p>
          <ul class="lista">
            <li>Mais de 30% de desconto.</li>
            <li>Acesso ilimitado por 12 meses (vitalício para patronos).</li>
            <li>Espaço para perguntas e respostas.</li>
            <li>Aulas ao vivo com Flavio Morgenstern.</li>
            <li>
              Metodologia didática que permite aprendizado profundo, num curto
              espaço de tempo.
            </li>
            <li>
              Oportunidade de adquirir conhecimentos que vão transformar a sua
              visão de mundo
            </li>
          </ul>
          <call-to-action
            filled="bege"
            :link="$static.generalData.hotmartUrl"
            size="lg"
            class="shadow-2xl mt-6 transform transition-transform duration-300 hover:scale-110"
          >
            <span class="pr-3">Inscreva-se</span> <RightArrow />
          </call-to-action>
        </div>
      </div>
    </div>
  </section>
</template>

<static-query>
query{
  generalData(id: "1"){
    hotmartUrl
  }
}
</static-query>

<script>
import CTA from '~/components/shared/Cta'
import RightArrow from '~/assets/images/right-arrow.svg'
import Star from '~/assets/images/star.svg'

export default {
  components: {
    'call-to-action': CTA,
    RightArrow,
    Star
  }
}
</script>

<style></style>
