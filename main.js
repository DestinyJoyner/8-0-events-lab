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

//    -------------BONUSES-------------

// Create A Button to white out cells
const button = document.createElement(`button`)
document.querySelector(`#palette`).append(button)
button.setAttribute(`type`, `button`)
button.textContent = `Click To Reset Image`
button.addEventListener(`click`, () => {
  cells.forEach( cell => {
    cell.style.backgroundColor = `white`
  })
})

// Create a button to change ALL cell colors to currentColor. But first create parent element section for button to give flex display to center button 
const section = document.createElement(`section`)
document.querySelector(`#current-color`).after(section)
const fillInButton = document.createElement(`button`)
section.append(fillInButton)
section.style.display = `flex`
section.style.justifyContent = `center`
fillInButton.setAttribute(`type`, `button`)
fillInButton.textContent = `Fill Entire Image`
fillInButton.addEventListener(`click`, () => {
  cells.forEach( cell => {
    cell.style.backgroundColor = currentColor.style.backgroundColor
  })
})

// Playing Around -> SMILEY FACE

cells.forEach( (x, i) => {
  x.classList.add(`${i}`)
})
// added class names 0 <= classname <= 99 -> each cell identifiable by class #'s 0 - 99 left to right
const black= [32,37,67,62,76,75,74,73]
const white = [0,1,8,9,10,19,89,99,98,80,90,91]
cells.forEach( cell => {
  cell.addEventListener('mouseover', (e) => {
    let cellNum = e.target.className.split(` `)[1]
    // console.log(typeof cellNum)
    if(black.includes(+cellNum)){
        e.target.style.backgroundColor = `black`
    }
    if(white.includes(+cellNum)){
      e.target.style.backgroundColor = `white`
  }
    if(!black.includes(+cellNum) && !white.includes(+cellNum)){
      e.target.style.backgroundColor = `yellow`
    }
  })
})

const bonusFun = document.createElement(`div`)
document.querySelector(`header`).after(bonusFun)
bonusFun.textContent = `Shade over grid to reveal hidden image before you get started (bonus) ☺`
bonusFun.style.fontFamily =`fantasy`
bonusFun.style.fontSize = `30px`
bonusFun.style.textAlign = `center`
bonusFun.style.wordBreak = `normal`



