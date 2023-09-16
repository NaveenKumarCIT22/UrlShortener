import "./style.css";

var input_url = document.getElementsByTagName("input")[0];
const shorten = document.getElementsByClassName("shorten")[0];

shorten.addEventListener("click", shortenUrl);

function shortenUrl() {
  console.log(input_url.value);
}

// document.querySelector("#app").innerHTML = `
// <div class="wrapper">
// <div class="url-container">
//   <h1>Enter your URL here:</h1>
//   <input
//     type="url"
//     name="url"
//     id="url"
//     value=${input_url}
//     placeholder="Anything entered here will be shortened 💀"
//   />
//   <button type="button" class="button" onClick=${shortenUrl}>Hit Me 🎯</button>
//   <label class="short-url">https://shortened-url.com</label>
//   <div class="new-link">
//     <button type="button" class="copy">Copy</button>
//     <button type="button" class="direct">Take Me There</button>
//   </div>
// </div>
// </div>
// `;

// setupCounter(document.querySelector("#counter"));
