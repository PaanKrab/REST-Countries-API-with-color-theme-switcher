const modeChange = document.querySelector(".dark__mode");
const inputSearch = document.querySelector(".search");
const btn = document.querySelector(".button");
const countriesSection = document.querySelector(".countries");
const country = document.querySelector("country")
const africaRegion = document.querySelector(".africa");
const americaRegion = document.querySelector(".america");
const asiaRegion = document.querySelector(".asia");
const europeRegion = document.querySelector(".europe");
const oceaniaRegion = document.querySelector(".oceania");
const modal = document.querySelector(".modal");
const main = document.querySelector("main");
const header = document.querySelector("header");
const dropBtn = document.querySelector(".drop__btn");
const dropContent = document.querySelector(".drop__content");
const container = document.querySelector(".container");
const btnBack = document.querySelector(".back");
const desc1 = document.querySelector(".desc1");
const description = document.querySelector(".description");
const countryContainer = document.querySelector(".countries")


//filter
function filterByRegion(region) {
  const countryElements = document.querySelectorAll(".country");
  countryElements.forEach(function (countryElement) {
    const regionElement = countryElement.querySelector(".reg");
    if (regionElement.textContent !== region) {
      countryElement.classList.add("hidden");
    } else {
      countryElement.classList.remove("hidden");
    }
  });
}

europeRegion.addEventListener("click", function () {
  filterByRegion("Europe");
});
oceaniaRegion.addEventListener("click", function () {
  filterByRegion("Oceania");
});
africaRegion.addEventListener("click", function () {
  filterByRegion("Africa");
});
asiaRegion.addEventListener("click", function () {
  filterByRegion("Asia");
});
americaRegion.addEventListener("click", function () {
  filterByRegion("Americas");
});



btn.addEventListener("click", function () {
  //getting data
  const getAndPut = async function () {
    const data = await fetch("data.json");
    const result = await data.json();


    //looping over data and finding country from input
    let html;
    for (let i = 0; i < result.length; i++) {
      if (result[i].name === inputSearch.value) {
        html = `<div class="country">
            <div class="flag"><img src="${result[i].flag}" alt="flag" /></div>
            <section class="description">
              <h1 class="name">${result[i].name}</h1>
              <p class="population">Population: <span class="pop"> ${result[i].population}</span></p>
              <p class="region">Region: <span class="reg">${result[i].region}</span></p>
              <p class="capital">Capital: <span class="cap">${result[i].capital}</span></p>
              </section>
            `;
      }


      countriesSection.addEventListener("click", function (e) {
        let htmlModal;
        if (result[i].name === e.target.textContent) {
          countriesSection.classList.add("hidden");
          modal.classList.remove("hidden");
          container.style.backgroundColor = "white";
          btnBack.classList.remove("hidden")
          if (!modal.querySelector(".main__modal")) {
          htmlModal = `
          <main class="main__modal">
          <div class="flag__modal"><img src="${
            result[i].flag
          }" alt="flag" /></div>
          <h1 class="name__modal">${result[i].name}</h1>
          <section class="desc">
          <div class="desc1">
          <p class="native__modal"> <span class="span__nat">Native Name: </span>${
            result[i].nativeName
          }</p>
          <p class="pop__modal"> <span class="span__pop">Population: </span> ${
            result[i].population
          }</p>
          <p class="region__modal"> <span class="span__reg">Region: </span>${
            result[i].region
          }</p>
          <p class="sub__region-modal"> <span class="sub__span">Sub Region: </span> ${
            result[i].subregion
          }</p>
          <p class="capital__modal"> <span class="span__cap">Capital: </span>${
            result[i].capital
          }</p>
        </div>
        <div class="desc2">
          <p class="domain__modal"> <span class="span__dom">Top Level Domain: </span>${
            result[i].topLevelDomain
          }</p>
          <p class="curr_modal"> <span class="span__cur">Currencies: </span>${
            result[i].currencies[0].name
          }</p>
          <p class="lang__modal"> <span class="span__lang">Languages: </span>${result[i].languages.map((language) => language.name).join().replaceAll(",", ", ")}</p>
        </div>
      </section>
      <div class="borders">
          <h1 class="border__countries">Border Countries:</h1>
          <div class="b__modal">${result[i].borders
            .join()
            .replaceAll(",", ", ")}</div>
          `;
          modal.insertAdjacentHTML("afterbegin", htmlModal);
        }
      }});
    }

    //no matching country
    if (result.length === 0 || !html) {
      return; // Return from the function if no results or matching country found
    }
    //injecting html
    countriesSection.insertAdjacentHTML("afterbegin", html);
  };
  getAndPut();
});

btnBack.addEventListener("click", function () {
  countriesSection.classList.remove("hidden");
  modal.classList.add("hidden");
  container.style.backgroundColor = "hsl(0, 0%, 98%)";
  modal.innerHTML = ``
  btnBack.classList.add("hidden")
});

modeChange.addEventListener("click", function(){
  modeChange.classList.toggle("mode__change")
  if(modeChange.classList.contains("mode__change")) {
  container.style.backgroundColor = "hsl(207, 26%, 17%)"
  main.style.backgroundColor = "hsl(207, 26%, 17%)";
  countriesSection.style.backgroundColor = "hsl(207, 26%, 17%)";
  container.style.color = "hsl(0, 0%, 100%)"
  header.style.backgroundColor = "hsl(209, 23%, 22%)"
  inputSearch.style.backgroundColor = "hsl(209, 23%, 22%)"
  inputSearch.style.color = "hsl(0, 0%, 100%)"
  dropBtn.style.backgroundColor = "hsl(209, 23%, 22%)"
  dropBtn.style.color = "hsl(0, 0%, 100%)"
  dropContent.style.backgroundColor = "hsl(209, 23%, 22%)"
  africaRegion.style.color = "hsl(0, 0%, 100%)"
  americaRegion.style.color = "hsl(0, 0%, 100%)"
  asiaRegion.style.color = "hsl(0, 0%, 100%)"
  europeRegion.style.color = "hsl(0, 0%, 100%)"
  oceaniaRegion.style.color = "hsl(0, 0%, 100%)"
  modal.style.backgroundColor = "hsl(207, 26%, 17%)"
  }
  if(!modeChange.classList.contains("mode__change")) {
    container.classList.remove("modeChange")
    container.style.backgroundColor = "hsl(0, 0%, 98%)"
    main.style.backgroundColor = "hsl(0, 0%, 98%)";
    countriesSection.style.backgroundColor = "hsl(0, 0%, 98%)";
    container.style.color = "black"
    header.style.backgroundColor = "white"
    inputSearch.style.backgroundColor = "white"
    inputSearch.style.color = "black"
    dropBtn.style.backgroundColor = "white"
    dropBtn.style.color = "black"
    dropContent.style.backgroundColor = "white"
    africaRegion.style.color = "black"
    americaRegion.style.color = "black"
    asiaRegion.style.color = "black"
    europeRegion.style.color = "black"
    oceaniaRegion.style.color = "black"
    modal.style.backgroundColor = "white"
  }
})





//pressing by enter
inputSearch.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    btn.click();
  }
});
