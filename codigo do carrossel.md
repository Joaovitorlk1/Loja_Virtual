<script setup>
import { ref, onMounted } from 'vue'
// 1. Estado reativo: começa vazio e em carregamento
const slides = ref([])
const carregando = ref(true)
// 2. Função que simula uma resposta de API
function simularChamadaApi() {
  return new Promise((resolve) => {
    setTimeout(() => {
      // Dados que a "API" devolveu após 1 segundo
      resolve([
        { id: 1, imagem: '/img/slides/slide01.jpg', alt: 'Ofertas da Quitanda 1' },
        { id: 2, imagem: '/img/slides/slide01.jpg', alt: 'Ofertas da Quitanda 2' },
        { id: 3, imagem: '/img/slides/slide01.jpg', alt: 'Ofertas da Quitanda 3' }
      ])
    }, 1000) // 1000ms = 1 segundo de delay de rede
  })
}
// 3. Ao montar o componente, chama a "API"
onMounted(async () => {
  slides.value = await simularChamadaApi()
  carregando.value = false
})
</script>
<template>
  <!-- Enquanto a "API" não responde, mostra um spinner bonito do Bootstrap -->
  <div v-if="carregando" class="text-center py-5">
    <div class="spinner-border text-danger" role="status">
      <span class="visually-hidden">Carregando banners...</span>
    </div>
  </div>
  <!-- Quando os dados chegam, o carrossel é desenhado -->
  <div v-else id="carouselPrincipal" class="carousel slide" data-bs-ride="carousel">
    <!-- Indicadores -->
    <div class="carousel-indicators">
      <button
        v-for="(slide, index) in slides"
        :key="'indicator-' + slide.id"
        type="button"
        data-bs-target="#carouselPrincipal"
        :data-bs-slide-to="index"
        :class="{ active: index === 0 }"
      ></button>
    </div>
    <!-- Slides -->
    <div class="carousel-inner">
      <div
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <img :src="slide.imagem" class="d-block w-100" :alt="slide.alt" />
      </div>
    </div>
    <!-- Controles -->
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselPrincipal" data-bs-slide="prev">
      <span class="carousel-control-prev-icon"></span>
      <span class="visually-hidden">Anterior</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselPrincipal" data-bs-slide="next">
      <span class="carousel-control-next-icon"></span>
      <span class="visually-hidden">Próximo</span>
    </button>
  </div>
</template>