const tdClickArea = document.querySelectorAll("td");
let p1 = [];
let p2 = [];
let cartes = ["1", "1", "2", "2", "3", "3", "4", "4"];
cartes = shuffle(cartes);
let p1turn = true;
let p2turn = false;

//dummy system to test: 
let cartas = [["1", "1", "2", "2"], ["3", "3", "4", "4"]];
cartas = [shuffle(cartas[0]), shuffle(cartas[1])];
console.log(cartas);
//

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
        let indexCell = btnArea.cellIndex;
        let indexRow = btnArea.parentElement.rowIndex;
        console.log(indexCell);
        console.log(indexRow);
        btnArea.innerHTML = cartas[indexRow][indexCell];
        //changeTurn();
    })
});
