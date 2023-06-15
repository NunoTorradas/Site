

// Get all the questions
const questions = document.querySelectorAll('.question');

// Add a click event listener to each question
questions.forEach(question => {
  const title = question.querySelector('.question-title');
  const answer = question.querySelector('.answer');

  title.addEventListener('click', () => {
    answer.classList.toggle('show');
  });
});


// Select all toggle buttons
var toggleButtons = document.querySelectorAll('.toggle-button');

// Add an event listener to each button
toggleButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    // Find the corresponding answer to the clicked button
    var answer = this.parentNode.querySelector('.answer');

    // Toggle the visibility of the answer
    answer.classList.toggle('show');
  });
});
