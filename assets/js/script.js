// Variables
var quizStart = document.querySelector('#startbtn')
var quizScore = document.querySelector('#scorebtn')
var startScreen = document.querySelector('.startscreen')
var startContent = document.querySelector('.startcontent')
var quizContent = document.querySelector('.quizContent')









quizStart.addEventListener("click", function(event) {
startScreen.classList.add("remove");
startContent.classList.add("remove");
quizContent.classList.remove("remove");
// remove .remove from question section
// start timer
// reveal score
}
);