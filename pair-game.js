

const tdClickArea = document.querySelectorAll("td");
let p1 = [];
let p2 = [];
let cartes = ["1", "1", "2", "2", "3", "3", "4", "4", "5", "5", "6", "6"];
cartes = shuffle(cartes);
let p1turn = true;
let p2turn = false;

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

tdClickArea.forEach(item => {
    item.addEventListener('click', e => {
        let btnArea = e.target;

        //let indexTD;

        btnArea.innerHTML = cartes[];
        //changeTurn();
    })
});