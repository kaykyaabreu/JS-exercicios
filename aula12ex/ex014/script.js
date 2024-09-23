function carregar(){

var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var fot= window.document.getElementById('fot')
var data = new Date()
var hora = data.getHours()
//var hora = 14
msg.innerHTML = `Agora sao ${hora} horas`

if(hora >= 0 && hora < 12){
    img.src = 'imagens2/manha.jpg'
    document.body.style.background= 'green'
}else if(hora >= 12 && hora < 18){
    img.src = 'imagens2/tarde.jpg'
    document.body.style.background= 'burlywood'
}else{
    img.src = 'imagens2/noite.jpg'
    document.body.style.background= 'black'
    fot.style.color ="#fff"
}

}