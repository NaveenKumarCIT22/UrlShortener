import "./style.css";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
<div class="wrapper">
<div class="url-container">
  <h1>Enter your URL here:</h1>
  <input
    type="url"
    name="url"
    id="url"
    placeholder="Anything entered here will be shortened 💀"
  />
  <button type="button" class="button">Hit Me 🎯</button>
  <label class="short-url">https://shortened-url.com</label>
  <div class="new-link">
    <button type="button" class="copy">Copy</button>
    <button type="button" class="direct">Take Me There</button>
  </div>
</div>
</div>
</div>
`;

setupCounter(document.querySelector("#counter"));
