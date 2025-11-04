let felforditott = 0;
let db = 0;
let ford1;
let ford2;
let shuffled = [];
let parokcount = document.createElement('p');
let parkeresodiv = document.createElement('div');
let divsor1;
let divsor2;
let divsor3;
let kepek = [
    {
        lapNev: 'sajtburger',
        eleres: 'memoriaKepek/sajtburger.png'
    },
    {
        lapNev: 'sajtburger',
        eleres: 'memoriaKepek/sajtburger.png'
    },
    {
        lapNev: 'hotdog',
        eleres: 'memoriaKepek/hotdog.png'
    },
    {
        lapNev: 'hotdog',
        eleres: 'memoriaKepek/hotdog.png'
    },
    {
        lapNev: 'jegkrem',
        eleres: 'memoriaKepek/jegkrem.png'
    },
    {
        lapNev: 'jegkrem',
        eleres: 'memoriaKepek/jegkrem.png'
    },
    {
        lapNev: 'krumpli',
        eleres: 'memoriaKepek/krumpli.png'
    },
    {
        lapNev: 'krumpli',
        eleres: 'memoriaKepek/krumpli.png'
    },
    {
        lapNev: 'pizza',
        eleres: 'memoriaKepek/pizza.png'
    },
    {
        lapNev: 'pizza',
        eleres: 'memoriaKepek/pizza.png'
    },
    {
        lapNev: 'shake',
        eleres: 'memoriaKepek/shake.png'
    },
    {
        lapNev: 'shake',
        eleres: 'memoriaKepek/shake.png'
    }
];

document.addEventListener('DOMContentLoaded', function () {
    let cimsordiv = document.createElement('div');
    let hova = document.getElementById('main');
    hova.classList.add('d-flex', 'justify-content-center', 'flex-column');
    let cimsor = document.createElement('h2');
    cimsor.innerHTML = 'Memória játék';
    cimsordiv.classList.add('text-light', 'text-center');
    cimsor.classList.add('bg-secondary', 'px-4', 'py-2');
    let parokdiv = document.createElement('div');
    parokdiv.classList.add('text-center', 'text-muted', 'fw-bold');
    cimsordiv.appendChild(cimsor);
    parokcount.innerHTML = 'Párok: ' + db + '/6';
    hova.appendChild(cimsordiv);
    parokdiv.appendChild(parokcount);
    hova.appendChild(parokdiv);

    parkeresodiv.classList.add('flex-column', 'd-flex', 'justify-content-center', 'gap-3');
    divsor1 = document.createElement('div');
    divsor1.classList.add('d-flex', 'flex-row', 'justify-content-center', 'gap-3');
    divsor2 = document.createElement('div');
    divsor2.classList.add('d-flex', 'flex-row', 'justify-content-center', 'gap-3');
    divsor3 = document.createElement('div');
    divsor3.classList.add('d-flex', 'flex-row', 'justify-content-center', 'gap-3');
    parkeresodiv.appendChild(divsor1);
    parkeresodiv.appendChild(divsor2);
    parkeresodiv.appendChild(divsor3);
    parkeresodiv.id = 'Parkeresodiv';
    hova.appendChild(parkeresodiv);
    let random;
    for (let i = 0; i < 12; i++) {
        random = Math.floor(Math.random() * kepek.length);
        shuffled.push(kepek[random]);
        kepek.splice(random, 1);
    }

    //Képek feltöltése
    for (let i = 0; i < 4; i++) {
        forgatasok(shuffled, i, divsor1, divsor2, divsor3);
    }
    for (let i = 4; i < 8; i++) {
        forgatasok(shuffled, i, divsor1, divsor2, divsor3);
    }
    for (let i = 8; i < 12; i++) {
        forgatasok(shuffled, i, divsor1, divsor2, divsor3);
    }
});

function forgatasok(shuffled, i, divsor1, divsor2, divsor3) {
    let card = document.createElement('div');
    let kep = document.createElement('img');
    kep.dataset.ellenorzes = 'blank';
    card.appendChild(kep);
    kep.src = 'memoriaKepek/blank.png';
    kep.dataset.takart = shuffled[i].eleres;
    kep.classList.add('img-fluid', 'rounded', 'shadow-sm');
    card.classList.add('rounded', 'd-flex', 'justify-content-center', 'p-2');
    kep.addEventListener('click', minden);
    if (i < 4) {
        divsor1.appendChild(card);
    } else if (i > 7) {
        divsor3.appendChild(card);
    } else {
        divsor2.appendChild(card);
    }
}

function vegellenorzes() {
    setTimeout(function () {
        if (db == 6) {
            parkeresodiv.innerHTML = '';
        }
    }, 1000);
}

function minden() {
    kep = this;
    if (felforditott == 0 && kep.dataset.ellenor != 'forditva') {
        kep.src = kep.dataset.takart;
        kep.dataset.ellenorzes = kep.dataset.takart;
        ford1 = kep.dataset.takart;
        kep.dataset.ellenor = 'forditva';
        kep.removeEventListener('click', minden);
        felforditott++;
    } else if (felforditott == 1 && kep.dataset.ellenor != 'forditva') {
        kep.src = kep.dataset.takart;
        kep.dataset.ellenorzes = kep.dataset.takart;
        ford2 = kep.dataset.takart;
        kep.dataset.ellenor = 'forditva';
        kep.removeEventListener('click', minden);
        if (ford1 == ford2) {
            db++;
            parokcount.innerHTML = 'Párok: ' + db + '/6';
            setTimeout(function () {
                for (let i = 0; i < divsor1.children.length; i++) {
                    if (divsor1.children[i].children[0].dataset.ellenorzes != 'blank' && divsor1.children[i].children[0].dataset.ellenorzes != 'white') {
                        divsor1.children[i].children[0].src = 'memoriaKepek/white.png';
                        divsor1.children[i].children[0].dataset.ellenorzes = 'white';
                        vegellenorzes();
                    }
                    if (divsor1.children[i].children[0].dataset.ellenorzes == 'white') {
                        divsor1.children[i].children[0].removeEventListener('click', minden);
                    }
                }

                for (let i = 0; i < divsor2.children.length; i++) {
                    if (divsor2.children[i].children[0].dataset.ellenorzes != 'blank' && divsor2.children[i].children[0].dataset.ellenorzes != 'white') {
                        divsor2.children[i].children[0].src = 'memoriaKepek/white.png';
                        divsor2.children[i].children[0].dataset.ellenorzes = 'white';
                        vegellenorzes();
                    }
                    if (divsor2.children[i].children[0].dataset.ellenorzes == 'white') {
                        divsor2.children[i].children[0].removeEventListener('click', minden);
                    }
                }
                for (let i = 0; i < divsor3.children.length; i++) {
                    if (divsor3.children[i].children[0].dataset.ellenorzes != 'blank' && divsor3.children[i].children[0].dataset.ellenorzes != 'white') {
                        divsor3.children[i].children[0].src = 'memoriaKepek/white.png';
                        divsor3.children[i].children[0].dataset.ellenorzes = 'white';
                        vegellenorzes();
                    }
                    if (divsor3.children[i].children[0].dataset.ellenorzes == 'white') {
                        divsor3.children[i].children[0].removeEventListener('click', minden);
                    }
                }
            }, 1000);
        } else {
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 4; j++) {
                    parkeresodiv.children[i].children[j].removeEventListener('click', minden);
                }
            }

            setTimeout(function () {
                for (let i = 0; i < divsor1.children.length; i++) {
                    if (divsor1.children[i].children[0].dataset.ellenorzes != 'blank' && divsor1.children[i].children[0].dataset.ellenorzes != 'white') {
                        divsor1.children[i].children[0].src = 'memoriaKepek/blank.png';
                        divsor1.children[i].children[0].dataset.ellenorzes = 'blank';
                        divsor1.children[i].children[0].dataset.ellenor = '';
                    }
                }
                for (let i = 0; i < divsor2.children.length; i++) {
                    if (divsor2.children[i].children[0].dataset.ellenorzes != 'blank' && divsor2.children[i].children[0].dataset.ellenorzes != 'white') {
                        divsor2.children[i].children[0].src = 'memoriaKepek/blank.png';
                        divsor2.children[i].children[0].dataset.ellenorzes = 'blank';
                        divsor2.children[i].children[0].dataset.ellenor = '';
                    }
                }
                for (let i = 0; i < divsor3.children.length; i++) {
                    if (divsor3.children[i].children[0].dataset.ellenorzes != 'blank' && divsor3.children[i].children[0].dataset.ellenorzes != 'white') {
                        divsor3.children[i].children[0].src = 'memoriaKepek/blank.png';
                        divsor3.children[i].children[0].dataset.ellenorzes = 'blank';
                        divsor3.children[i].children[0].dataset.ellenor = '';
                    }
                }
            }, 1000);
        }
    }
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 4; j++) {
            if (parkeresodiv.children[i].children[j].dataset.ellenorzes == 'blank') {
                console.log(parkeresodiv.children[i].children[j]);
                parkeresodiv.children[i].children[j].addEventListener('click', minden);
            }
        }
    }
    felforditott = 0;
}
