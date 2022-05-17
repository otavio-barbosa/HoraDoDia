
    function carregar() {

        var $msg = window.document.querySelector('.msg')
        var $img = window.document.getElementById('img')
        var data = new Date()
        var hora = data.getHours()
        $msg.innerHTML = 'Agora são: ' + hora +  ' horas!'


        if (hora >= 0 && hora <=12) {
            $img.src = "1.morning.jpg"
            document.body.style.background = '#d0b084'
        } else if (hora > 12 && hora < 18) {
            $img.src = '2.afternoon.jpg'
            document.body.style.background = '#ff8300'
        } else {
            $img.src = '3.night.jpg'
            document.body.style.background = '#1b1e23'
        }
}
