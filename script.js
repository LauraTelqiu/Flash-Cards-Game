let container = document.querySelector(".container");
let nextQuestion = document.querySelector(".nextQuestion");
let form = document.querySelector("form");
let choice = document.querySelector("#choice");
let restartButton = document.querySelector("#restartButton");

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

function shuffle() {
  for (let i = flipCards.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [flipCards[i], flipCards[j]] = [flipCards[j], flipCards[i]];
  }

  console.log(flipCards);
  flipCards = [...flipCards.splice(0, 10)];
  console.log(flipCards);
}

function handleClick(e) {
  if (e.target.innerHTML === e.target.dataset.capital) {
    e.target.innerHTML = e.target.dataset.country;
  } else {
    e.target.innerHTML = e.target.dataset.capital;
  }

  e.target.classList.toggle("flipped");
}

function cardEvent() {
  let card = document.querySelector(".card");
  card.addEventListener("click", handleClick);
}

function createFlashCard() {
  let card = flipCards[index];

  let flashCard = `
    <div class="card" data-country=${card.country} data-capital=${card.capital}>${card.country}</div>
  `;

  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", flashCard);
  cardEvent();
}

function restart() {
  restart = location.reload();
}

shuffle();
createFlashCard();

nextQuestion.addEventListener("click", (e) => {
  // index = Math.floor(Math.random() * (flipCards.length + 1));
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
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());

  let userChoice = data.choice.toLowerCase();
  let currentAnswer = flipCards[index].capital.toLowerCase();

  if (userChoice === currentAnswer) {
    score++;
  }

  console.log(score);

  let card = document.querySelector(".card");
  card.click();
});

restartButton.addEventListener("click", restart);

// flipCards.forEach((card) => {
//   let flashCard = `
//     <div class="cards" data-country=${card.country} data-capital=${card.capital}>${card.country}</div>
//   `;

//   container.insertAdjacentHTML("beforeend", flashCard);
// });
