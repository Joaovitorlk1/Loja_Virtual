<script setup> 

</script>
<template>
        <main class="flex-fill">
            <!--flex-fill , serve para fazer um elemento crescer e ocupar todo espaço disponível do container-flex-->
            <div class="container">
                <div class="row justify-content-center ">
                    <form class="col-sm-12 col-md-8 col-lg-6">
                        <h1>Identifique-se, Por favor</h1>

                        <div class="form-floating mb-3">
                            <input type="email" name="" id="txtemail" class="form-control">
                            <label for="txtemail">E-mail</label>
                        </div>
                        
                        <div class="form-floating mb-3">
                            <input type="password" name="" id="txtSenha" class="form-control">
                            <label for="txtSenha">Senha</label>
                        </div>

                        <div class="form-check mb-3">
                            <input type="checkbox" class="form-check-input" id="checkinput">
                            <label class="form-check-label" for="txtcheck">Lembrar de mim</label>
                        </div>

                        <div class="text-center">
                            <button class="w-auto btn btn-lg btn-outline-danger" type="button">Entrar</button>
                        </div>
                        <p class="mt-3">
                            Ainda não está cadastrado? <RouterLink to="/tela-cadastro"><b>clique aqui para se Cadastrar</b></RouterLink>
                        </p>

                        <p class="mt-3">
                            Esqueceu sua senha? <RouterLink to="/recuperar-senha"><b>clique aqui para recupera-lá</b></RouterLink>
                        </p>
                    </form>
                </div>
            </div>
        </main>
</template>