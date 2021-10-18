function verificar(){
    data = new Date()
    var ano = data.getFullYear() //retorna o ano atual
    var fano = document.getElementById('txtano')
    var red = document.querySelector('div#red')
    
    //CONDIÇÕES ano atual é = 0 ou maior que o ano atual
    if (fano.value.length = 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    }
    
    else{
        //sexo
        var fsex = document.getElementsByName('radsex')
        //Assim que colocar a idade, faz o calculo do ano atual menos o informado
        var idade = ano - Number(fano.value)
        //[0] é masculino [1] é feminino, devido a ordem dos inputs
        var genero = ''
        // criamos uma var com id="foto"
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            gerero = 'homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/foto-bebe-m.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/foto-jovem-m.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'img/foto-adulto-m.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/foto-idoso-m.png')
            }
        } else if (fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'img/foto-bebe-f.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'img/foto-jovem-f.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'img/foto-adulto-f.png')
            } else {
                //idoso
                img.setAttribute('src', 'img/foto-idoso-f.png')
            }
        }
        res.style.textAlign = 'center' //estilo
        //para aparecer a detecção
        res.innerHTML = 'Detectamos ' + genero + ' com ' + idade + ' anos.'
        //para aparece a imagem
        res.appendChild(img)
    }
}
