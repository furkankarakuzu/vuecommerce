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
    dataBsTarget: {
      type: String,
      default: "",
    },
  },
  methods: {
    clickCheck() {
      this.$emit("click");
    },
  },
};
</script>

<template>
  <button
    class="btn"
    :data-bs-target="dataBsTarget"
    data-bs-toggle="modal"
    @click="clickCheck"
    :class="[
      outline ? `btn-outline-${outline}` : '',
      fontSize ? `fs-${fontSize}` : '',
    ]"
  >
    <slot />
  </button>
</template>
