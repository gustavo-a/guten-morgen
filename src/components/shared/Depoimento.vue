<template>
  <div
    class="depoimento bg-guten-cinza-1 cursor-pointer overflow-hidden relative flex rounded-lg w-11/12 sm:w-2/3 md:w-3/12 lg:w-1/4 xl:w-1/5  mb-8 md:m-0"
    @click="abrirPopup"
  >
    <slot name="imagem" />
    <div class="absolute top-0 bottom-0 table m-auto w-full z-10">
      <PlayButton class="play" />
    </div>
    <div
      class="absolute p-4 bottom-0 h-full w-full flex flex-col justify-end depoimento__content"
    >
      <div class="font-serif text-xl font-bold text-guten-bege italic">
        <slot name="nome" />
      </div>
      <div class="text-white text-sm">
        <slot name="descricao" />
      </div>
    </div>
  </div>
</template>

<script>
import PlayButton from '~/assets/images/play.svg'

export default {
  name: 'Depoimento',
  components: {
    PlayButton
  },
  props: {
    link: String
  },
  methods: {
    abrirPopup() {
      alert(this.link)
    }
  }
}
</script>

<style lang="scss" scoped>
.depoimento {
  height: 300px;

  @media (max-width: 767px) {
    height: 400px;
  }

  &__content {
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.7) 80%
    );
  }
}
img {
  @apply .object-cover .w-full .h-full;
}

.play {
  margin: auto;
  transform: scale(0.6);
}
</style>
