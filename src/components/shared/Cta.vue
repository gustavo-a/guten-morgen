<template>
  <div class="inline-flex">
    <a
      class="border border-guten-bege text-white rounded font-serif italic"
      :class="{
        'bg-guten-bege': filled,
        'p-4': size === 'md',
        'py-4 px-8': size === 'lg'
      }"
      :href="link"
    >
      <slot />
    </a>
  </div>
</template>

<script>
export default {
  name: 'CTA',
  props: {
    link: String,
    action: Function,
    filled: Boolean,
    size: String
  }
}
</script>

<style lang="scss" scoped>
a,
button {
  @apply .leading-none;
  * {
    @apply .inline;
  }
}
</style>
