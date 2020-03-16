<template>
  <footer class="py-12">
    <div class="container">
      <div class="flex flex-wrap justify-between">
        <div class="lg:w-1/2 xl:w-2/5">
          <g-image
            quality="100"
            width="360px"
            src="~/assets/images/logo.png"
          ></g-image>
          <p class="pl-8 text-guten-bege">
            © 2019 - Senso Incomum. Todos os direitos reservados. <br />
            Guten Morgen GO é uma realização de Farol Produções Artísticas Ltda.
            CNPJ: 06.227.644-0001/01.
          </p>
          <div class="flex justify-start pl-8 mt-8">
            <a
              href="https://www.instagram.com/senso.incomum/"
              target="_blank"
              class="pr-2"
              ><g-image
                quality="100"
                src="~/assets/images/Instagram.png"
              ></g-image
            ></a>
            <a href="https://twitter.com/sensoinc" target="_blank" class="pr-2"
              ><g-image
                quality="100"
                src="~/assets/images/Twitter.png"
              ></g-image
            ></a>
            <a
              href="https://business.facebook.com/sensoincomumorg/"
              target="_blank"
              class="pr-2"
              ><g-image
                quality="100"
                src="~/assets/images/Facebook.png"
              ></g-image
            ></a>
          </div>
        </div>
        <div class="mt-16 lg:mt-0 pl-8 lg:pl-8 xl:w-1/3">
          <div>
            <call-to-action link="#" size="lg" border class="pr-4">
              <g-link to="/duvidas/" class="text-guten-bege text-sm">
                Dúvidas
              </g-link>
            </call-to-action>
            <call-to-action link="#" size="lg" border>
              <span class="text-guten-bege text-sm">Login</span>
            </call-to-action>
          </div>
          <div class="text-guten-bege font-semibold py-8">
            <g-link to="/politica-de-cancelamento/" class="hover:underline">
              Política de cancelamento
            </g-link>
            &bull;
            <g-link to="/politica-de-privacidade/" class="hover:underline">
              Política de privacidade
            </g-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import CTA from '~/components/shared/Cta'
export default {
  name: 'DefaultFooter',
  components: {
    'call-to-action': CTA
  }
}
</script>

<style lang="scss">
footer {
  background: #333;
}
</style>
