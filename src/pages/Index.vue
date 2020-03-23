<template>
  <Layout>
    <div class="bg-black">
      <section class="bg-flavio-wrapper flex">
        <div class="container pb-12 bg-flavio mt-auto">
          <div class="flex pt-24 sm:pt-32 pb-10 sm:pb-20">
            <div class="w-full md:w-2/3 lg:w-1/2 px-8 md:px-4">
              <div class="quote">
                Para uma formação intelectual preparada para o mundo de hoje,
                precisamos entender muitos assuntos. E quase todos começaram ou
                se materializaram com a Primeira Guerra Mundial.
              </div>
              <p class="font-bold my-2 text-white">Flavio Morgenstern</p>
            </div>
            <div
              class="hidden md:w-1/3 lg:w-1/2 px-4 md:flex justify-center align-middle"
            >
              <Popup v-model="videoPopup">
                <div class="video-container">
                  <iframe
                    width="956"
                    height="538"
                    src="https://www.youtube.com/embed/cOrPDtxaI8Y"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
              </Popup>
              <button @click="videoPopup = !videoPopup">
                <PlayButton />
                <div class="sr-only">Assistir ao Vídeo</div>
              </button>
            </div>
          </div>
          <div class="flex justify-start px-4">
            <call-to-action
              filled="bege"
              link="https://hotm.art/tyUU3kJ"
              size="lg"
            >
              <span class="pr-3">Inscreva-se</span> <RightArrow />
            </call-to-action>
          </div>
        </div>
      </section>
    </div>
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
              Conheça um momento histórico de extrema importância
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
              <b>
                Quase todas as grandes questões do mundo atual têm uma origem
                comum.
              </b>
            </p>
            <p>
              Quando leio sobre questões políticas atuais, noto sempre que as
              pessoas infelizmente não conhecem a origem de seus próprios
              pensamentos – e, ainda mais, desconhecem a história que gerou o
              que discutimos no mundo de hoje.
            </p>
            <p>
              Quer um exemplo? Estamos numa nova discussão política que parece
              velha: o ressurgimento do nacionalismo, sobretudo contra o chamado
              globalismo. Mas por que o nacionalismo voltou no século XXI? Qual
              a sua origem? Por que o famoso nacionalismo alemão gerou tanto os
              Irmãos Grimm quanto Adolf Hitler?
            </p>
            <p>
              O nacionalismo teve seu grande ápice na Primeira Guerra Mundial,
              quando um nacionalista sérvio-bósnio destruiu o sistema de
              monarquias internacionais. E foi seu fim que criou os órgãos de
              governança globalistas de hoje.
            </p>
            <p>
              Pense nos problemas mundiais de agora. Oriente Médio? Os diversos
              países da região passaram a existir – brigando entre si – quando o
              Império Otomano ruiu após a revolta árabe, no fim da Primeira
              Guerra. Intervenções americanas? A América abandonou o
              isolacionismo... no meio da Primeira Guerra. Aliás, a Primeira
              Guerra foi a primeira “guerra ao terror” – e foi quando o Ocidente
              parou de admirar reis para vibrar com a democracia.
            </p>
            <p>
              E nossas explicações para estes problemas? Marxismo? Virou
              política de Estado com a Revolução Russa, no meio da Primeira
              Guerra Mundial. Feminismo? A conquista do voto feminino foi no
              fim... da Primeira Guerra. Estado laico? Ideologia? Novas formas
              de família e de sexualidade? Adivinhe...
            </p>
            <p>
              Há mais de 6 anos que venho estudando a fundo a Primeira Guerra
              Mundial, e fico cada vez mais impressionado com o pouco que
              sabemos de um conflito que definiu muito do que pensamos. É
              dificílimo imaginar algo que estejamos discutindo no Facebook ou
              no Twitter HOJE que não tenha tido sua origem, ou sua
              materialização e expansão, justamente em um conflito que completou
              100 anos há pouco.
            </p>
            <p>
              Sempre quis criar algo que explicasse a fundo as idéias modernas –
              o que está “por trás” de muitas das nossas discussões, que usam
              palavras poderosas, mas vazias de sentido quando não sabemos seu
              histórico. E percebi algo: boa parte do trabalho estava em
              entender um conflito quase ignorado, sobretudo quando comparado à
              Segunda Guerra. Mas, afinal, até o horror nazista só ocorreu...
              por causa da Primeira Guerra Mundial.
            </p>
            <p>
              Por isso preparei este curso: não é apenas para olhar para o
              passado, mas para te ajudar a entender problemas de hoje, questões
              que estão sendo discutidas agora – e vai desde a arte moderna até
              o papel do Estado. Além de importante, certamente é emocionante!
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
            link="https://hotm.art/tyUU3kJ"
            size="lg"
            class="shadow-2xl transform transition-transform duration-300 hover:scale-110"
          >
            <span class="pr-3">Inscreva-se</span> <RightArrow />
          </call-to-action>
        </div>
      </div>
    </section>
    <!-- Outras sessões -->
    <Modulos />
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

import Modulos from '~/components/Modulos'
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
    Modulos,
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
.bg-flavio {
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.1) 50%,
      rgba(30, 30, 30, 0.8)
    ),
    url('../assets/images/flavio-bg.png') no-repeat center right;
  background-size: contain;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;

  @media (max-width: 1300px) {
    background: none;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
}

.bg-flavio-wrapper {
  @media (max-width: 1300px) {
    background: linear-gradient(
        to bottom,
        rgba(17, 17, 17, 0.02) 0%,
        rgba(41, 41, 41, 0.86) 80%,
        rgba(49, 49, 49, 1) 90%
      ),
      url('../assets/images/flavio-bg.png') no-repeat center right;
    background-size: contain;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }

  @media (max-width: 767px) {
    background: linear-gradient(
        to bottom,
        rgba(17, 17, 17, 0.02) 0%,
        rgba(41, 41, 41, 0.86) 75%,
        rgba(49, 49, 49, 1) 90%
      ),
      url('../assets/images/flavio-bg.png') no-repeat center right;
    background-size: 130%;
    height: 745px;
    background-position: top center;
  }

  @media (max-width: 500px) {
    background: linear-gradient(
        to bottom,
        rgba(17, 17, 17, 0.02) 0%,
        rgba(41, 41, 41, 0.86) 45%,
        rgba(49, 49, 49, 1) 80%
      ),
      url('../assets/images/flavio-bg.png') no-repeat center right;
    background-size: 130%;
    background-position: top center;
    height: 680px;
  }

  @media (max-width: 430px) {
    background: linear-gradient(
        to bottom,
        rgba(17, 17, 17, 0.02) 0%,
        rgba(41, 41, 41, 0.86) 35%,
        rgba(49, 49, 49, 1) 60%
      ),
      url('../assets/images/flavio-bg.png') no-repeat center right;
    background-size: 130%;
    background-position: top center;
    height: 630px;
  }

  @media (max-width: 360px) {
    height: 580px;
  }
}

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

.video-container {
  position: relative;
  padding-bottom: 56.25%;
  padding-top: 30px;
  height: 0;
  overflow: hidden;
}

.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
