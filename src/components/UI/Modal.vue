<script>
export default {
  props: {
    target: {
      type: String,
      default: "",
    },
  },
  methods: {
    removeProduct(product) {
      this.$store.dispatch("removeProduct", product);
    },
  },
  computed: {
    totalPrice() {
      return this.$store.getters.getTotalPrice;
    },
    products() {
      return this.$store.state.cart;
    },
    seeProduct() {
      return this.$store.state.product;
    },
  },
};
</script>

<template>
  <div
    class="modal fade"
    :id="target"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ target == "cart" ? "Sepet" : "Ürün" }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body" v-if="target == 'cart'">
          <ul class="list-group">
            <li
              class="list-group-item d-flex justify-content-between align-items-center"
              v-for="(product, index) in products"
              :key="index"
            >
              {{ product.title }}
              <div>
                <span class="badge bg-primary rounded-pill">
                  {{ product.price }} $
                </span>
                <i
                  class="far fa-times-circle ms-2"
                  @click="removeProduct(product)"
                  style="cursor:pointer"
                ></i>
              </div>
            </li>
          </ul>
          <span class="float-end mt-2 p-2 text-white bg-primary rounded-pill"
            >Toplam : {{ totalPrice }} $</span
          >
        </div>
        <div class="modal-body" v-else>
          <img
            :src="seeProduct.src"
            class="card-img-top"
            width="200"
            height="200"
            :alt="seeProduct.title"
          />
          <p v-for="(text, index) in seeProduct.text.split(',')" :key="index">
            {{ text }}
          </p>
          <p>Fiyat : {{ seeProduct.price }} $</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Kapat
          </button>
          <button type="button" v-if="target == 'cart'" class="btn btn-primary">
            Ödeme Yap!
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
