let container = document.querySelector(".container");
let nextQuestion = document.querySelector(".nextQuestion");
let form = document.querySelector("form");
let choice = document.querySelector("#choice");
let restartButton = document.querySelector("#restartButton");
let gameName = document.querySelector("#gameName");

let index = 0;
let score = 0;

let flipCards = [
  {
    country: "France",
    capital: "Paris",
  },
  {
    country: "Spain ",
    capital: "Madrid",
  },
  {
    country: "Italy",
    capital: "Rome",
  },
  {
    country: "United Kingdom",
    capital: "London",
  },
  {
    country: "Germany",
    capital: "Berlin",
  },
  {
    country: "Austria",
    capital: "Vienna",
  },
  {
    country: "Albania",
    capital: "Tirana",
  },
  {
    country: "Greece",
    capital: "Athens",
  },
  {
    country: "Belgium",
    capital: "Brussels",
  },
  {
    country: "Hungary",
    capital: "Budapest",
  },
  {
    country: "Russia",
    capital: "Moscow",
  },
  {
    country: "Poland",
    capital: "Warsaw",
  },
  {
    country: "Sweden",
    capital: "Stockholm",
  },
  {
    country: "Portugal",
    capital: "Lisbon",
  },
  {
    country: "Ukraine",
    capital: "	Kiev",
  },
];
//Shuffle the cards and get only 10 in radnom order
function shuffle() {
  for (let i = flipCards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [flipCards[i], flipCards[j]] = [flipCards[j], flipCards[i]];
  }

  flipCards = [...flipCards.splice(0, 10)];
}

//match country with capital
function handleClick(e) {
  if (e.target.innerHTML === e.target.dataset.capital) {
    e.target.innerHTML = e.target.dataset.country;
  } else {
    e.target.innerHTML = e.target.dataset.capital;
  }
  e.target.classList.toggle("flipped");
}

//flip card
function cardEvent() {
  let card = document.querySelector(".card");
  card.addEventListener("click", handleClick);
}
//start game
function createFlashCard() {
  let card = flipCards[index];

  let flashCard = `
    <div class="card" data-country=${card.country} data-capital=${card.capital}>${card.country}</div>
  `;

  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", flashCard);
  cardEvent();
}
//restart game
function restart() {
  restart = location.reload();
}
//remove form, next question, and name of the game
function remove() {
  form.remove();
  nextQuestion.remove();
  gameName.remove();
}

shuffle();
createFlashCard();

nextQuestion.addEventListener("click", (e) => {
  let userChoice = choice.value.toLowerCase();
  let currentAnswer = flipCards[index].capital.toLowerCase();

  if (userChoice === currentAnswer) {
    score++;
  }

  index++;
  choice.value = "";
  if (index < flipCards.length) {
    createFlashCard();
  } else {
    let winMessage = `
      <h1 class="win">You scored ${score} out of ${flipCards.length}</h1>
    `;

    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", winMessage);
    remove();
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  //The HTMLElement.click() method simulates a mouse click on an element.
  let card = document.querySelector(".card");

  card.click();
});
restartButton.addEventListener("click", restart);
