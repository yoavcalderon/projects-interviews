function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    // console.log("drag");
    ev.dataTransfer.setData("uerPictureId", ev.target.id);
}

function drop(ev) {
    // console.log("drop")
    ev.preventDefault();
    const data = ev.dataTransfer.getData("uerPictureId");
    const child = document.getElementById(data);
    child.classList.add("resizable");
    child.classList.add("rotatable");

    ev.target.appendChild(child);
}