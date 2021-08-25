let cantidadDeDias = Number(prompt("Introduce una cantidad de dias"));

function Calculo(dias) {
    let horas = dias * 24;
    let minutos = dias * 1440;
    let segundos = dias * 86400;

    alert(`${cantidadDeDias} dias tiene ${horas} horas, ${minutos} minutos y ${segundos} segundos`);
}

Calculo(cantidadDeDias);