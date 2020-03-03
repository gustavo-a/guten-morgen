<template>
  <transition name="popup">
    <div
      class="popup"
      v-if="value"
      @click="$event.target === $event.currentTarget && close()"
    >
      <div class="popup__content">
        <div class="popup__close" @click="close">x</div>
        <slot></slot>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    value: {
      required: true
    }
  },
  methods: {
    close() {
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss" scoped>
.popup {
  @apply .fixed .z-50 .w-full .h-screen .top-0 .right-0 .flex .justify-center .items-center .opacity-100 .pointer-events-auto;
  background: rgba(0, 0, 0, 0.8);

  &__content {
    @apply .bg-white .p-8 .relative .rounded .transform .translate-y-0;
    width: 90%;
    max-width: 1200px;
  }

  &__close {
    @apply .absolute .top-0 .right-0 .mr-2 .text-guten-cinza-1 .font-bold .cursor-pointer;
  }
}

.popup-enter-active,
.popup-leave-active {
  transition: opacity 0.2s;
  .popup__content {
    transition: transform 0.3s;
  }
}
.popup-enter,
.popup-leave-to {
  opacity: 0;

  .popup__content {
    @apply .transform .-translate-y-4;
  }
}
</style>
