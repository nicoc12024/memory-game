document.addEventListener("DOMContentLoaded", () => {
  // Variables
  const grid = document.querySelector(".grid");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];
  let lives = 7;
  const livesSpan = document.querySelector("span");

  // Card deck
  const cardArray = [
    {
      name: "burger",
      img: "images/burger.jpg",
    },
    {
      name: "car",
      img: "images/car.jpg",
    },
    {
      name: "cat",
      img: "images/cat.jpg",
    },
    {
      name: "dinosaur",
      img: "images/dinosaur.jpg",
    },

    {
      name: "lasagna",
      img: "images/lasagna.jpg",
    },
    {
      name: "sun",
      img: "images/sun.jpg",
    },
    {
      name: "burger",
      img: "images/burger.jpg",
    },
    {
      name: "car",
      img: "images/car.jpg",
    },
    {
      name: "cat",
      img: "images/cat.jpg",
    },
    {
      name: "dinosaur",
      img: "images/dinosaur.jpg",
    },

    {
      name: "lasagna",
      img: "images/lasagna.jpg",
    },
    {
      name: "sun",
      img: "images/sun.jpg",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  // Create board
  function createBoard() {
    cardArray.forEach((item, index) => {
      const card = document.createElement("img");
      card.setAttribute("src", "images/color.jpg");
      card.setAttribute("data-id", index);
      card.addEventListener("click", flipCard);
      grid.appendChild(card);
    });
  }

  // check for match
  function checkForMatch() {
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];

    if (cardsChosen[0] === cardsChosen[1]) {
      setTimeout(() => {
        cards[optionOneId].setAttribute("src", "images/blank.png");
        cards[optionTwoId].setAttribute("src", "images/blank.png");
        cardsWon.push(cardsChosen);
      }, 1000);
    } else {
      if (lives >= 1) {
        setTimeout(() => {
          cards[optionOneId].setAttribute("src", "images/color.jpg");
          cards[optionTwoId].setAttribute("src", "images/color.jpg");
          lives--;
          livesSpan.innerHTML = lives;
        }, 1000);
      }
    }

    cardsChosen = [];
    cardsChosenId = [];
    if (cardsWon.length === 5) {
      alertify.alert("Congratulations YOU WON", "Game will restart in 2 seconds!");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } else if (lives === 0) {
      alertify.alert("You lost", "Game will restart in 2 seconds!");
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
    console.log(cardsWon);
  }

  // flip your card
  function flipCard() {
    const cardId = this.getAttribute("data-id");
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      checkForMatch();
    }
  }

  createBoard();
});
