const mainSection = document.getElementById("cards");
const input = document.getElementById("input");
const URLS = "https://www.breakingbadapi.com/api/characters";

// function to add events to the btns and inputs
const addEvent = (selector, action, callback) => {
  return selector.addEventListener(action, callback);
};

// function to create requsets and applying the callback
const fetch = (method, url, callback) => {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        callback(JSON.parse(xhr.responseText));
      } else if (xhr.status === 404) {
        console.log("HTTP error 404 :page not found ");
      } else if (xhr.status === 500) {
        console.log("HTTP error 500 : Internal Server Error");
      }
    }
  };
  xhr.open(method, url);
  xhr.send();
};

// create createCards function
const createCards = (arr) => {
  arr.map((char) => {
    // create element's
    const cardsDiv = document.createElement("div");
    const frontCard = document.createElement("div");
    const innerCard = document.createElement("div");
    const cardBack = document.createElement("div");
    const imageTag = document.createElement("img");
    const detailsH1 = document.createElement("h1");
    const nameUlTag = document.createElement("ul");
    const nameLiTag = document.createElement("li");
    const nickNameLiTag = document.createElement("li");

    // set attribuetes to the element's
    cardsDiv.className = "card";
    frontCard.className = "card-front";
    innerCard.className = "card-inner";
    cardBack.className = "card-back";

    //   create deteils structure
    detailsH1.textContent = "Details";
    nameLiTag.textContent = `Name: ${char.name}`;
    nickNameLiTag.textContent = `Nickname: ${char.nickname}`;
    nameUlTag.appendChild(nameLiTag);
    nameUlTag.appendChild(nickNameLiTag);

    //   create the card back structur
    cardBack.appendChild(detailsH1);
    cardBack.appendChild(nameUlTag);

    //   create carr front
    imageTag.alt = `${char.name}`;
    imageTag.src = `${char.img}`;
    frontCard.appendChild(imageTag);

    //   create card inner
    innerCard.appendChild(frontCard);
    innerCard.appendChild(cardBack);

    //   create the final card
    cardsDiv.appendChild(innerCard);
    mainSection.appendChild(cardsDiv);
  });
};

fetch("GET", URLS, createCards);

// search function
addEvent(input, "click", searchCharacter);
function searchCharacter(e) {
  mainSection.innerHTML = " ";
  fetch("GET", URLS, (arr) => {
    let array = arr.map((element) => {
      return element;
    });
    createCards(search(array, input.value));
    input.value = " ";
  });
}
