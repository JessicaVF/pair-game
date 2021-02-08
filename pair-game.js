alert("hello wolrd")
const tdClickArea = document.querySelectorAll("td");


let p1 = [];
let p2 = [];
let cartes = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6];
cartes = shuffle(cartes);
let p1turn = true;
let p2turn = false;

// tdClickArea.forEach(item => {
//     item.addEventListener('click', e => {
//             let btnArea = e.target;
//             btnArea.innerHTML =
//                 //changeTurn();
//         }
//     })
// });