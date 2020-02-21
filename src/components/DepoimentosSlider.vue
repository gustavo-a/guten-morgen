<template>
  <section class="py-32 bg-guten-gelo">
    <div class="container">
      <div class="flex justify-center">
        <div class="w-5/6 lg:w-2/3 xl:w-1/2 relative">
          <div class="glide">
            <div data-glide-el="track" class="glide__track">
              <ul class="glide__slides">
                <li class="glide__slide">
                  <p class="title-2">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur, aperiam earum quia repellendus doloremque
                    neque reiciendis delectus. Eos, illo optio, accusantium
                    natus obcaecati similique eveniet facere, sunt fugiat
                    debitis quas.”
                  </p>
                  <div class="text-center mt-8">
                    <div class="font-bold">Eduardo Bolsonaro</div>
                    <div>Deputado Federal (Aliança-SP).</div>
                  </div>
                </li>
                <li class="glide__slide">
                  <p class="title-2">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur, aperiam earum quia repellendus doloremque
                    neque reiciendis delectus. Eos, illo optio, accusantium
                    natus obcaecati similique eveniet facere, sunt fugiat
                    debitis quas.”
                  </p>
                  <div class="text-center mt-8">
                    <div class="font-bold">Eduardo Bolsonaro</div>
                    <div>Deputado Federal (Aliança-SP).</div>
                  </div>
                </li>
                <li class="glide__slide">
                  <p class="title-2">
                    “Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Consequuntur, aperiam earum quia repellendus doloremque
                    neque reiciendis delectus. Eos, illo optio, accusantium
                    natus obcaecati similique eveniet facere, sunt fugiat
                    debitis quas.”
                  </p>
                  <div class="text-center mt-8">
                    <div class="font-bold">Eduardo Bolsonaro</div>
                    <div>Deputado Federal (Aliança-SP).</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="controls left-0 md:ml-32" @click="slider.go('<')">
            <BigArrow class="inverter" />
            <div class="sr-only">Depoimento anterior</div>
          </div>
          <div class="controls right-0 md:mr-32" @click="slider.go('>')">
            <BigArrow />
            <div class="sr-only">Próximo depoimento</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Glide from '@glidejs/glide'
import '@glidejs/glide/dist/css/glide.core.min.css'
import BigArrow from '~/assets/images/big-arrow.svg'

export default {
  name: 'DepoimentosSlider',
  components: {
    BigArrow
  },
  data() {
    return {
      slider: null
    }
  },
  mounted() {
    this.slider = new Glide('.glide', {
      autoplay: 4000,
      perView: 1
    })
    this.slider.mount()
  }
}
</script>

<style lang="scss" scoped>
.title-2 {
  @apply .text-center;
}

.controls {
  @apply .absolute .bottom-0 .font-bold .cursor-pointer .text-guten-bege .text-3xl .font-serif;

  @media (max-width: 767px) {
  }
}

.inverter {
  transform: rotate(180deg);
}
</style>
