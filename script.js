let list = document.getElementById("list");
let input = document.getElementById("input");
function add() {
  if (input.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = input.value;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
}
