<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
<footer class="footer border-top bg-danger text-light mt-auto">
            <div class="container">
                <div class="row py-3">
                    <div class="col-12 col-md-4 text-center">
                        & copy; 2020 - Quitanda Online Ltda ME<br>
                        Rua Virtual Inexistente , 171 , Compulândia/PC<br>
                        CNPJ 99.999.999/0001-99
                    </div>
                    <div class="col-12 col-md-4 text-center">
                        <RouterLink class="text-light" to="/politica-privacidade"">
                            Politica de Privacidade
                        </RouterLink><br>
                        <RouterLink class="text-light" to="/termos-de-uso">
                            Termos de Uso
                        </RouterLink><br>
                        <RouterLink class="text-light" to="/quem-somos">
                            Quem Somos
                        </RouterLink><br>
                        <RouterLink class="text-light" to="/trocas-devolucoes">
                            Trocas e Devoluções
                        </RouterLink><br>
                    </div>
                    <div class="col-12 col-md-4 text-center">
                        <RouterLink to="/contato" class="text-light">
                            Contato pelo Site
                        </RouterLink><br>
                        <a class="text-light ">
                            email@dominio.com
                        </a><br>
                        <a class="text-light ">
                            (28) 99999-0000
                        </a><br>
                    </div>
                </div>
            </div>
        </footer>
</template>