var hora = 3
console.log(`são exatamente ${hora} horas.`)

if(hora < 12 && hora >= 6){
    console.log('Bom dia!')
}
else if(hora <=18) {
    console.log('Boa tarde!')
}
else if(hora <=5) {
    console.log('Boa Madrugada!')
}
else {  
    console.log('Boa Noite!')
}