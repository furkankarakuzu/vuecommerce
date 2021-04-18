<script>
export default {
  props: {
    product: {
      type: [Array, Object],
      default: () => [],
    },
  },
};
</script>

<template>
  <div class="card">
    <img
      :src="product.src"
      class="card-img-top"
      width="200"
      height="200"
      :alt="product.title"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.title }}</h5>
      <p class="card-text">
        {{ product.text }}
      </p>
      <span class="float-end text-muted fs-5">{{ product.price }} $</span>
    </div>
    <div class="card-footer">
      <div class="row">
        <div class="col-sm-6">
          <Button outline="success">See Details</Button>
        </div>
        <div class="col-sm-6">
          <Button outline="primary">Add to Cart</Button>
        </div>
      </div>
    </div>
  </div>
</template>
