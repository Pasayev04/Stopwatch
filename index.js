var a = 0;
var interval = undefined;
var lapCount = 1;

function vaxt(b) {
    var minut = Math.floor(b / 60);
    var secund = b - minut * 60;

    if (minut < 10) {
        minut = '0' + minut;
    }

    if (secund < 10) {
        secund = '0' + secund;
    }

    return minut + ':' + secund;
}

document.querySelector('#start').onclick = function () {
    clearInterval(interval);
    interval = setInterval(function () {
        a++;
        document.querySelector('#display').innerHTML = vaxt(a);
    }, 1000);
}

document.querySelector('#stop').onclick = function () {
    clearInterval(interval);
}

document.querySelector('#reset').onclick = function () {
    clearInterval(interval);
    a = -1;
    document.querySelector('#time').innerHTML = vaxt(a);
}

document.querySelector('#lap').onclick = function () {
    var h2 = document.createElement('h2');
    h2.innerText = 'lap' + lapCount++ + ': ' + vaxt(a);

    document.querySelector('#laps').append(h2);
}