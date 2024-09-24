function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if(fano.value.length == 0 || fano.value.length > ano){
        alert('verifique os dados e tente novamente')
    } else{
        var fsex = document.getElementsByClassName('banana')
        var idade = ano - Number(fano.value)
        var genero = ''
        var mas = document.getElementById('mas')
        var fem = document.getElementById('fem')
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (mas.checked) {
            genero ='homem'
            if (idade >=0 && idade <10){
                img.setAttribute('src', 'bebe_menino.jpg')
            }else if(idade >= 10 && idade <= 21){
                img.setAttribute('src', 'crianca_menino.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adulto.jpg')
            }else{
                img.setAttribute('src', 'idoso.jpg')
            }
            
        } else if (fem.checked){
            genero = 'mulher'

            if (idade >=0 && idade <10){
                img.setAttribute('src', 'bebe_menina.jpg')
            }else if(idade >= 10 && idade <= 21){
                img.setAttribute('src', 'crianca_menina.jpg')
            }else if(idade < 50){
                img.setAttribute('src', 'adulta.jpg')
            }else{
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
        
    }
}