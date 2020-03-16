<template>
  <Layout :remove-header="true" :reduced-footer="true">
    <div class="bg-black">
      <section class="bg-flavio-wrapper flex">
        <div class="container pb-12 bg-flavio mt-auto">
          <div class="flex pt-48 sm:pt-32 pb-10 sm:pb-20">
            <div class="w-full md:w-2/3 lg:w-1/2 px-8 md:px-4">
              <h1
                class="text-guten-bege italic font-serif text-2xl md:text-4xl"
              >
                Webinar exclusivo para patronos sobre a Primeira Guerra Mundial.
              </h1>
              <div class="mt-8 text-white text-base md:text-2xl">
                <p>Data: 20/03</p>
                <p>Horário: 19h</p>
                <p>Vagas limitadas.</p>
              </div>
              <div
                role="main"
                class="my-8"
                id="webinar-42725fbf41f743b3e033"
              ></div>
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
        </div>
      </section>
    </div>
  </Layout>
</template>

<script>
import PlayButton from '~/assets/images/play.svg'
import RightArrow from '~/assets/images/right-arrow.svg'
import CTA from '~/components/shared/Cta'

import Popup from '~/components/shared/Popup'

export default {
  metaInfo: {
    title: 'Webinar exclusivo para Patronos'
  },
  components: {
    PlayButton,
    RightArrow,
    'call-to-action': CTA,
    Popup
  },
  data() {
    return {
      videoPopup: false
    }
  },
  mounted() {
    new RDStationForms(
      'webinar-42725fbf41f743b3e033',
      'UA-154867274-1'
    ).createForm()
  }
}
</script>

<style lang="scss">
#rd-section-joq3m2m5c {
  background: transparent !important;
}

#rd-column-juvacwbp > div {
  padding-left: 0 !important;
}

#rd-form-joq3m2m5i .bricks-form__fieldset {
  flex-flow: row nowrap !important;
  justify-content: space-between;

  @media (max-width: 512px) {
    flex-flow: column nowrap !important;
  }
}

#rd-form-joq3m2m5i .bricks-form__field {
  width: 48% !important;
  flex-grow: unset !important;

  @media (max-width: 512px) {
    width: 100% !important;
  }
}

.bricks--component-embeddable-form {
  @media (max-width: 512px) {
    width: 100% !important;
  }
}

#rd-form-joq3m2m5i #rd-button-joq3m2m5a {
  font-family: Open Sans, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji',
    'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji' !important;
  font-weight: 400 !important;
  height: 50px !important;
}

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
        rgba(41, 41, 41, 0.86) 35%,
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
    height: 670px;
  }

  @media (max-width: 360px) {
    height: 800px;
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
