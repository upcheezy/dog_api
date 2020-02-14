'use strict';

function dogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(responseJson => console.log(responseJson))
    .catch(error => alert('Something went wrong. Try again later.'));
}

function displayResults(userVal) {
    for (let i=0; i<userVal; i++) {
        // console.log(i);
        dogImage();
    }
}

function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      console.log('button clicked')
      const userTextElement = $(event.currentTarget).find('#pic-num');
      const userVal = userTextElement.val()
      console.log('usertextelement' + userTextElement.val())
      displayResults(userVal);
    });
  }

$(watchForm())