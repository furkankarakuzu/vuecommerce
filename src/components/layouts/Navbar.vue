<script>
import Github from "../social/Github";
import Linkedin from "../social/Linkedin";
import Twitter from "../social/Twitter";
import Youtube from "../social/Youtube";
export default {
  components: {
    Github,
    Linkedin,
    Twitter,
    Youtube,
  },
  data() {
    return {
      toggle: false,
      navItems: [
        { component: Github, to: "https://github.com/furkankarakuzu" },
        { component: Linkedin, to: "https://linkedin.com/in/furkankarakuzu" },
        { component: Twitter, to: "https://twitter.com/furkannjs" },
        {
          component: Youtube,
          to: "https://www.youtube.com/c/uc0stwpfmieqpvfwjqwri0qg",
        },
      ],
    };
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-md">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">
        <img
          src="../../assets/logo.png"
          alt="vue logo"
          width="30"
          height="30"
        />
        <span>ueCommerce</span>
      </a>
      <button
        class="navbar-toggler"
        @click="toggle = !toggle"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i v-if="!toggle" class="fas fa-toggle-off fs-1"></i>
        <i v-else class="fas fa-toggle-on fs-1"></i>
      </button>
      <div
        class="collapse navbar-collapse mt-3 mt-md-0"
        id="navbarSupportedContent"
      >
        <form
          class="d-flex ms-md-4 mb-2 mb-md-0  border border-secondary rounded"
        >
          <input
            class="form-control me-2 border-0 bg-transparent"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn ps-0 m-0" type="button">
            <i class="fas fa-search"></i>
          </button>
        </form>
        <ul class="navbar-nav d-inline d-md-flex mb-2 mx-auto mb-md-0">
          <li
            class="nav-item d-inline mx-1"
            v-for="(item, index) in navItems"
            :key="index"
          >
            <a class="nav-link d-inline" :href="item.to" target="_blank">
              <component :is="item.component" />
            </a>
          </li>
        </ul>
        <div class="float-end me-0 me-md-5">
          <button
            class="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#cart"
          >
            <i class="far fa-shopping-cart"></i> <b>2</b>
          </button>
        </div>
        <Modal target="cart" />
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar-toggler:focus {
  box-shadow: 0 0 0 0 !important;
}
.btn:focus {
  box-shadow: 0 0 0 0 !important;
}
.form-control:focus {
  box-shadow: 0 0 0 0 !important;
}
</style>
