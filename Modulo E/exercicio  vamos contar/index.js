function carregar(){
let i = document.getElementById('inicio').value
let f = document.getElementById('fim').value
let p = document.getElementById('passo').value
for (let result = i; result <= f; i = i+p ){
    console.log('funcionou')
}
}
