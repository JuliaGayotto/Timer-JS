function timer() {
    function formataSegundos(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT',
        })
    };
    
    const relogio = document.querySelector('.relogio');
    let segundos = 0;
    let timer;
    
    function iniciarContagem() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = formataSegundos(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(e) {
        const el = e.target;
    
        if(el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado');
            clearInterval(timer);
            iniciarContagem();
        }
    
        if(el.classList.contains('pausar')) {
            clearInterval(timer);
            relogio.classList.add('pausado');
        }
    
        if(el.classList.contains('zerar')) {
            clearInterval(timer)
            relogio.innerHTML = '00:00:00';
            relogio.classList.remove('pausado');
            segundos = 0;
        }
    
    })
}
timer();

