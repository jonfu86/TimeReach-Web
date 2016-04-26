// function showProjectAbstract () {

// }

// function showHowItWorks() {

// }

// function showContact() {

// }
var wrapper = document.getElementById("wrapper");
 
 wrapper.addEventListener("click", function(e){
    if(e.target && e.target.nodeName == "LI") {
        console.log(e.target);
    }
});