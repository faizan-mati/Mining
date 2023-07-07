document.addEventListener("DOMContentLoaded", function () {
  var questions = document.getElementsByClassName("question");

  for (var i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", function () {
      var answer = this.nextElementSibling;

      if (answer.style.display === "block") {
        answer.style.display = "none";
      } else {
        answer.style.display = "block";
      }
    });
  }
});


//    login

// const wrapper = document.querySelector('.wrapper');
// const signUpLink = document.querySelector('signUp-link');
// const signInLink = document.querySelector('signIn-link');

// signUpLink.addEventListener('click', () =>{
//     wrapper.classList.toggle('show-sign');
// });

// signInLink.addEventListener('click', () =>{
//     wrapper.classList.toggle('show-sign');
// });




// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// Get the modal
var modal = document.getElementById('id02');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

