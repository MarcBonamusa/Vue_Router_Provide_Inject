<script setup>

import { ref, computed, provide } from 'vue';
import CategoryList from './views/CategoryList.vue';
import Cart from './views/Cart.vue';

const products = ref([
  { id: 1, name: 'Auriculars Wireless', price: 50 },
  { id: 2, name: 'Smartwatch', price: 120 },
  { id: 3, name: 'Teclat Mecanic', price: 80 },
  { id: 4, name: 'Altaveu Bluetooth', price: 60 }
]);

const cart = ref([]);

const afegirCarret = (product) => {
  cart.value.push(product);
  alert(`${product.name} afegit al carret!`);
};

const total = computed(() => {
  return cart.value.reduce((sum, item) => sum + item.price, 0);
});

const esborrarCarret = () => {
    cart.value = [];
};

provide('cart', cart);
provide('afegirCarret', afegirCarret);
provide('total', total);
provide('esborrarCarret', esborrarCarret);

</script>

<template>
  <header>
    <h1>Botiga de Gadgets</h1>
  </header>
  <main class="container">
    <div class="productes">
      <h2>Productes</h2>
      <CategoryList :products="products" />
    </div>
    <div class="carret">
      <h2>Carret</h2>
      <Cart />
    </div>
  </main>
</template>

<style scoped>

#app {
  font-family: Arial, sans-serif;
  padding: 20px;
}

.container {
  display: flex;
  gap: 30px;
}

.productes {
  flex: 2;
}

.carret {
  flex: 1;
  border: 1px solid #ccc;
  padding: 15px;
  background-color: #f9f9f9;
  border-radius: 10px;
}

h1 {
    text-align: center;
}

</style>