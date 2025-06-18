<template>
  <div class="home-view">
    <PizzaForm />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import PizzaForm from '../components/PizzaForm.vue'
import Footer from '../components/Footer.vue';
</script>

<style scoped lang="scss">
.home-view {
  padding: $space-lg;
  background-color: $color-white;

  @media (max-width: 768px) {
    padding: $space-md;
  }
}
</style>
