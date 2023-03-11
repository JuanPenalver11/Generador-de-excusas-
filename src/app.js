/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = excuseGenerator();
  });
};

let excuseGenerator = () => {
  let article = ["The", "A"];
  let noun = ["jogger", "dog", "dolphin", "umbrella"];
  let verb = ["is"];
  let gerundif = ["running", "barking", "red", "swimming"];

  let articleIndex = Math.floor(Math.random() * article.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let verbIndex = Math.floor(Math.random() * verb.length);
  let gerundifIndex = Math.floor(Math.random() * gerundif.length);

  return (
    article[articleIndex] +
    " " +
    noun[nounIndex] +
    " " +
    verb[verbIndex] +
    " " +
    gerundif[gerundifIndex]
  );
};
