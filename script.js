(function () {
  const containersHTML = [
    document.getElementById("ex3_one"),
    document.getElementById("ex3_two"),
  ];

  function dragstartHandler(ev) {
    const draggable = ev.target.closest("#ex3_element");
    if (!draggable) return;
    ev.dataTransfer.setData("text/html", draggable.outerHTML);
  }

  function dropHandler(ev) {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text/html");
    ev.target.innerHTML = data;
  }

  containersHTML.forEach((c, i) => {
    c.addEventListener("dragstart", dragstartHandler);
    c.addEventListener("dragover", (e) => {
      e.preventDefault();
    });
    c.addEventListener("drop", (e) => {
      dropHandler(e);
      if (i === 0) {
        containersHTML[1].innerHTML = "";
      } else {
        containersHTML[0].innerHTML = "";
      }
    });
  });
})();
