<template>
  <div class="layout">
    <DefaultHeader />
    <slot />
    <DefaultFooter />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import DefaultHeader from '~/components/DefaultHeader'
import DefaultFooter from '~/components/DefaultFooter'

export default {
  components: {
    DefaultHeader,
    DefaultFooter
  }
}
</script>

<style src="~/main.css" />
