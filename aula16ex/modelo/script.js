let ba = [];

function rodar() {
    var car = Number(document.getElementById('num').value); // Converter o valor para número
    var sel = document.getElementById('sel');

    // Verificar se o número está fora do intervalo
    if (car > 100 || car < 1) {
        alert('Por favor, coloque um número entre 1 e 100.');
    } 
    // Verificar se o número já está no array
    else if (ba.indexOf(car) !== -1) {
        alert('Esse número já foi inserido no array.');
    } 
    // Caso contrário, adicionar o número ao array
    else {
        ba.push(car); // Adicionar o número ao array

        // Criar novo item da lista
        let item = document.createElement('option');
        item.text = ba[ba.length - 1]; // Exibir o último número inserido
        sel.appendChild(item); // Adicionar item à lista

        
        
        // Limpar o campo de entrada
        document.getElementById('num').value = '';
    }
}

var maior = document.getElementById('maior')
var menor = document.getElementById('menor')
var somat = document.getElementById('somat')
var arrey = document.getElementById('arrey')

function preencher(){
    ba.sort()
    ba.sort()
    maior.innerText = `O maior numerio é ${ba[ba.length -1]}`
    menor.innerText = `O menor numero é ${Math.min(...ba)}`
    var s = 0
    for(let pos =0; pos<ba.length;pos++){
        s = s + ba[pos]
    }
    somat.innerText = `A soma dos valores e ${s}`

    var e = ''
    for(let pos =0; pos<ba.length;pos++){
        e = e + `${String(ba[pos])} `
    }
    arrey.innerText = `Os valores são ${e}`
}