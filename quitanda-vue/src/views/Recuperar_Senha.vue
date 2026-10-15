<script setup>

</script>

<template>
    <main class="flex-fill">
        <!--flex-fill , serve para fazer um elemento crescer e ocupar todo espaço disponível do container-flex-->
        <div class="container">
            <div class="row justify-content-center ">
                <form class="col-sm-10 col-md-8 col-lg-6">
                    <h1 class="text-center">Recuperar senha</h1>

                    <div class="form-floating mb-3">
                        <input type="email" name="" id="txtemail" class="form-control">
                        <label for="txtemail">E-mail</label>
                    </div>
                    <div class="text-center">
                        <button class="btn btn-lg btn-outline-danger" type="button">Recuperar
                            Senha</button>
                    </div>
                    <p class="mt-3 text-center">
                        Ainda não está cadastrado? 
                        <RouterLink to="/tela-cadastro">
                            <b>Clique aqui para se Cadastrar</b>
                        </RouterLink>
                    </p>
                </form>
            </div>
        </div>
    </main>
</template>