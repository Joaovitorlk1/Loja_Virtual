<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { Carousel } from 'bootstrap'
const slides = ref([])
const carregando = ref(true)

function chamarApi() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                { id: 1, imagem: '/img/slides/slide01.jpg', alt: 'Ofertas da Quitanda 1' },
                { id: 2, imagem: '/img/slides/img2.jpg', alt: 'Ofertas da Quitanda 2' },
                { id: 3, imagem: '/img/slides/img3.jpg', alt: 'Ofertas da Quitanda 3' }
            ])
        }, 1000)
    })
}
onMounted(async () => {
    slides.value = await chamarApi()
    carregando.value = false
    // Espera o Vue renderizar a div no DOM
    await nextTick()
    // Ativa o carrosel com rotação automática a cada 3 segundos
    const el = document.getElementById('carouselPrincipal')
    if (el) {
        new Carousel(el, {
            interval: 3000,
            ride: 'carousel'
        })
    }
})
</script>

<template>
    <div v-if="carregando" class="text-center py-5">
        <div class="spinner-border text-danger" role="status">
            <span class="visually-hidden">Carregando banners...</span>
        </div>
    </div>
    <div v-else id="carouselPrincipal" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
            <button v-for="(slide, index) in slides" :key="'indicador-' + slide.id" type="button" :data-bs-slide-to="index"
                data-bs-target="#carouselPrincipal" :class="{ active: index === 0 }">
            </button>
        </div>
        <div class="carousel-inner">
            <div v-for="(slide, index) in slides" :key="slide.id" class="carousel-item"
                :class="{ active: index === 0 }">
                <img :src="slide.imagem" class="d-block w-100" :alt="slide.alt">
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-slide="prev" data-bs-target="#carouselPrincipal">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-slide="next" data-bs-target="#carouselPrincipal">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</template>