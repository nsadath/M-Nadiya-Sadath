let sortButton = document.getElementById("sort")
let shuffleButton = document.getElementById("shuffle")
sortButton.addEventListener("click", sortNumbers)
shuffleButton.addEventListener("click", shuffleNumbers)

var array = [1,2,3,4,5,6,7,8,9];

createContainer = () => {
  var container = document.getElementById("container");
  container.innerHTML = '';
}

sort = () => {
  array.sort(function(a, b){return a-b});
  return array;
}

createGrid = array => {
  let numberOfRows = 3
    let i = 0;
    let  = 0;
    let x = numberOfRows * numberOfRows;
    document.documentElement.style.setProperty("--columns-row", numberOfRows);
      for (i =  0; i < x ; i++) {
        var div = document.createElement("div");
          div.className = "grid-item";
          div.innerHTML = array[i];
          document.getElementById("container").appendChild(div);
    }
}

shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}

function sortNumbers() {
    createContainer();
    let array = sort();
    createGrid(array);
}

function shuffleNumbers() {
  createContainer();
  shuffleArray(array);
  createGrid(array);
}