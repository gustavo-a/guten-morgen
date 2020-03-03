<template>
  <Layout>
    <section class="bg-black">
      <div class="container">
        <div class="flex pt-24 sm:pt-32 pb-10 sm:pb-20">
          <div class="w-full md:w-2/3 lg:w-1/2 px-8 md:px-4">
            <div class="quote">
              Só uma mudança cultural profunda, que eleve o nível do debate, não
              apenas na política, mas em todas as áreas, poderá mudar
              verdadeiramente o Brasil.
            </div>
            <p class="font-bold my-2 text-white">Flavio Morgenstern</p>
          </div>
          <div
            class="hidden md:w-1/3 lg:w-1/2 px-4 md:flex justify-center align-middle"
          >
            <Popup v-model="videoPopup">
              <iframe
                width="956"
                height="538"
                src="https://www.youtube.com/embed/KetGbkalUgQ"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </Popup>
            <button @click="videoPopup = !videoPopup">
              <PlayButton />
              <div class="sr-only">Assistir ao Vídeo</div>
            </button>
          </div>
        </div>
        <div class="flex justify-start px-4">
          <call-to-action filled="bege" link="https://google.com" size="lg">
            <span class="pr-3">Inscreva-se</span> <RightArrow />
          </call-to-action>
        </div>
      </div>
    </section>
    <section class="bg-black pt-16 pb-8">
      <div class="container">
        <div class="flex flex-wrap text-white font-serif">
          <div
            class="w-full md:w-1/2 lg:w-1/4 px-4 my-4 lg:m-0 flex lg:border-r-2 lg:border-guten-cinza-1"
          >
            <div class="w-1/3 flex justify-center"><Star /></div>
            <div class="w-2/3 self-center md:self-start">
              Seja capaz de elevar o nível do debate.
            </div>
          </div>
          <div
            class="w-full md:w-1/2 lg:w-1/4 px-4 my-4 lg:m-0 flex lg:border-r-2 lg:border-guten-cinza-1"
          >
            <div class="w-1/3 flex justify-center"><Star /></div>
            <div class="w-2/3 self-center md:self-start">
              Aprenda de forma rápida e concisa
            </div>
          </div>
          <div
            class="w-full md:w-1/2 lg:w-1/4 px-4 my-4 lg:m-0 flex lg:border-r-2 lg:border-guten-cinza-1"
          >
            <div class="w-1/3 flex justify-center"><Star /></div>
            <div class="w-2/3 self-center md:self-start">
              Prepare-se para uma profunda transformação na sua visão de mundo.
            </div>
          </div>
          <div class="w-full md:w-1/2 lg:w-1/4 my-4 lg:m-0 px-4 flex">
            <div class="w-1/3 flex justify-center"><Star /></div>
            <div class="w-2/3 self-center md:self-start">
              Ajude e mudar o Brasil
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="pt-20 pb-16">
      <div class="container">
        <div class="md:w-2/3 xl:w-1/3 m-auto">
          <h2 class="title-1">
            O que realmente faz diferença é o conhecimento
          </h2>
        </div>
        <div class="flex justify-center">
          <div class="wysiwyg md:w-11/12 lg:w-2/3 my-16 mx-4 sm:mx-8">
            <p>
              <b>Talvez você não saiba, mas eu já fui esquerdista.</b> <br />
              Sim, meu amigo, já acreditei nesse conto da carochinha. Sabe como
              são os adolescentes, né? Quando questionado sobre o conselho que
              daria aos jovens, Nelson Rodrigues respondeu: “envelheçam”. Mas,
              com todo respeito ao grande Nelson, somente envelhecer não basta.
              É enorme o número de senhores de idade hoje que mais parecem
              adolescentes.
            </p>
            <p>
              No meu caso, quando aprendi que as ideias esquerdistas levam,
              inexoravelmente, à miséria, servidão e morte (exceto para os
              membros do partido), mudei minha visão de mundo e abandonei os
              ideais marxistas. Foi duro. O marxismo cultural está muito
              enraizado no Brasil, especialmente na academia, notadamente nas
              ciências humanas e, mais ainda, nas áreas de letras e filosofia...
              Justamente as minhas áreas de estudo naquele momento.
            </p>
            <p>
              Virei um pária. E, como ainda não tinha uma bagagem cultural muito
              grande, apanhava demais nas conversas e debates. No fim das
              contas, ainda não tinha boas respostas para os argumentos dos
              “esquerdistas profissionais” – afinal, eles vivem disso.
            </p>
            <p>
              Talvez você esteja passando ou já tenha passado por algo
              semelhante.
            </p>
            <p>
              Foi quando decidi me dedicar a entender esses temas e mergulhei no
              estudo de autores conservadores como Eric Voeglin, Edmund Burke,
              Alexis de Toquevile, João Pereira Coutinho, Olavo de Carvalho,
              Friedrich Hayek e Roger Scruton.
            </p>
            <p>
              Então meu mundo mudou. Depois de alguns anos trabalhando como
              tradutor e revisor, fundei o Senso Incomum, o que, pra encurtar a
              história, nos traz até aqui.
            </p>
            <p>
              De todo o conhecimento que adquiri nos últimos 20 anos, se eu
              pudesse destacar um assunto que fez a diferença para entender o
              mundo em que vivemos hoje, não tenho dúvidas de que foi a
              compreensão do que aconteceu na PRIMEIRA GUERRA MUNDIAL.
            </p>

            <p>
              Tenho dedicado os últimos 5 anos a esse assunto. E é esse
              conhecimento que gostaria de compartilhar com você através do
              Guten Morgen Go. Esse trabalho é a segunda maior realização da
              minha vida (a primeira é a minha linda filha, de 6 meses).
            </p>
            <h3 class="title-2">
              Garanto uma coisa pra você: vai ser transformador.
            </h3>
            <p>
              <b>O Guten Morgen Go – Primeira Guerra Mundial</b> é um curso em
              vídeo, áudio e textos sobre os efeitos duradouros da Grande Guerra
              no mundo atual.
            </p>
            <p>
              Não se trata meramente de um curso de história, e sim de uma
              análise cultural sobre como esta guerra tão pouco estudada definiu
              como o mundo seria atualmente.
            </p>
            <p>
              É a Primeira Guerra que marca o triunfo hegemônico da democracia
              sobre as antigas monarquias, o desencantamento da religião e da
              tradição que permitiram a ascensão de visões de mundo seculares,
              como o marxismo e a psicanálise, além da era do modernismo nas
              artes e no pensamento – toda a tradição anterior passa a ser
              ignorada e criticada, tratando-se o mais recente sempre como mais
              válido do que o mais antigo.
            </p>
            <p>
              Apesar de ignorada ao ser comparada com a Segunda Guerra, com o
              horror do Holocausto e das bombas nucleares, foi a trágica e
              eletrizante Primeira Guerra Mundial que delineou o mundo, os
              conflitos, a política e as ideologias que marcam nosso pensamento
              do século XX até os nossos dias.
            </p>
            <p>
              Espero poder contar com você nessa jornada no Guten Morgen Go.
              Aproveite o desconto promocional, clique no botão abaixo e
              inscreva-se agora.
            </p>
            <h3 class="title-2">
              As inscrições serão encerradas muito em breve. Então, não perca
              tempo.
            </h3>
          </div>
        </div>
        <div class="flex justify-center">
          <call-to-action
            filled="bege"
            link="https://google.com"
            size="lg"
            class="shadow-2xl transform transition-transform duration-300 hover:scale-110"
          >
            <span class="pr-3">Inscreva-se</span> <RightArrow />
          </call-to-action>
        </div>
      </div>
    </section>
    <!-- Outras sessões -->
    <DepoimentosSlider />
    <Modulos />
    <BlocoCTA />
    <Depoimentos />

    <section class="py-32">
      <div class="container px-4">
        <div class="flex justify-center mb-16">
          <h2 class="title-1">
            Quem vai se beneficiar desse conteúdo
          </h2>
        </div>
        <div class="flex flex-wrap justify-center">
          <div class="w-full md:w-1/2 px-4">
            <ul class="lista">
              <li>Advogados</li>
              <li>Publicitários e Marketeiros</li>
              <li>Juristas</li>
              <li>Políticos e pessoas que trabalham com política</li>
              <li>Psicólogos</li>
              <li>Empresários</li>
              <li>Estudantes</li>
            </ul>
          </div>
          <div class="w-full md:w-1/2 px-4">
            <ul class="lista">
              <li>Donas de casa</li>
              <li>Aposentados</li>
              <li>Jornalistas</li>
              <li>Vendedores</li>
              <li>Funcionários Públicos</li>
              <li>Cidadãos brasileiros interessados em melhorar o Brasil.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <Assine />
  </Layout>
</template>

<script>
import PlayButton from '~/assets/images/play.svg'
import RightArrow from '~/assets/images/right-arrow.svg'
import Star from '~/assets/images/star.svg'
import CTA from '~/components/shared/Cta'

import DepoimentosSlider from '~/components/DepoimentosSlider'
import Modulos from '~/components/Modulos'
import BlocoCTA from '~/components/BlocoCTA'
import Depoimentos from '~/components/Depoimentos'
import Assine from '~/components/Assine'
import Popup from '~/components/shared/Popup'

import 'wysiwyg.css'

export default {
  metaInfo: {
    title: 'Conheça a guerra que mudou tudo!'
  },
  components: {
    PlayButton,
    RightArrow,
    Star,
    'call-to-action': CTA,
    DepoimentosSlider,
    Modulos,
    BlocoCTA,
    Depoimentos,
    Assine,
    Popup
  },
  data() {
    return {
      videoPopup: false
    }
  }
}
</script>

<style lang="scss">
.quote {
  @apply .text-guten-bege .font-serif .text-4xl .italic .relative .inline;

  &::before,
  &::after {
    @apply .block .text-white .absolute;
  }

  &::before {
    content: '“';
    @apply .left-0;
    transform: translate3d(-100%, 0, 0);
  }

  &::after {
    content: '”';
    @apply .right-0 .bottom-0;
    transform: translate3d(100%, 0, 0);
  }

  @media (max-width: 1024px) {
    @apply .text-3xl;
  }

  @media (max-width: 500px) {
    @apply .text-2xl;
  }

  @media (max-width: 360px) {
    @apply .text-xl;
  }
}
ul.lista {
  li {
    list-style-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2IiBoZWlnaHQ9IjYiIHZpZXdCb3g9IjAgMCA2IDYiPjxyZWN0IHdpZHRoPSI2IiBoZWlnaHQ9IjYiIGZpbGw9IiNiMjk5NjUiLz48L3N2Zz4=);
    margin-bottom: 0.25rem;
  }
}

/******************************
  Títulos
*******************************/

.title-1,
.title-2 {
  @apply .font-serif .text-guten-bege .italic;
}

.title-1 {
  @apply .text-3xl .text-center .relative;

  &::after {
    content: '';
    @apply .block .bg-guten-bege .m-auto .mt-6;
    height: 5px;
    width: 125px;
  }
}

.title-2,
.wysiwyg .title-2 {
  @apply .text-2xl .font-normal;

  @media (max-width: 360px) {
    @apply .text-xl;
  }
}

iframe {
  max-width: 100%;
  height: auto;
}
</style>
