let n = document.getElementById('numero')
let lista = document.getElementById('sel')
let res = document.getElementById('res')
let valores = []
function isNumber(num){
    if(Number(num) >= 1 && Number(num) <= 100){
        return true
    }else{
        return false
    }
}
function inLista(num, l){
    if(l.indexOf(Number(num)) != -1){
        return true
    }else{
        return false
    }
}
function carregar(){
   if(isNumber(n.value) && !inLista(n.value, valores)){
    valores.push(Number(n.value))
    let item = document.createElement('option')
    item.text = `Valor ${n.value} foi adicionado.`
    lista.appendChild(item)
    res.innerHTML = ''
   }else{
    window.alert('Erro - Valor inválido ou já encontrado na lista.')
   }
   n.value =''
   n.focus()
}
function finalizar(){
    if(valores.length == 0){
        window.alert('Valor invalido!')
    }else{
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos]>maior) maior = valores[pos]
            if(valores[pos]<menor) menor = valores[pos]
        }
        media = soma / total
        res.innerHTML=''
        res.innerHTML+=`<p>Ao todo, temos ${total} números cadastrado</p>`
        res.innerHTML+=`<p>O maior valor é  ${maior}.</p>`
        res.innerHTML+=`<p>O menor valor é  ${menor}.</p>`
        res.innerHTML+=`<p>A soma dos valores é  ${soma}.</p>`
        res.innerHTML+=`<p>A média dos valores é ${media}.</p>`
    }
    
}