<script>
import products from "@/data/products.json";
export default {
  data() {
    return {
      products,
    };
  },
};
</script>

<template>
  <div class="bg-light-pink mt-2 rounded-pill">
    <div
      id="carouselExampleCaptions"
      class="carousel slide p-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          class="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div class="carousel-inner">
        <div
          class="carousel-item"
          :class="product.id == 1 ? 'active' : ''"
          v-for="product in products.slice(0, 3)"
          :key="product.id"
        >
          <div class="row">
            <div class="col-md-6 my-2">
              <img
                :src="product.src"
                class="d-block w-75 mx-auto"
                width="200"
                height="200"
                :alt="product.title"
              />
            </div>
            <div class="col-md-6 my-2">
              <h5>{{ product.title }}</h5>
              <p>
                {{ product.text }}
              </p>
              <Button outline="success" fontSize="5">See Details</Button>
              <Button outline="primary" fontSize="5" class="mx-2"
                >Add to Cart</Button
              >
            </div>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
</template>

<style scoped>
.carousel-control-next,
.carousel-control-prev {
  width: 6% !important;
}
.bg-light-pink {
  background-color: rgb(238, 207, 142);
}
.rounded-pill {
  border-radius: 2rem !important;
}
</style>
