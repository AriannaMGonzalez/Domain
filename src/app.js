/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let adress = [".com", ".net", ".org", ".io"];
let newDomain = "";
let tgtDomain = document.querySelector("#domain");

window.onload = function() {
  setDomain();
  tgtDomain.innerHTML = newDomain;
};

const setdomain = () => {
  for (let a = 0; a < pronoun.length; a++) {
    for (let b = 0; b < adj.length; b++) {
      for (let c = 0; c < noun.length; c++) {
        for (let d = 0; d < adress.length; d++) {
          newDomain += pronoun[a] + adj[b] + noun[c] + adress[d];
          +"<br/>";
        }
      }
    }
  }

  return newDomain;
};
