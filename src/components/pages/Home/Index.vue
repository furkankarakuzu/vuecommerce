<script>
import Carousel from "./Carousel";

import products from "@/data/products.json";
export default {
  components: {
    Carousel,
  },
  data() {
    return {
      products,
    };
  },
};
</script>

<template>
  <div class="container-fluid">
    <Carousel />
    <div class="container">
      <div class="row ">
        <div
          class="col-sm-4 my-5"
          v-for="product in products"
          :key="product.id"
        >
          <ProductCard :product="product" />
        </div>
      </div>
    </div>
  </div>
</template>
