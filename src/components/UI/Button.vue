<script>
export default {
  props: {
    outline: {
      type: String,
      default: "",
    },
    fontSize: {
      type: String,
      default: "",
    },
  },
};
</script>

<template>
  <button
    class="btn"
    :class="[
      outline ? `btn-outline-${outline}` : '',
      fontSize ? `fs-${fontSize}` : '',
    ]"
  >
    <slot />
  </button>
</template>
