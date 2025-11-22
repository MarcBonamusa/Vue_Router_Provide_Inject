<script setup>

import { ref, watch } from "vue";
import { useRoute } from "vue-router";

const receptes = ref([
  { id: 1, name: 'Paella Valenciana', desc: 'Plat d’arròs tradicional, sovint amb pollastre, conill i verdures, de València.', ingredients: ['Arròs', 'Pollastre i Conill', 'Fesols tendres', 'Tomàquet triturat' ], pasos: ['Sofregir carn i verdures', 'Afegir aigua i safrà; bullir', 'Incorporar l’arròs', 'Coure 20 minuts i deixar reposar'], imatge: "https://media.istockphoto.com/id/1341711088/es/foto/receta-de-arroz-de-paella-de-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=JFm-PGsbm7zB00dO8MbqQ7dBl1vrlFeZ-h76wE6Mq9A=" },
  { id: 2, name: 'Tortilla de Patatas', desc: 'Truita espanyola, feta amb ous, patates i sovint ceba. Un clàssic imprescindible.', ingredients: ['Patates', 'Ous', 'Ceba'], pasos: ['Tallar patates/ceba', 'Escórrer i barrejar amb ous batuts', 'Quallar la truita girant-la'], imatge: "https://jetextramar.com/wp-content/uploads/2020/07/page3_image4.jpg" },
  { id: 3, name: 'Gazpacho Andaluz', desc: 'Sopa freda de tomàquet i verdures crues, típica d’Andalusia, ideal per a l’estiu.', ingredients: ['Tomàquets', 'Pebrot verd', 'Cogombre', 'All', 'Vinagre', 'Pa dur'], pasos: ['Triturar totes les verdures amb líquids i sal', 'Refredar i servir molt fred'], imatge: "https://img.freepik.com/foto-gratis/sopa-gazpacho-espanol-tradicional-recipiente-aislado-sobre-fondo-blanco_123827-25393.jpg" }
]);

const route = useRoute();

const recepta = ref(null)

const carregarRecepta = (id) => {
    const newID = parseInt(id)
    recepta.value = receptes.value.find(f => f.id === newID) || null
}

carregarRecepta(route.params.id)

watch(
    () => route.params.id,
    (newID) => carregarRecepta(newID)
)

</script>

<template>
  <div v-if="recepta" class="targeta-detall">
      <div class="contingut-detall">
          <div class="contenidor-imatge-detall">
                <img :src="recepta.imatge">
          </div>

          <div class="info-recepta">
                <h1 class="titol-recepta">{{ recepta.name }}</h1>
                <p class="descripcio-recepta">{{ recepta.desc }}</p>
                
                <h2 class="subtitol-llista">Ingredients:</h2>
                <ul class="llista-ingredients">
                <li v-for="ingredient in recepta.ingredients" :key="ingredient">
                    {{ ingredient }}
                </li>
                </ul>

                <h2 class="subtitol-llista">Pas a pas:</h2>
                <ul class="llista-pasos">
                <li v-for="pas in recepta.pasos" :key="pas">
                    {{ pas }}
                </li>
                </ul>
          </div>
      </div>
  </div>  
</template>

<style scoped>
.targeta-detall {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  max-width: 900px;
  margin: 40px auto;
  padding: 20px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.contingut-detall {
  display: flex;
  gap: 30px;
  align-items: flex-start;
}

.contenidor-imatge-detall {
  flex-shrink: 0;
  width: 350px;
  height: 350px;
  border-radius: 8px;
  overflow: hidden;
}

.contenidor-imatge-detall img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info-recepta {
  flex-grow: 1;
  padding-top: 5px;
}

.titol-recepta {
  font-size: 32px;
  font-weight: 600;
  color: #333;
  margin-bottom: 5px;
}

.descripcio-recepta {
  font-size: 16px;
  color: #666;
  margin-bottom: 25px;
}

.subtitol-llista {
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-top: 20px;
  margin-bottom: 10px;
}

.llista-ingredients, .llista-pasos {
  list-style: none;
  padding-left: 0;
}

.llista-ingredients li::before, .llista-pasos li::before {
  content: '•';
  color: #e91e66;
  font-weight: bold;
  display: inline-block;
  width: 1em;
  margin-left: -1em;
}

.llista-ingredients li, .llista-pasos li {
  margin-bottom: 8px;
  color: #444;
}
</style>