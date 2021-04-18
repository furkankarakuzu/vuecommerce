<script>
import Navbar from "./components/layouts/Navbar";
import Home from "./components/pages/Home/Index";
export default {
  name: "App",
  components: {
    Navbar,
    Home,
  },
};
</script>

<template>
  <div id="app">
    <Navbar />
    <Home />
  </div>
</template>
