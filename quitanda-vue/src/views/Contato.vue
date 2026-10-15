<script setup>

</script>

<template>
    <div class="d-flex flex-column wrapper">
        <!--wrapper é um elemento usado para envolver outros elementos , para facilitar o controle do layout-->
        <main class="flex-fill">
            <!--flex-fill , serve para fazer um elemento crescer e ocupar todo espaço disponível do container-flex-->
            <div class="container">
                <div class="row justify-content-center ">
                    <form class="col-sm-12 col-md-8 col-lg-6">
                        <h1>Identifique-se, Por favor</h1>

                        <div class="form-floating mb-3">
                            <input type="text" name="" id="txtNomeCompleto" class="form-control">
                            <label for="txtNomeCompleto">Nome Completo</label>
                        </div>

                        <div class="form-floating mb-3">
                            <input type="email" name="" id="txtEmail" class="form-control">
                            <label for="txtEmail">E-mail</label>
                        </div>

                        <div class="form-floating mb-3">
                            <textarea id="txtMensagem" class="form-control" style="height: 150px;"></textarea>
                            <label for="txtMensagem">Mensagem</label>
                        </div>
                        <div class="text-center">
                            <button type="button" class="btn btn-danger">Enviar Mensagem</button>
                        </div>
                        <p class="mt-3">Faremos nosso melhor para responder em até 2 dias úteis.</p>
                        <p>Atensiosamente,</p>
                        <p>Central de Relacionamento Quitanda Online</p>
                    </form>
                </div>
            </div>
        </main>
    </div>
</template>