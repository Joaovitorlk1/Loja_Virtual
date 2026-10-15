<script setup>

</script>

<template>
<div class="d-flex flex-column wrapper">
        <!--wrapper é um elemento usado para envolver outros elementos , para facilitar o controle do layout-->
        <main class="flex-fill">
            <!--flex-fill , serve para fazer um elemento crescer e ocupar todo espaço disponível do container-flex-->
            <div class="container">
                <div class="row justify-content-center ">
                    <form class="col-sm-10 col-md-8 col-lg-6">
                        <h1 class="text-center">Cadastrar nova Senha</h1>
                        
                        <div class="form-floating mb-3">
                            <input type="email" name="" id="txtemail" class="form-control">
                            <label for="txtemail"> Nova Senha</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="password" name="" id="txtSenha" class="form-control">
                            <label for="txtSenha">Confirme Nova Senha</label>
                        </div>

                        <div class="text-center">
                            <button class="btn btn-lg btn-outline-danger " type="button">Cadastrar Nova Senha</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div> 
</template>