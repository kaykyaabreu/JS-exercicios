function gerar(){
    var n = document.getElementById('n').value
    //var res = document.getElementById('res')
    let tab = document.getElementById('seltab')
    n = Number(n);
    if (n <= 0){
        alert('o compo numero esta vazio')
    }else{
        
        
        var c = 1
        tab.innerHTML= ''
        while (c  < 11){
            //res.innerHTML +=`${s} x ${n} = ${n*s} <br>`
            //s++
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
        
    }
}

