<template>
  <Henlo msg="Henlo from the client." />
</template>

<script>
import Henlo from "./components/Henlo.vue";

export default {
  name: "App",
  components: {
    Henlo
  }
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
