/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/


/* Give the <body> element a background of #bdc3c7*/
var bodyElement = document.getElementsByTagName("body");
bodyElement[0].style.backgroundColor= "#bdc3c7";

/* Make the <h1> element #9b59b6*/
var h1Element = document.getElementsByTagName("h1");
h1Element[0].style.color = "#9b59b6";

/* Make all <h2> elements orange */
var h2Elements = document.getElementsByTagName("h2");
for (i=0; i<h2Elements.length; i++){
    h2Elements[i].style.color = "orange";
}
/* Make all <li> elements blue(pick your own hexadecimal blue)*/
var liElements = document.getElementsByTagName("li");
for (i=0; i<liElements.length; i++) {
    liElements[i].style.color = "#0000fa";
}
/*Change the background on every paragraph to be yellow*/
var allPTags = document.getElementsByTagName("p");
for (i=0; i<allPTags.length; i++) {
    allPTags[i].style.backgroundColor = "yellow";
}

/*Make all inputs have a 3px red border*/
var allInputs = document.getElementsByTagName("input");
for(i=0; i<allInputs.length; i ++){
    allInputs[i].style.border = 3;
}

/* Give everything with the class 'hello' a white background*/
var helloClass = document.getElementsByClassName("hello");
for(i=0; i<helloClass.length; i ++){
    helloClass[i].style.backgroundColor= "white";
}

/* Give the element with id 'special' a 2px solid blue border(pick your own rgb blue)*/
var specialId = document.getElementById("special");
specialId.style.border= "solid blue";
specialId.style.border= 2;

/*Make all the <p>'s that are nested inside of divs 25px font(font-size: 25px)*/
var divPTags = document.querySelectorAll("div.p");
for(i=0; i<divPTags.length; i ++) {
    divPTags[i].style.fontsize(25);
}