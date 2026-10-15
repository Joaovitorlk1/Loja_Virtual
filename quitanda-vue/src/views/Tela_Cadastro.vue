<script setup>

</script>

<template>
    <main class="flex-fill">
            <!--flex-fill , serve para fazer um elemento crescer e ocupar todo espaço disponível do container-flex-->
            <div class="container">
                <div class="row justify-content-center ">
                    <form class="col-sm-12 col-md-8 col-lg-6">
                        <h1 class="text-center">Cadastrar Usuário</h1>

                        <div class="form-floating mb-3">
                            <input type="email" name="" id="txtnome" class="form-control">
                            <label for="txtnome">Nome Completo</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="date" name="" id="txtdata" class="form-control">
                            <label for="txtdata">Data de Nascimento</label>
                        </div>
                        <div class="form-floating mb-3">
                            <select name="selectSexo" id="selectSexo" class="form-control">
                                <option value="masculino">Masculino</option>
                                <option value="feminino">Feminino</option>
                            </select>
                            <label for="selectSexo">Sexo</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="email" name="" id="txtemail" class="form-control">
                            <label for="txtemail">E-mail</label>
                        </div>
                        
                        <div class="form-floating mb-3">
                            <input type="password" name="txtSenha" id="txtSenha" class="form-control">
                            <label for="txtSenha">Senha</label>
                        </div>
                        <div class="form-floating mb-3">
                            <input type="password" name="confirmSenha" id="confirmSenha" class="form-control">
                            <label for="confirmSenha">Confirmar Senha</label>
                        </div>
                        <div class="text-center">
                            <button class="w-auto btn btn-lg btn-outline-danger" type="button">Entrar</button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
</template>