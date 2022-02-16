const actors = document.querySelector(".actors");
let url = "https://thronesapi.com/api/v2/Characters";
const handleData = (data) => {
  console.log(data);
  data.forEach((e) => {
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card-actor");
    actors.appendChild(cardDiv);

    const actorDiv = document.createElement("div");
    actorDiv.classList.add("actor-img");
    cardDiv.appendChild(actorDiv);

    const img = document.createElement("img");
    img.src = e.imageUrl;
    actorDiv.appendChild(img);

    const bodyDiv = document.createElement("div");
    bodyDiv.classList.add("card-body");
    cardDiv.appendChild(bodyDiv);

    const firstNameh2 = document.createElement("h2");
    firstNameh2.textContent = "FirstName:";
    bodyDiv.appendChild(firstNameh2);
    const firstNamespan = document.createElement("span");
    firstNamespan.textContent = e.firstName;
    firstNameh2.appendChild(firstNamespan);

    const lastName2 = document.createElement("h2");
    lastName2.textContent = "LastName:";
    bodyDiv.appendChild(lastName2);
    const lastNamespan = document.createElement("span");
    lastNamespan.textContent = e.lastName;
    lastName2.appendChild(lastNamespan);
  });
};
const fetch = (method, url, callback) => {
  const xhr = new XMLHttpRequest();

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText));
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
fetch("GET", url, handleData);
