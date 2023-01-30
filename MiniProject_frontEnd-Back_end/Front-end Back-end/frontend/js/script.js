const searchBtn = document.getElementById("search-btn");
const searchValue = document.getElementById("search-value");
const cardContainer = document.getElementById("card-container");
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(searchValue.value);
  getBreedsByString(searchValue.value);
});
//elementi del modale + evento modale
const saveBtn = document.getElementById("save-btn");
const nome = document.getElementById("name");
const description = document.getElementById("description");
const imageurl = document.getElementById("imageurl");
const train = document.getElementById("train");
const minls = document.getElementById("minls");
const maxls = document.getElementById("maxls");
const size = document.getElementById("size");
saveBtn.addEventListener("click", () => {
  string = {
    name: nome.value,
    description: description.value,
    imageUrl: imageurl.value,
    trainability: train.value,
    minLifeSpan: minls.value,
    maxLifeSpan: maxls.value,
    size: size.value,
  };
  if (string.minLifeSpan > string.maxLifeSpan) {
    console.log("minLifeSpan must be less than maxLifeSpan");
  } else if (!validURL(string.imageUrl)) {
    console.log("Url not valid");
  } else if (string.name === "" || string.name === null) {
    console.log("name must be defined");
  } else if (string.description === "" || string.description === null) {
    console.log("description must be defined");
  } else {
    const stringJSON = JSON.stringify(string);
    createNewDog(stringJSON);
  }
});

const BASE_URL = "http://localhost:8080/api/";

//FUNZIONI
function HTMLChange(string) {
  cardContainer.innerHTML = string;
  const deleteBtn = document.querySelectorAll("[data-deleteid]");
  deleteBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      deleteById(event.target);
    });
  });
}

//funzione async getAllBreeds
const getAllBreeds = async () => {
  try {
    const result = await fetch(BASE_URL + "breeds");

    if (result.ok) {
      const data = await result.json();
      buildString(data);
    } else {
      console.log(result.status);
    }
  } catch (error) {
    console.log(error);
  }
};

//funzione async getBreedsByString
const getBreedsByString = async (uri) => {
  try {
    const result = await fetch(BASE_URL + "breeds" + "?keyword=" + uri);
    if (result.ok) {
      const data = await result.json();
      buildString(data);
    } else {
      console.log(result.status);
    }
  } catch (error) {
    console.log(error);
  }
};

//funzione costruzione stringa
function buildString(data) {
  console.log(data);
  string = "";
  data.forEach((element) => {
    string += `<div class="col-12 mb-5 col-lg-4 col-md-6">
                <div class="card h-100  p-0 mx-3 my-3" style="width: 18rem">
              <img
                src="${element.imageUrl}"
                class="card-img-top"
                alt="${element.name} image"
              />
              <div class="card-body">
                <h4 class="card-text">${element.name}</h4>
              </div>
              <div class="card-body">
                <p class="card-text">
                  ${element.description}
                </p>
              </div>
              ${star(element)}
              <div class="d-grid m-2">
                <button class="btn btn-secondary" data-deleteid="${
                  element.id
                }">Delete</button>
            </div>
            <div class="card-footer d-flex justify-content-between">
                <span><i class="fa-solid fa-ruler-combined"></i>${
                  element.size
                }</span>
                <span><i class="fa-solid fa-heart-pulse"></i>${
                  element.minLifeSpan
                }-${element.maxLifeSpan} years</span>
            </div>
            </div>
            </div> `;
  });

  HTMLChange(string);
}

//funzione per le stelle di trainability
function star(element) {
  let string = ` <div class="card-body">Trainability <p>`;
  let i = 0;
  for (i = 0; i < element.trainability; i++) {
    string += `<i class="fa-solid fa-star"></i>`;
  }
  for (j = i; j < 5; j++) {
    string += `<i class="fa-regular fa-star"></i>`;
  }
  string += `</p></div>`;
  return string;
}

//funzione per la delete del singolo elemento
const deleteById = async (target) => {
  console.log(target.dataset.deleteid);

  const result = await fetch(BASE_URL + "breeds/" + target.dataset.deleteid, {
    method: "DELETE",
  });
  if (result.ok) {
    getAllBreeds();
  }
};
//funzione per la create
const createNewDog = async (string) => {
  console.log(string);
  try {
    const result = await fetch(BASE_URL + "breeds", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: string,
    });
    if (result.ok) {
      getAllBreeds();
    }
  } catch (error) {
    console.log(error);
  }
};

// funzione validazione url
function validURL(str) {
  var pattern = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // fragment locator
  return !!pattern.test(str);
}

//CORPO
getAllBreeds();
