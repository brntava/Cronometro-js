
let mm = 0;
let ss = 0;
let ms = 0;
let timer;

function cronometro(){

    let format = (mm < 10 ? '0'+mm : mm) + ':'+ (ss < 10 ? '0'+ss : ss) + ':' + (ms < 10 ? '0'+ms : ms);
    document.querySelector('.text').innerHTML = format

    if(ms == 59){
        ms = 0;
        return ss++
    }
    else if(ss == 59){
        ss = 0;
        return mm++
    }

    return ms++
}

function start(){
    timer = setInterval(cronometro, 100);
}

function pause(){
    clearInterval(timer)
}

function stop(){
    clearInterval(timer);
    mm = 0;
    ss = 0;
    ms = 0;
    document.querySelector('.text').innerHTML = '00:00:00';
}