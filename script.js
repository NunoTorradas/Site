document.addEventListener("DOMContentLoaded", function() {
  const questions = document.querySelectorAll(".question");

  questions.forEach(function(question) {
    question.addEventListener("click", function() {
      this.classList.toggle("active");
    });
  });
});
