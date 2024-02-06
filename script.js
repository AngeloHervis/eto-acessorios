
function calcularPrecos(formId) {
    const form = document.getElementById(formId);
    const quantidade = parseInt(form.querySelector('input[type="number"]').value);
    let precoCamiseta = 0;
    let precoEstampas = 0;


    if (formId === 'form1') {

        precoCamiseta = quantidade * (quantidade <= 10 ? 30 : 40);
        precoEstampas = (quantidade <= 10 ? 5 : 4.5) * parseInt(form.querySelector('input[name^="bolsop"]').value) +
                        (quantidade <= 10 ? 2.5 : 2.2) * parseInt(form.querySelector('input[name^="mangap"]').value) +
                        15 * parseInt(form.querySelector('input[name^="meiacostasp"]').value) +
                        25 * parseInt(form.querySelector('input[name^="costasp"]').value) +
                        7.5 * parseInt(form.querySelector('input[name^="nomep"]').value);
    } else if (formId === 'form2') {

        precoCamiseta = quantidade * (quantidade <= 20 ? 28.5 : 37.5);
        precoEstampas = (quantidade <= 20 ? 4.5 : 4) * parseInt(form.querySelector('input[name^="bolsop"]').value) +
                        (quantidade <= 20 ? 2.2 : 2) * parseInt(form.querySelector('input[name^="mangap"]').value) +
                        13 * parseInt(form.querySelector('input[name^="meiacostasp"]').value) +
                        22 * parseInt(form.querySelector('input[name^="costasp"]').value) +
                        7.5 * parseInt(form.querySelector('input[name^="nomep"]').value);
    } else if (formId === 'form3') {

        precoCamiseta = quantidade * (quantidade <= 20 ? 27 : 35);
        precoEstampas = (quantidade <= 20 ? 4 : 3.5) * parseInt(form.querySelector('input[name^="bolsop"]').value) +
                        (quantidade <= 20 ? 2 : 1.5) * parseInt(form.querySelector('input[name^="mangap"]').value) +
                        12 * parseInt(form.querySelector('input[name^="meiacostasp"]').value) +
                        20 * parseInt(form.querySelector('input[name^="costasp"]').value) +
                        7.5 * parseInt(form.querySelector('input[name^="nomep"]').value);
    }


    const precoTotal = precoCamiseta + precoEstampas;
    

    const precoIndividualCamiseta = precoTotal / quantidade;


    form.querySelector('input[name^="priceIndividual"]').value = precoIndividualCamiseta.toFixed(2);
    form.querySelector('input[name^="totalPrice"]').value = precoTotal.toFixed(2);
}


document.querySelectorAll('.form').forEach(form => {
    form.addEventListener('input', () => {
        calcularPrecos(form.id);
    });
});
