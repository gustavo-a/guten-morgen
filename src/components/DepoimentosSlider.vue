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
                    “Devo muito do meu conhecimento e da minha carreira na
                    política ao que aprendi com o Flavio Morgenstern. Fiz a
                    minha inscrição no Guten Morgen Go e estou ansioso para
                    iniciar o programa.”
                  </p>
                  <div class="text-center mt-8">
                    <div class="font-bold">Eduardo Bolsonaro</div>
                    <div>Deputado Federal (Aliança-SP).</div>
                  </div>
                </li>
                <li class="glide__slide">
                  <p class="title-2">
                    “O Flavio está sendo um dos caras mais importantes para o
                    processo de elevação do debate político que vem ocorrendo no
                    Brasil. Vale a pena aprender com ele. Estou dentro!”
                  </p>
                  <div class="text-center mt-8">
                    <div class="font-bold">Bene Barbosa</div>
                    <div>
                      Analista de segurança, articulista, palestrante, IAT e
                      autor do best-seller “Mentiram Para Mim Sobre o
                      Desarmamento
                    </div>
                  </div>
                </li>
                <li class="glide__slide">
                  <p class="title-2">
                    “Sensacional essa ideia de fazer um curso sobre a Primeira
                    Guerra! Meu xará é muito bom! Já vi uma prévia do conteúdo e
                    posso dar um pequeno spoiler: vai ser épico!”
                  </p>
                  <div class="text-center mt-8">
                    <div class="font-bold">Flávio Gordon</div>
                    <div>
                      Escritor, autor do best-seller “A corrupção da
                      Inteligência”.
                    </div>
                  </div>
                </li>
                <li class="glide__slide">
                  <p class="title-2">
                    “Só digo uma coisa: esse é o projeto da vida do Flavio. Não
                    percam por nada!”
                  </p>
                  <div class="text-center mt-8">
                    <div class="font-bold">Filipe Martins</div>
                    <div>
                      Assessor Especial da Presidência da República para
                      Assuntos Internacionais
                    </div>
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
      autoplay: 6000,
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
