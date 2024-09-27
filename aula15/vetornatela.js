let valores = [8,1,34,2,4]

/*for(var pos = 0;pos<valores.length;pos++){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}*/

for(let pos in valores){
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
let pos = valores.indexOf(4)
if(pos == -1){
    console.log('o valor não foi encontrado')
}else{
    console.log(pos)
}

