<template>
  <div class="layout">
    <DefaultHeader v-if="!removeHeader" />
    <slot />
    <ReducedFooter v-if="reducedFooter" />
    <DefaultFooter v-else />
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
import ReducedFooter from '~/components/ReducedFooter'
import DefaultFooter from '~/components/DefaultFooter'

export default {
  props: {
    removeHeader: Boolean,
    reducedFooter: Boolean
  },
  components: {
    DefaultHeader,
    DefaultFooter,
    ReducedFooter
  }
}
</script>

<style src="~/main.css" />
