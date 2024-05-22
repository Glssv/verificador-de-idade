function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('ano')
    let res = document.getElementById('res')
    if(fano.value.length==0 || fano.value > ano){
        window.alert('[ERRO] Verifique seus dados e tente novamente ')
    } else {
        let fsex= document.getElementsByName('radsex')
        let idade= ano - Number(fano.value)
        let genero= ''
        let img= document.createElement('img')
        img.setAttribute('id','foto')
       
        if(fsex[0].checked) {
            genero = 'Homem'
            if(idade >=0 && idade <10){
                img.setAttribute('src', 'img/bebe-menino.png')

            } else if (idade <21){
                img.setAttribute('src', 'img/jovem-homem.png')

            }else if (idade< 50){
                img.setAttribute('src', 'img/homem-adulto.png')

            } else{
                img.setAttribute('src', 'img/idoso-homem.png')
            }
        } else if (fsex[1].checked) {
            genero= 'Mulher'
            if(idade >=0 && idade <10){
                img.setAttribute('src', 'img/bebe-menina.png')

            } else if (idade >=10 && idade <21){
                img.setAttribute('src','img/jovem-mulher.png')

            }else if (idade< 50){
                img.setAttribute('src', 'img/mulher-adulta.png')

            }else{
                img.setAttribute('src', 'img/idosa-mulher.png')
            }
        }
        res.innerHTML= `Detectamos ${genero} com ${idade} anos`
        res.style.textAlign= 'center'
        res.appendChild(img)
    }
}