<template>
  <div class="inline-flex">
    <a
      class="border-guten-bege text-white rounded font-serif italic flex"
      v-if="link"
      :class="{
        'bg-guten-bege': filled === 'bege',
        'bg-guten-cinza-1': filled === 'cinza-1',
        'p-4': size === 'md',
        'py-4 px-8': size === 'lg',
        border: border
      }"
      :href="link"
    >
      <slot />
    </a>

    <div
      class="border-guten-bege text-white rounded font-serif italic cursor-pointer"
      v-else
      :class="{
        'bg-guten-bege': filled === 'bege',
        'bg-guten-cinza-1': filled === 'cinza-1',
        'p-4': size === 'md',
        'py-4 px-8': size === 'lg',
        border: border
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CTA',
  props: {
    link: String,
    filled: String,
    size: String,
    border: Boolean
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
