<template>
  <section id="depoimentos-section" class="bg-guten-gelo py-32 relative">
    <div class="container">
      <div class="flex justify-center mb-16">
        <h2 class="title-1">
          Depoimentos
        </h2>
      </div>
      <div class="flex flex-wrap justify-center md:justify-evenly">
        <Depoimento link="https://google.com">
          <template #imagem>
            <g-image src="~/assets/images/flavio-bolsonaro.jpg"></g-image>
          </template>
          <template #nome>
            Flávio Bolsonaro
          </template>
          <template #descricao>
            Lorem ipsum dolor sit amet consectetur.
          </template>
        </Depoimento>
        <Depoimento>
          <template #imagem>
            <g-image src="~/assets/images/flavio-bolsonaro.jpg"></g-image>
          </template>
          <template #nome>
            Flávio Bolsonaro
          </template>
          <template #descricao>
            Lorem ipsum dolor sit amet consectetur.
          </template>
        </Depoimento>
        <Depoimento>
          <template #imagem>
            <g-image src="~/assets/images/flavio-bolsonaro.jpg"></g-image>
          </template>
          <template #nome>
            Flávio Bolsonaro
          </template>
          <template #descricao>
            Lorem ipsum dolor sit amet consectetur.
          </template>
        </Depoimento>
      </div>
    </div>
  </section>
</template>

<script>
import Depoimento from '~/components/shared/Depoimento'
export default {
  name: 'Depoimentos',
  components: {
    Depoimento
  }
}
</script>

<style lang="scss">
#depoimentos-section {
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    height: 5px;
    width: 80%;

    @apply .bg-guten-bege;
  }
}
</style>
