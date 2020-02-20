<template>
  <header class="bg-black">
    <div class="container">
      <div class="flex justify-between pt-4">
        <div class="px-4" id="logo-header">
          <g-image
            quality="100"
            height="60"
            src="~/assets/images/logo.png"
            fit="inside"
            alt="Guten Morgen GO"
          />
        </div>
        <div class="px-4">
          <call-to-action
            filled
            link="https://google.com"
            size="md"
            class="mx-2"
          >
            Inscreva-se
          </call-to-action>
          <call-to-action link="https://google.com" size="md" class="mx-2">
            <User /> <span class="pl-3">Login</span>
          </call-to-action>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import CTA from '~/components/shared/Cta'
import User from '~/assets/images/user.svg'

export default {
  name: 'DefaultHeader',
  components: {
    'call-to-action': CTA,
    User
  }
}
</script>

<style></style>
