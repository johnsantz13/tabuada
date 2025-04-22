function gerar(){
    cn = document.getElementById('CN')
    tab = document.getElementById('seltab')
    if(cn.value.length = 0){
        alert('por favor escolha um numero')
    }else{
        n = Number(cn.value)
        tab.innerHTML = ''
       // while(c <=10){
       for(c = 1 ; c <= 10 ; c++){
            item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}