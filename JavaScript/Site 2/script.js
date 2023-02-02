function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano') //ano de nascimento
    var res = document.querySelector('div#res') //resultado

    if (fano.value.lenght == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var substanivo = ''
        if (fsex[0].checked) {
            genero = 'Homem'
            substanivo = 'm'
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            substanivo ='ma'
        
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectei u${substanivo} ${genero} com ${idade} anos.`
    }
}