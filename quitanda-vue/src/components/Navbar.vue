<script setup>
import { RouterLink } from 'vue-router';
</script>
<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-danger border-bottom shadow-sm mb-3">
            <div class="container"> <!--Classe container define que a largura horizoltal não ocupe a tela toda-->
               <RouterLink to="/" style="text-decoration: none;" class="text-white me-3 fw-bolder">Quitanda Online</RouterLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target=".navbar-collapse">
                    <span class="navbar-toggler-icon"></span>
                </button> <!--Botão mostrado na navbar quando a largura está abaixo de lg (abaixo de 992px)-->

                <div class="collapse navbar-collapse">
                    <ul class="navbar-nav flex-grow-1 align-items-center gap-3">
                        <!--Com o flex-grow os itens (cadastro , login, carrinho ) vão se alinhar no final da navbar-->
                        <li class="nav-item">
                           <RouterLink to="/" class="text-white fw-bolder" style="text-decoration: none;">Principal</RouterLink>
                        </li>
                        <li class="nav-item">
                           <RouterLink to="/contato" class="text-white fw-bolder" style="text-decoration: none;">Contato</RouterLink>
                        </li>
                    </ul>
                    <div class="align-self-end">
                        <ul class="navbar-nav gap-3 align-items-center">
                            <li class="nav-item">
                                <RouterLink to="/tela-cadastro" class="text-light fw-bolder" style="text-decoration: none;"> Quero me Cadastrar</RouterLink>
                            </li>
                            <li class="nav-item">
                               <RouterLink to="/login" class="text-white fw-bolder" style="text-decoration: none;">Entrar</RouterLink>
                            </li>
                            <li class="nav-item">
                                <span class="badge rounded-pill bg-light text-danger position-absolute ms-3"
                                    title="5 produto(s) no carrinho"><small>5</small></span>
                                <a href="/carrinho.html" class="nav-link text-white"><i class="bi-cart"
                                        style="font: size 24px "></i></a>
                                <!--ícone de carrinho-->
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </nav>
</template>