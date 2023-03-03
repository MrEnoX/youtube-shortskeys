// ==UserScript==
// @name         YouTube ShortsKeys
// @namespace    https://github.com/MrEnoX/
// @version      1.1.0
// @description  Adds ArrowRight and ArrowLeft keys to YouTube Shorts same as ArrowUp and ArrowDown!
// @author       MrEnoX
// @homepage     https://github.com/MrEnoX/youtube-shortskeys/
// @source       https://raw.githubusercontent.com/MrEnoX/youtube-shortskeys/main/main.js
// @match        *://*.youtube.com/*
// @match        *://*.youtube-nocookie.com/*
// @icon         https://raw.githubusercontent.com/MrEnoX/youtube-shortskeys/main/icon.png
// @grant        none
// @license      MIT
// @compatible   chrome
// @compatible   edge
// @compatible   firefox
// @compatible   opera
// @compatible   safari
// ==/UserScript==
 
console.log("YouTube ShortsKeys")
 
//for key codes look here: https://www.toptal.com/developers/keycode
// HERE IS FOR CHANGING THE KEYS YOU WANT TO USE
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
