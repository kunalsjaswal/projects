
var body = document.getElementById("body");
var slider = document.getElementById("slider");
var hh=document.getElementById("hh");
// var header
function golight() {
    body.style.background = "white";
    slider.style.marginLeft = "-5%";
    hh.style.color = "black";
}

function godark() {
    body.style.background = "black";
    slider.style.marginLeft = "70%";
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

shls=0
function showlist() {
    if (shls % 2 == 0) {
        ul2.style.display = "block";
    }
    else {
        ul2.style.display = "none";
    }
    shls++;
}


function borders() {
    sellbd.style.borderBottom = "5px solid white";
}
function bordersout() {
    sellbd.style.borderBottom = "0px";
}
function borders1() {
    rentbd.style.borderBottom = "5px solid white";
}
function bordersout1() {
    rentbd.style.borderBottom = "0px";
}
function borders2() {
    buybd.style.borderBottom = "5px solid white";
}
function bordersout2() {
    buybd.style.borderBottom = "0px";
}


function expanditemsfnx() {
    expanditems.style.display = "block";
    expandsale.style.display = "none";

}
function expanditemsfnx1() {
    expandsale.style.display = "block";
    expanditems.style.display = "none";

}
function closeitemsfnx() {
    expanditems.style.display = "none";
}
function closeitemsfnx1() {
    expandsale.style.display = "none";
}