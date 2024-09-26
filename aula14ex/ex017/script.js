function calcular(){
    var inicio = document.getElementById('inicio').value
    var fim = document.getElementById('fim').value
    var passo = document.getElementById('passo').value
    var res =document.getElementById('resultado')
    var contando
    
    
    if(fim.length == '0' || fim.length == '0' || passo.length=='0'){
        alert('algum campo deve estar vazio')
    }else{
        inicio = Number(inicio)
        fim = Number(fim)
        passo = Number(passo)
        if( passo<=0){
            alert('passo invalido considerando passo 1')
            passo = 1
        }
        if(inicio < fim){
            res.innerText = ''
        while(inicio <= fim){
            
            res.innerText += `\u{1F449} ${inicio.toString()}` 
            inicio += passo
        }
        
        }else{
            while(inicio >= fim){
            
                res.innerText += `\u{1F449} ${inicio.toString()}` 
                inicio -= passo
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}