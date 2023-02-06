function contar () {
let ini = document.getElementById('tinicio')
let fim = document.getElementById('tfim')
let passo = document.getElementById('tpasso')
let res = document.getElementById('res')

    if(ini.value.lenght == 0 || fim.value.lenght == 0 || passo.value.lenght == 0) {
        window.alert('[ERRO] Faltam dados!')
        res.innerHTML = 'Impossível contar!'
    }
        else {
            res.innerHTML = 'Contando'
            let i = Number(ini.value)
            let f = Number(fim.value)
            let p = Number(passo.value) 
        

        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c += p){
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } 
        else {
            //contagem regressiva
            for (let c = i; c >= f; c -= p ){
                res.innerHTML += ` ${c}  \u{1F449} `
            }
        }   
        res.innerHTML += `\u{1F3C1}`
    }
}