let agora = new Date()
let hora = agora.getHours()
console.log(`Agora são ${hora} horas!`)
if (hora >6 && hora < 12){
    console.log('Periodo da manhã!')
    console.log('Bom dia!')
} else if(hora>=12 && hora <= 18){
    console.log('Periodo da tarde!')
    console.log('Boa Tarde!')
} else if( hora > 18 && hora < 24){
    console.log('Periodo Noturno!')
    console.log('Boa Noite!')
}else if (hora >= 0 && hora <= 6){
    console.log('Madrugada!')
    console.log('Boa Noite!')
}