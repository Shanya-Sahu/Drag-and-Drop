let boxs = document.getElementsByClassName("box");
let imgBox = document.querySelector(".imgBox");
let msg = document.querySelector(".msg");
let resetBtn = document.querySelector(".resetBtn");


//event listeners for dragable imgbox
imgBox.addEventListener("dragstart", (e) => {
  console.log("DragStart has been triggered!");
  msg.textContent = "DragStart has been triggered!";
  e.target.className += " hold";

  //when everythings have done then it'll be apply
  setTimeout(() => {
    e.target.className += "hide";
  }, 0);
});

imgBox.addEventListener("dragend", (e) => {
  console.log("DragEnd has been triggered!");
  e.target.className = "imgBox";
});

for (box of boxs) {
  box.addEventListener("dragover", (e) => {
    e.preventDefault();
    console.log("DragOver has been triggered!");
    msg.textContent = "DragOver has been triggered!";
  });

  box.addEventListener("dragenter", (e) => {
    console.log("Dragenter has been triggered!");
    msg.textContent = "Dragenter has been triggered!";
  });

  box.addEventListener("dragleave", () => {
    console.log("Dragleave has been triggered!");
    msg.textContent = "Dragleave has been triggered!";
  });

  box.addEventListener("drop", (e) => {
    console.log("Dragdrop has been triggered!");
    msg.textContent = "Dragdrop has been triggered!";
    e.target.append(imgBox);
    resetBtn.style.display="block";
  });
}

function reset() {
  location.reload();
}
