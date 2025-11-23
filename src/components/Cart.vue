<script setup>

import { inject } from 'vue';

const cart = inject('cart');
const total = inject('total');
const esborrarCarret = inject('esborrarCarret');

</script>

<template>
  <div class="carret">
    <ul class="llista">
      <li v-for="(item, index) in cart" :key="index">
        {{ item.name }} - {{ item.price }}€
      </li>
    </ul>

    <div class="resuem-carret">
        <b><p class="total">Total: {{ total }}€</p></b>
        <button @click="esborrarCarret">🗑️ Buida carret</button>
    </div>
  </div>
</template>

<style scoped>

.llista {
  list-style-type: none;
  padding: 0;
  margin-bottom: 15px;
}

.llista li {
  padding: 5px 0;
  border-bottom: 1px dotted #eee;
}

.resuem-carret {
    border-top: 2px solid #ccc;
    padding-top: 10px;
}

.total {
    font-size: 1.2em;
    font-weight: bold;
    margin: 10px 0;
}

</style>