(function () {
  const draggableElement = document.getElementById("ex3_element");
  const containerOne = document.getElementById("ex3_one");
  const containerTwo = document.getElementById("ex3_two");

  function dragstartHandler(ev) {
    ev.dataTransfer.setData("text/html", ev.target.outerHTML);
  }

  draggableElement.addEventListener("dragstart", dragstartHandler);

  containerTwo.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  containerTwo.addEventListener("drop", (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text/html");
    e.target.innerHTML = data;
    containerOne.innerHTML = "";
  });
})();
