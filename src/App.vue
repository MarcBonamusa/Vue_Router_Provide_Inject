<script setup></script>

<template>

  <header class="capçalera">
    <div class="logo">FoodExplorer</div>
    
    <nav class="navegacio">
      <RouterLink to="/" class="enllaç-nav" active-class="actiu">Inici</RouterLink>
      <RouterLink to="/receptes" class="enllaç-nav" active-class="actiu">Receptes</RouterLink>
      <RouterLink to="/provide" class="enllaç-nav" active-class="actiu">Provide & Inject</RouterLink>
    </nav>
  </header>
  
  <RouterView/>

</template>

<style scoped>

.capçalera {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 50px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
  color: #333;
}

.logo {
  font-size: 24px;
  font-weight: 500;
  color: #4a4a4a;
}

.navegacio {
  display: flex;
  gap: 20px;
}

.navegacio .enllaç-nav {
  text-decoration: none;
  color: #777;
  font-size: 16px;
  transition: color 0.2s;
  padding: 5px 0;
}

.navegacio .enllaç-nav:hover {
  color: #333;
}

.navegacio .actiu {
  color: #e6881c;
  font-weight: 500;
  border-bottom: 2px solid #e6881c;
}

.separador {
  border: 0;
  border-top: 1px solid #f0f0f0;
  margin: 0;
}

</style>