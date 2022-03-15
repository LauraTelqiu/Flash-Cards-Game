let container = document.querySelector(".container");
let nextQuestion = document.querySelector(".nextQuestion");
let form = document.querySelector("form");
let choice = document.querySelector("#choice");

let index = 0;
let score = 0;

let flipCards = [
  {
    front: "France",
    back: "Paris",
  },
  {
    front: "Spain ",
    back: "Madrid",
  },
  {
    front: "Italy",
    back: "Rome",
  },
  {
    front: "Germany",
    back: "Berlin",
  },
  {
    front: "Austria",
    back: "Vienna",
  },
  {
    front: "Albania",
    back: "Tirana",
  },
];

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
    <div class="card" data-country=${card.front} data-capital=${card.back}>${card.front}</div>
  `;

  container.innerHTML = "";
  container.insertAdjacentHTML("beforeend", flashCard);
  cardEvent();
}

createFlashCard();

nextQuestion.addEventListener("click", (e) => {
  index++;
  choice.value = "";
  if (index < flipCards.length) {
    createFlashCard();
  } else {
    let winMessage = `
      <h1 class="win">Great job! You scored ${score} out of ${flipCards.length}</h1>
    `;

    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", winMessage);
  }
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = Object.fromEntries(new FormData(e.target).entries());

  let userChoice = data.choice.toLowerCase();
  let currentAnswer = flipCards[index].back.toLowerCase();

  if (userChoice === currentAnswer) {
    score++;
  }

  console.log(score);

  let card = document.querySelector(".card");
  card.click();
});

// let userInput = ""
// let score = 0;
// function playGame() {
//   let inputText = document.querySelectorAll("#choice").inputText
//     inputText.forEach(card) => {

//   }

// }

/*
let card = document.querySelectorAll(".card");
card.forEach((element) => {
  //add eventlistener to flip the card
  addEventListener("click", (event) => {
    if (event.target.classList.contains()) {
      event.target.classList.remove();
      console.log(event.target);
    } else {
      event.target.classList.add();
      console.log(event.target.classList);
    }
  });
});

*/

// flipCards.forEach((card) => {
//   let flashCard = `
//     <div class="cards" data-country=${card.front} data-capital=${card.back}>${card.front}</div>
//   `;

//   container.insertAdjacentHTML("beforeend", flashCard);
// });