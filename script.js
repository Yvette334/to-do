let list = document.getElementById("list");
let input = document.getElementById("input");
const priority = document.getElementById("priority");
const category = document.getElementById("category");
function add() {
  if (input.value === "") {
    alert("Please enter a task");
  } else {
    let li = document.createElement("li");
    li.innerHTML = `
      <table style='width:100%'>
        <tr>
          <td>${input.value}</td>
          <td>${priority.value}</td>
          <td>${category.value}</td>
        </tr>
      </table>
    `;
    list.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
    save();
  }
  input.value = "";
}
list.addEventListener("click", (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("checked");
    save();
  }
  if (e.target.tagName === "SPAN") {
    if (confirm("Are you sure you want to delete the task?")) {
      e.target.parentElement.remove();
      save();
    }
  }
});

function save() {
  localStorage.setItem("data", list.innerHTML);
}
function show() {
  list.innerHTML = localStorage.getItem("data");
}
show();
