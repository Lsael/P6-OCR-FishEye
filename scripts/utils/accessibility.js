const onKeyDown = (event) => {
    if(event.key === "Enter") {
      event.target.onclick()
    }
  }

const navigateWithArrow = (event) => {
  switch(event.key) {
    case "ArrowLeft":
      document.querySelector("#previous-image-button").onclick();
      break;
    case "ArrowRight":
      document.querySelector("#next-image-button").onclick();
      break;
  }
}