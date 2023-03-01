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