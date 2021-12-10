let array = [100,100,100];
console.log(media(array));

function media(notas) {
    let total = calcularMedia(notas);
    if (total <= 59) {
        return 'F';
    }
    else if (total >= 60 && total <= 69) {
        return 'D';
    }
    else if (total >= 70 && total <= 79) {
        return 'C';
    }
    else if (total >= 80 && total <= 89) {
        return 'D';
    }
    else {
        return 'A';
    }
}

function calcularMedia(array) {
    let soma;
    for (let nota of array){
        soma += nota;
    }
     return soma / 3;
}