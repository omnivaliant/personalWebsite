function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("Text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    document.getElementById(data).innerHTML = "Thank you! :)"
    document.getElementById(data).style.color = "aquamarine";
    ev.target.appendChild(document.getElementById(data));
}