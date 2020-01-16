/*De functie om het menu te tonen als er op de hamburger geklikt wordt*/
let hamburger = document.getElementsByClassName("menu")[0];
let hamburgerMenu = document.getElementsByTagName("nav")[0];
hamburger.addEventListener("click", toonMenu);

function toonMenu() {
  console.log("toonMenu werkt!");
  if (hamburgerMenu.style.display === "flex") {
    hamburgerMenu.style.display = "none";
  } else {
    hamburgerMenu.style.display = "flex";
  }
}

/*De functie die bij een mouseover op de vinylhoes de data-rug toont*/
let mijnCovers = document.getElementsByTagName("img");
let tel = 1;
while (tel < mijnCovers.length) {
  mijnCovers[tel].addEventListener("mouseover", veranderAfbeelding);
  mijnCovers[tel].addEventListener("mouseout", zetAfbeeldingTerug);
  tel++;
}

function veranderAfbeelding() {
  console.log("mouseover werkt");
  let coverRug = this.getAttribute("data-rug"); /*Je neemt het data-attribuut*/
  let dataSource = this.getAttribute("src"); /*Je neemt het src atrribuut*/
  this.setAttribute("src", coverRug); /*Je verbergt mijnCover in het data-attribuut*/
  this.setAttribute("data-rug", dataSource); /*De waarde van de source wordt gekopieerd naar de coverRug*/
}

function zetAfbeeldingTerug() {
  console.log("mouseout werkt");
  let coverRug = this.getAttribute("data-rug");
  let dataSource = this.getAttribute("src");
  this.setAttribute("src", coverRug);
  this.setAttribute("data-rug", dataSource);
}


/*De functie om de content aan te passen aan op welke knop gedrukt wordt. Wel niet de snelste manier...*/
let categorieKnop = document.getElementsByClassName("navigatie");
let teller = 0;
while (teller < categorieKnop.length) {
  console.log("de loop werkt!");
  categorieKnop[teller].addEventListener("click", toonItems);
  teller++;
}

let afbeeldingGrid = document.getElementsByClassName("grid")[0];
let queenItems = document.getElementsByClassName("Queen")[0];
let preQueenItems = document.getElementsByClassName("Pre-Queen")[0];
let brianItems = document.getElementsByClassName("BrianMay")[0];
let freddieItems = document.getElementsByClassName("FreddieMercury")[0];
let rogerItems = document.getElementsByClassName("RogerTaylor")[0];
let johnItems = document.getElementsByClassName("JohnDeacon")[0];


function toonItems() {
  console.log("toonItems werkt!");
  if (this.innerHTML === "Queen") {
    queenItems.classList.remove("verborgen");
    preQueenItems.classList.add("verborgen");
    brianItems.classList.add("verborgen");
    freddieItems.classList.add("verborgen");
    rogerItems.classList.add("verborgen");
    johnItems.classList.add("verborgen");
  } else if (this.innerHTML === "Pre-Queen") {
    queenItems.classList.add("verborgen");
    preQueenItems.classList.remove("verborgen");
    brianItems.classList.add("verborgen");
    freddieItems.classList.add("verborgen");
    rogerItems.classList.add("verborgen");
    johnItems.classList.add("verborgen");
  } else if (this.innerHTML === "Brian May") {
    queenItems.classList.add("verborgen");
    preQueenItems.classList.add("verborgen");
    brianItems.classList.remove("verborgen");
    freddieItems.classList.add("verborgen");
    rogerItems.classList.add("verborgen");
    johnItems.classList.add("verborgen");
  } else if (this.innerHTML === "Freddie Mercury") {
    queenItems.classList.add("verborgen");
    preQueenItems.classList.add("verborgen");
    brianItems.classList.add("verborgen");
    freddieItems.classList.remove("verborgen");
    rogerItems.classList.add("verborgen");
    johnItems.classList.add("verborgen");
  } else if (this.innerHTML === "Roger Taylor") {
    queenItems.classList.add("verborgen");
    preQueenItems.classList.add("verborgen");
    brianItems.classList.add("verborgen");
    freddieItems.classList.add("verborgen");
    rogerItems.classList.remove("verborgen");
    johnItems.classList.add("verborgen");
  } else if (this.innerHTML === "John Deacon") {
    queenItems.classList.add("verborgen");
    preQueenItems.classList.add("verborgen");
    brianItems.classList.add("verborgen");
    freddieItems.classList.add("verborgen");
    rogerItems.classList.add("verborgen");
    johnItems.classList.remove("verborgen");
  } else if (this.innerHTML === "Alle"){
    queenItems.classList.remove("verborgen");
    preQueenItems.classList.remove("verborgen");
    brianItems.classList.remove("verborgen");
    freddieItems.classList.remove("verborgen");
    rogerItems.classList.remove("verborgen");
    johnItems.classList.remove("verborgen");
  }
}


/*De functie die bij een klik op de plaat extra de info zichtbaar maakt*/
tel = 1;
while (tel < mijnCovers.length) {
  mijnCovers[tel].addEventListener("click", toonInfo);
  tel++;
}

function toonInfo() {
  console.log("toonInfo werkt!");
  let naamPlaat = this.getAttribute("data-naam");
  let landPlaat = this.getAttribute("data-land");
  let datumPlaat = this.getAttribute("data-jaar");
  console.log(naamPlaat + " - " + landPlaat + " - " + datumPlaat);
}
