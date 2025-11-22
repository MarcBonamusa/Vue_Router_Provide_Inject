<script setup>

import { ref } from "vue";
import { RouterLink } from "vue-router";

const receptes = ref([
  {id: 1, name: "Paella Valenciana", desc: "Plat d’arròs tradicional, sovint amb pollastre, conill i verdures, de València.", imatge: "https://media.istockphoto.com/id/1341711088/es/foto/receta-de-arroz-de-paella-de-espa%C3%B1a.jpg?s=612x612&w=0&k=20&c=JFm-PGsbm7zB00dO8MbqQ7dBl1vrlFeZ-h76wE6Mq9A="},
  {id: 2, name: "Tortilla de Patatas", desc: "Truita espanyola, feta amb ous, patates i sovint ceba. Un clàssic imprescindible.", imatge: "https://jetextramar.com/wp-content/uploads/2020/07/page3_image4.jpg" },
  {id: 3, name: "Gazpacho Andaluz", desc: "Sopa freda de tomàquet i verdures crues, típica d’Andalusia, ideal per a l’estiu.", imatge: "https://img.freepik.com/foto-gratis/sopa-gazpacho-espanol-tradicional-recipiente-aislado-sobre-fondo-blanco_123827-25393.jpg" }
]);

</script>

<template>
  <div class="llista-receptes-contenidor">
    <h1 class="titol-seccio">Receptes</h1>

    <div class="contenidor-targetes">
      <div v-for="recepta in receptes" :key="recepta.id" class="targeta-recepta">
        <div class="contenidor-imatge-targeta">
          <img :src="recepta.imatge" class="imatge-targeta"/>
        </div>

        <div class="contingut-targeta">
          <h2 class="nom-recepta">{{ recepta.name }}</h2>
          <p class="descripcio-recepta">{{ recepta.desc }}</p>
          <RouterLink :to="`/receptes/${recepta.id}`" class="boto-detall">Veure detall</RouterLink>
        </div>
      </div>
    </div>
  </div>
  <RouterView/>
</template>

<style scoped>
.llista-receptes-contenidor {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.titol-seccio {
  font-size: 32px;
  font-weight: 600;
  margin-bottom: 30px;
  color: #333;
  padding-left: 10px;
}

.contenidor-targetes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 30px;
}

.targeta-recepta {
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.targeta-recepta:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.contenidor-imatge-targeta {
  height: 200px;
  width: 100%;
  overflow: hidden;
}

.imatge-targeta {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.contingut-targeta {
  padding: 15px 20px 20px 20px;
}

.nom-recepta {
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-top: 5px;
  margin-bottom: 5px;
}

.descripcio-recepta {
  font-size: 14px;
  color: #666;
  margin-bottom: 20px;
}

.boto-detall {
  display: inline-block;
  background-color: #f7931e;
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 15px;
  border-radius: 6px;
  transition: background-color 0.2s ease;
}

.boto-detall:hover {
  background-color: #e6881c;
}
</style>    