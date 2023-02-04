function carregar(){
    let entrada = document.getElementById('numero')
    let tabela = document.getElementById('sel')
    if(entrada.length == 0){
        window.alert('Erro - Digite um número!')
    }else{
        let n = Number(entrada.value)
        tabela.innerHTML =''
        for(let mult =0; mult <= 10; mult++){
            let item = document.createElement('option')
            item.text = `${n} X ${mult} = ${n*mult}`
            tabela.appendChild(item)
        }
    }
}