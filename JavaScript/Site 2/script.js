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
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            substanivo = 'm'
            if(idade >=0 && idade < 13){
                //criança
                img.setAttribute('src', 'foto-bebe-m.png')
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-m.png')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-m.png')
            }
            else if (idade > 50 && idade < 100) {
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
            }
            else {
                window.alert('[ERRO] Nao minta na sua idade.')
            }
        }
        else if (fsex[1].checked) {
            genero = 'Mulher'
            substanivo ='ma'
            if(idade >=0 && idade < 13){
                //criança
                img.setAttribute('src', 'foto-bebe-f.png')
            }
            else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'foto-jovem-f.png')
            }
            else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'foto-adulto-f.png')
            }
            else if (idade > 50 && idade < 100) {
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
            }
            else {
                window.alert('[ERRO] Nao Minta na sua idade.')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectei u${substanivo} ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}