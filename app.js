function erase(){
 document.getElementById("txtarea").value=" ";
}

function bold(){
 document.getElementById("txtarea").style.fontWeight="900";
}

function toUpperCase(){
// upper = document.getElementById("txtarea").value;
// upper = upper.toUpperCase();
// document.getElementById("txtarea").value=upper;

document.getElementById("txtarea").style.textTransform ="uppercase";

}

function toLowerCase(){
// lower = document.getElementById("txtarea").value;
// lower = lower.toLowerCase();
// document.getElementById("txtarea").value=lower;

document.getElementById("txtarea").style.textTransform ="lowercase";

}

function capitalize(){
    document.getElementById("txtarea").style.textTransform = "capitalize";

}

function italic(){
    document.getElementById("txtarea").style.fontStyle = "italic";
}