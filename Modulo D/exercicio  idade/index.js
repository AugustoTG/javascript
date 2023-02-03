function carregar(){
let data = document.getElementById('ano')
let sexo = document.getElementById('sex')
let result =document.getElementById('resultado')
let anoatual = new Date()
let anofinal= anoatual.getFullYear() - data.value
result.innerHTML = (`Você tem ${anofinal} anos!`)
result.style.textAlign = ('center')
}