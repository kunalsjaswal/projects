
var body = document.getElementById("body");
var slider = document.getElementById("slider");
var hh=document.getElementById("hh");
// var header
function golight() {
    body.style.background = "white";
    slider.style.marginLeft = "-5%";
    header.style.background = "rgb(228, 214, 187)";
    searchbar.style.background = "white";
    searchbt.style.background = "white";
    searchbar.style.color = "black";
    searchbt.style.color = "black";
    hh.style.color = "black";
}

function godark() {
    body.style.background = "black";
    slider.style.marginLeft = "70%";
    header.style.background = "red";
    searchbar.style.background = "black";
    searchbt.style.background = "black";
    searchbar.style.color = "white";
    searchbt.style.color = "white";
    hh.style.color = "white";
}


// rental
var list = document.getElementById("ul2");
var count = 0;
function showlist() {
    if (count % 2 == 0) {
        list.style.display = "block";
        
    }
    else {
        list.style.display = "none";
        
    }
    count++;
}

