let binary = document.getElementById('binary');
let result = document.getElementById('result');

function converter() {
    if (binary.value.length > 8) {
        alert('Insira um número binário de 8 bits!');
        return;
    }

    if (binary.value == '') {
        alert('Insira um número binário!');
        return;
    }

    for (let i = 0; i < binary.value.length; i++){
        if (binary.value[i] != 1 && binary.value[i] != 0) {
            alert('Insira um número binário!');
            return;
        }
    }

    let decimal = parseInt(binary.value, 2);

    res = `<p>O número binário ${binary.value} em decimal é ${decimal}</p>`
    result.innerHTML = res;
};