const buttons = document.querySelectorAll('.btn-items button');
let rating;

function setActive() {
  buttons.forEach((button) => {
    button.classList.remove('active');
  });
  this.classList.add('active');
  rating = this.textContent;
}

buttons.forEach((button) => {
  button.addEventListener('click', setActive);
});

const submitButton = document.querySelector('.btn');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  if (rating) {
    window.location.href = `thanks.html?rating=${rating}`;
  } else {
    alert('Please select a rating before submitting!');
  }
});

function selectRating(rating) {
    // Remove the "selected" class from all buttons
    const buttons = document.querySelectorAll('.btn-items button');
    buttons.forEach(button => button.classList.remove('selected'));
  
    // Add the "selected" class to the clicked button
    const selectedButton = document.querySelector(`.item${rating}`);
    selectedButton.classList.add('selected');
  
    // Save the selected rating to localStorage
    localStorage.setItem('selectedRating', rating);
  }
  