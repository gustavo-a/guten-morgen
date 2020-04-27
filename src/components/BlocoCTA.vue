<template>
  <section class="py-16 bg-cinza-branco">
    <div class="container">
      <div class="flex justify-center">
        <div
          class="w-11/12 md:w-5/6 flex flex-wrap px-4 sm:px-16 py-20 items-center justify-between cta-bg rounded-lg"
        >
          <div class="w-full md:w-1/2 mb-8 md:mb-0">
            <p class="text-white font-serif text-2xl">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              suscipit harum.
            </p>
          </div>
          <div
            class="w-full md:w-1/2 lg:w-1/3 flex justify-start md:justify-end lg:block"
          >
            <call-to-action
              filled="cinza-1"
              :link="$static.generalData.hotmartUrl"
              size="lg"
              class="shadow-2xl transform transition-transform duration-300 hover:scale-110"
            >
              <span class="pr-3">Inscreva-se</span> <RightArrow />
            </call-to-action>
          </div>
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
import CTA from '~/components/shared/Cta.vue'
import RightArrow from '~/assets/images/right-arrow.svg'

export default {
  name: 'BlocoCTA',
  components: {
    'call-to-action': CTA,
    RightArrow
  }
}
</script>

<style lang="scss" scoped>
.bg-cinza-branco {
  background: linear-gradient(#fff 50%, #fbf8f7 50%);
}

.cta-bg {
  background: url('../assets/images/Grit03-byGhostlyPixels.png'),
    linear-gradient(#b29965, #b29965);
  background-position: center, center;
  background-size: cover;
}
</style>
