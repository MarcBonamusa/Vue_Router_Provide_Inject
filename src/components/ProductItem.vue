<script setup>

import { inject } from 'vue';

const props = defineProps({
    product: { type: Object, required: true }
});

const afegirCarret = inject('afegirCarret');

const afegir = () => {
    afegirCarret(props.product);
}

</script>

<template>
  <div class="productes">
    <span>{{ product.name }} - {{ product.price }}€</span>
    <button @click="afegir" class="boto-afegir">Afegir al carret</button>
  </div>
</template>

<style scoped>

.productes {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border: 1px solid #eee;
  margin-bottom: 15px;
}

.boto-afegir {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 4px;
}

</style>