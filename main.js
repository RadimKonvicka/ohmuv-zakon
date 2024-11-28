const btnNapeti = document.getElementById('btnNapeti');
const btnProud = document.getElementById('btnProud');
const btnOdpor = document.getElementById('btnOdpor');

//Form = formular
const napetiForm = document.getElementById('napetiForm');
const proudForm = document.getElementById('proudForm');
const odporForm = document.getElementById('odporForm');

const vystupNapeti = document.getElementById('vystupNapeti');
const vystupProud = document.getElementById('vystupProud');
const vystupOdpor = document.getElementById('vystupOdpor');

const vypocitatNapeti = document.getElementById('vypocitatNapeti');
const vypocitatProud = document.getElementById('vypocitatProud');
const vypocitatOdpor = document.getElementById('vypocitatOdpor');
        
btnNapeti.addEventListener('click', () => {
    napetiForm.classList.remove('d-none');
    proudForm.classList.add('d-none');
    odporForm.classList.add('d-none');
});

btnProud.addEventListener('click', () => {
    proudForm.classList.remove('d-none');
    napetiForm.classList.add('d-none');
    odporForm.classList.add('d-none');
});

btnOdpor.addEventListener('click', () => {
    odporForm.classList.remove('d-none');
    napetiForm.classList.add('d-none');
    proudForm.classList.add('d-none');
});

vypocitatNapeti.addEventListener('click', () => {
    const proud = parseFloat(document.getElementById('proud').value);
    const odpor = parseFloat(document.getElementById('odpor').value);
    if (!isNaN(proud) && !isNaN(odpor)) {
        const napeti = proud * odpor;
        vystupNapeti.innerHTML = `Napětí: ${napeti} V`;
    } else {
        vystupNapeti.innerHTML = 'Zadej  obě hodnoty!';
    }
});

vypocitatProud.addEventListener('click', () => {
    const napeti = parseFloat(document.getElementById('napeti').value);
    const odpor = parseFloat(document.getElementById('odpor').value);
    if (!isNaN(napeti) && !isNaN(odpor)) {
        const proud = napeti / odpor;
        vystupProud.innerHTML = `Proud: ${proud} A`;
    } else {
        vystupProud.innerHTML = 'Zadej obě hodnoty!';
    }
});

vypocitatOdpor.addEventListener('click', () => {
    const napeti = parseFloat(document.getElementById('napetiOdpor').value);
    const proud = parseFloat(document.getElementById('proudOdpor').value);
    if (!isNaN(napeti) && !isNaN(proud)) {
        const odpor = napeti / proud;
        vystupOdpor.innerHTML = `Odpor: ${odpor} Ω`;
        } else {
        vystupOdpor.innerHTML = 'Zadej obě hodnoty!';
    }
});