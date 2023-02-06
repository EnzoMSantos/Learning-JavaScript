function contar() {
var ini = document.getElementById('tinicio')
var fim = document.getElementById('tfim')
var passo = document.getElementById('tpasso')
var res = document.getElementById('res')

    if(ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('[ERRO] Faltam dados!')
    }
    else {
        res.innerHTML = 'Contando'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value) 
    }

    for (let c = 1; c <= f; c += p){
        res.innerHTML += ` ${c} \u{1F449}`
    }

    res.innerHTML += `\u{1F3C1}`
}