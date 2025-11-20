<template>
  <div class="contenidor-principal">
    <main class="contingut-principal">
      <h1 class="títol-principal">Benvinguts a FoodExplorer</h1>
      <p class="subtítol">Descobreix, explora i consulta delicioses receptes.</p>
      <div class="contenidor-imatge">
        <img src="https://okdiario.com/img/viajes/2017/06/07/gastronomia.jpg" alt="Tortilla de Patatas" class="imatge-destacada">
      </div>
    </main>
  </div>
</template>

<style scoped>
.contingut-principal {
  text-align: center;
  padding: 60px 20px;
  max-width: 800px;
  margin: 0 auto;
}

.títol-principal {
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 15px;
  color: #333;
}

.subtítol {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
}

.contenidor-imatge {
  margin-top: 20px;
  max-width: 60%; 
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.imatge-destacada {
  width: 100%; 
  height: auto;
  display: block;
}
</style>