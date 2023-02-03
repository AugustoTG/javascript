function carregar(){
    let msg = document.getElementById('hora')
    let img = document.getElementById('img')
    let data = new Date()
    let hora =  data.getHours()
    let minutos = data.getMinutes()
    msg.innerHTML=`Agora são ${hora} horas e ${minutos} minutos.`
    if(hora >= 6 && hora < 12) {
        img.src = 'imagem/manha.png'
        document.body.style.backgroundColor = ('#e2cd9f')
    } else if (hora >= 12 && hora < 18){
        img.src = 'imagem/tarde.png'
        document.body.style.backgroundColor = ('#b9846f')
    }else if (hora >= 18 && hora < 24){
        img.src = 'imagem/noite.png'
        document.body.style.backgroundColor = ('#515154')
    }else{
        img.src='imagem/madrugada.png'
        document.body.style.backgroundColor = ('#000')
    }
}
