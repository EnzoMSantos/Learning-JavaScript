function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'Manha COMPLETA.png'
        document.body.style.background = "#efd493"
    } 
    else if (hora >= 12 && hora <= 18) {
        img.src = 'Tarde COMPLETA.png'
        document.body.style.background = "#a8b6c6"
    }
    else {
        img.src = 'Noite COMPLETA.png'
        document.body.style.background = "#071e21"
    }
}

