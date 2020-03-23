<template>
  <Layout>
    <div class="container px-4 my-16">
      <div class="flex justify-center">
        <div class="text-center">
          <p
            style="font-size: calc(30px + 10vw)"
            class="font-serif text-guten-bege"
          >
            404
          </p>
          <p class="text-xl">
            Oops, parece que essa página não existe...
          </p>
          <call-to-action
            filled="bege"
            link="https://hotm.art/tyUU3kJ"
            size="lg"
            class="shadow-2xl mt-8 transform transition-transform duration-300 hover:scale-110"
          >
            <span class="pr-3">Voltar para a Home</span>
          </call-to-action>
        </div>
      </div>
    </div>
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
    height: 680px;
  }

  @media (max-width: 430px) {
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
