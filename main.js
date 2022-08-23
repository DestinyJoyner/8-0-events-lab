// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
 
//testing .js file
// console.log(`hi`)

// Create variable for current-color element
const currentColor = document.querySelector(`#current-color`)
// console.log(currentColor)

// creating variable for all child colors of id #palette -> nodeList (to loop & add eventListeners to each)
const palette = document.querySelectorAll(`#palette .color`)
// console.log(palette) //-> all 8 
palette.forEach( color => {
  color.addEventListener(`click`, e => {
    currentColor.style.backgroundColor = e.target.style.background
  })
})

// create variable to access all .cell boxes on page which are children of main eleement id #canvas
const cells = document.querySelectorAll(`#canvas .cell`)
// console.log(cells) // -> array of 100 divs with .cell class

// loop and apply event listeners to all cells (blocks) to be activated when clicked, to change its background to currentcolor background color
cells.forEach( cell => {
  cell.addEventListener(`click`, e => {
    e.target.style.backgroundColor = currentColor.style.backgroundColor
  })
})