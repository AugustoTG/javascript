function carregar(){
let i = document.getElementById('inicio')
let f = document.getElementById('fim')
let p = document.getElementById('passo')
result = document.getElementById('resultado')
if(i.value.length == 0 || f.value.length == 0 || p.value.length == 0){
    result.innerHTML ='Impossível contar!' 
}else{
    result.innerHTML ='Contando: '
    ini = Number(i.value)
    fim = Number(f.value)
    pas = Number(p.value)
    if(pas <= 0 ){
        window.alert('Numero invalido. Considerando o Passo = 1')
        pas = 1
    }else if(ini < fim){
        for(let a = ini; a <= fim ; a += pas){
        result.innerHTML += `${a} \u{25B6} `  
        }
    }else{
        for(let a = ini; a >= fim ; a -= pas){
        result.innerHTML += `${a} \u{25B6} ` 
    }
result.innerHTML += `\u{1F3C1}`
    }
    }
}