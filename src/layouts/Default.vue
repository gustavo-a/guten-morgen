<template>
  <div class="layout">
    <DefaultHeader v-if="!removeHeader" />
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
  props: {
    removeHeader: Boolean
  },
  components: {
    DefaultHeader,
    DefaultFooter
  }
}
</script>

<style src="~/main.css" />
