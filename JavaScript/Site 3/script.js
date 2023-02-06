function contar() {
var ini = document.getElementById('tinicio')
var fim = document.getElementById('tfim')
var passo = document.getElementById('tpasso')

    if(ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('[ERRO] Faltam dados!')
    }
}