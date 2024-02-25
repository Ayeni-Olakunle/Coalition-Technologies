function externalLink() {
  alert("This is an External Link to another page");
}

function changeClass2() {
  let element = document.getElementById("clickme2");
  let element2 = document.getElementById("clickme");
  let element3 = document.getElementById("Schedule");
  element.className = "change1";
  element2.className = "change2";
}

function changeClass() {
  let element = document.getElementById("clickme2");
  let element2 = document.getElementById("clickme");
  element.className = "change2";
  element2.className = "change1";
}
