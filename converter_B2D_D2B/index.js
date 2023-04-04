let binary        = document.getElementById('binary');
let decimal       = document.getElementById('decimal');
let binaryResult  = document.getElementById('binaryResult');
let decimalResult = document.getElementById('decimalResult');

function converter_BTD() {
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

    let BTD_converted = parseInt(binary.value, 2);

    res_BTD = `<p>O número binário ${binary.value} em decimal é ${BTD_converted}</p>`
    binaryResult.innerHTML = res_BTD;
};

function converter_DTB() {
    if (decimal.value == '') {
        alert('Insira um número decimal!');
        return;
    }

    let DTB_converted = (decimal.value >>> 0).toString(2);

    res_DTB = `<p>O número decimal ${decimal.value} em binário é ${DTB_converted}</p>`
    decimalResult.innerHTML = res_DTB;
}