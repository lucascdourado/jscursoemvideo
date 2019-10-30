function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var min = data.getMinutes()
    var seg = data.getSeconds()
    msg.innerHTML = `<p>Agora são ${hora} horas e ${min} minutos.</p>`

    if (hora >= 0 && hora < 13) {
        msg.innerHTML += '<strong>BOM DIA</strong>'
        img.src = 'fotomanha.png'
        document.body.style.background = '#cd996e'
    } else if (hora < 18) {
        msg.innerHTML += '<strong>BOA TARDE</strong>'
        document.body.style.background = '#c27222'        
        img.src = 'fototarde.png'
    } else {
        msg.innerHTML += '<strong>BOA NOITE</strong>'
        img.src = 'fotonoite.png'
        document.body.style.background = '#003236'
    }
}