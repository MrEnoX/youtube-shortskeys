// ==UserScript==
// @name         YouTube ShortsKeys
// @namespace    https://github.com/MrEnoX/
// @version      1.0.0
// @description  Adds ArrowRight and ArrowLeft keys to YouTube Shorts same as ArrowUp and ArrowDown!
// @author       MrEnoX
// @homepage     https://github.com/MrEnoX/youtube-shortskeys/
// @source       https://raw.githubusercontent.com/MrEnoX/youtube-shortskeys/main/main.js
// @match        *://*.youtube.com/*
// @match        *://*.youtube-nocookie.com/*
// @icon         https://productsummaryprod.blob.core.windows.net/logos/45366be9-2045-42b4-ae59-927a4b361724?skoid=e496550c-7111-42d0-887e-0a7eaa90711d&sktid=975f013f-7f24-47e8-a7d3-abc4752bf346&skt=2023-03-01T01%3A30%3A36Z&ske=2023-03-08T01%3A30%3A36Z&sks=b&skv=2021-10-04&sv=2021-10-04&st=2023-03-01T14%3A49%3A23Z&se=2023-03-01T22%3A49%3A23Z&sr=b&sp=r&sig=eTDORjU3Td6sHNlU1m7PeiINF%2BGdzRxebXk1fnRmLNU%3D
// @grant        none
// ==/UserScript==

console.log("YouTube ShortsKeys")

//for key codes look here: https://www.toptal.com/developers/keycode
const upkey = "ArrowLeft";
const downkey = "ArrowRight";

document.addEventListener("keydown", function(event) {
  if (event.code === upkey) {
    const shortsContainer = document.querySelector("#shorts-container");
    if (shortsContainer) {
      shortsContainer.scrollBy(0, 100);
	  console.log("DOWN")
    }
  }
});

document.addEventListener("keyup", function(event) {
  if (event.code === downkey) {
    const shortsContainer = document.querySelector("#shorts-container");
    if (shortsContainer) {
      shortsContainer.scrollBy(0, -100);
	  console.log("UP")
    }
  }
});
