let num = [2, 5, 2]
var valores = [1, 2, 3, num * 3, num.length - 1, 4 , 5, 7, 8, 12, 62]
valores.sort()
num.push(2)
num.sort()
let poss = valores.indexOf(5) + num.indexOf(2)
var posi = Number(poss)
console.log(posi)


for(var pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}