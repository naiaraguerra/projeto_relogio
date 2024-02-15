$(document).ready(function(){
    altera_hora();
});

function altera_hora(){
    setInterval(function () {
        let dataAtual = new Date();
        console.log(dataAtual)
    
        let hora = dataAtual.getHours();
        let minutos = dataAtual.getMinutes();
        let segundos = dataAtual.getSeconds();

        if (hora > 9){
            hora = hora
        } else {
            hora = "0"+hora;
        }

        if (minutos > 9){
            minutos = minutos;
        } else {
            minutos = "0"+minutos;
        }

        if (segundos > 9){
            segundos = segundos;
        } else {
           segundos = "0"+segundos;
        }

        $('#hora').text(hora);
        $('#minutos').text(minutos);
        $('#segundos').text(segundos);
    }, 1000);
}