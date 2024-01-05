
// Add active class to the current button (highlight it)
let btnContainer = document.getElementById("projectBtnContainer");
let btns = btnContainer.getElementsByClassName("project-btn");

for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    // Remove "active" class from all buttons
    for (let j = 0; j < btns.length; j++) {
      btns[j].classList.remove("active");
    }

    // Add "active" class to the clicked button
    this.classList.add("active");
  });
}


//Gallery Filter

filterSelection("debut")
function filterSelection(c) {
  let x, i;
  x = document.getElementsByClassName("column");
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  let i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}
