function carregar(){
let data = document.getElementById('ano').value
let result =document.getElementById('resultado')
let anoatual = new Date()
let fano = anoatual.getFullYear()
let anofinal = fano - data
if(data.length == 0 || data >= fano){
    window.alert('Erro - Tente novamente!')
}else{
    let sexo = document.getElementsByName('tsexo')
    let genero = ''
    if(sexo[0].checked){
        genero = 'Você é um Homem'
    }else{
        genero = 'Você é uma Mulher'
    }
    result.innerHTML = (`${genero} com ${anofinal} anos!`)
    result.style.textAlign = ('center')
}
}
