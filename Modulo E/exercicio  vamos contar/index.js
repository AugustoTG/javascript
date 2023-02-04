function carregar(){
let data = document.getElementById('ano').value
let result =document.getElementById('resultado')
let anoatual = new Date()
let fano = anoatual.getFullYear()
let anofinal = fano - data
if(data.length == 0 || data > fano){
    window.alert('Erro - Tente novamente!')
}else{
    let sexo = document.getElementsByName('tsexo')
    let img = document.createElement('img')
    img.setAttribute('id', 'foto')
    let genero = ''
    if(sexo[0].checked){
        genero = 'Você é um Homem'
        if(anofinal >=0 && anofinal < 3){
            img.setAttribute('src', 'imagem/bbm.jpg')
            //bb
        }else if (anofinal < 12){
            //criança
            img.setAttribute('src', 'imagem/criancam.jpg')
        }else if ( anofinal < 18){
            //adolecente
            img.setAttribute('src', 'imagem/adolecentem.jpg')
        }else if ( anofinal < 30){
            //jovem
            img.setAttribute('src', 'imagem/jovemm.jpg')
        }else if ( anofinal < 50){
            //adulto
            img.setAttribute('src', 'imagem/adulto.jpg')
        }else if ( anofinal < 65){
            //terceira idade
            img.setAttribute('src', 'imagem/idoso.jpg')
        }else if ( anofinal < 120){
            //idoso
            img.setAttribute('src', 'imagem/terceiraidadem.jpg')
        }
    }else{
        genero = 'Você é uma Mulher'
        if(anofinal >=0 && anofinal < 3){
            img.setAttribute('src', 'imagem/bbf.jpg')
            //bb
        }else if (anofinal < 12){
            //criança
            img.setAttribute('src', 'imagem/criancaf.jpg')
        }else if ( anofinal < 18){
            //adolecente
            img.setAttribute('src', 'imagem/adolecentef.jpg')
        }else if ( anofinal < 30){
            //jovem
            img.setAttribute('src', 'imagem/jovemf.jpg')
        }else if ( anofinal < 50){
            //adulto
            img.setAttribute('src', 'imagem/adulta.jpg')
        }else if ( anofinal < 65){
            //terceira idade
            img.setAttribute('src', 'imagem/idosa.jpg')
        }else if ( anofinal < 120){
            //idoso
            img.setAttribute('src', 'imagem/terceiraidadef.jpg')
        }
    }
    result.innerHTML = (`${genero} com ${anofinal} anos!`)
    result.style.textAlign = ('center')
    result.appendChild(img)
}
}
