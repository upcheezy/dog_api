'use strict';

function dogImage(userVal) {
    if (userVal > 50) {
        alert(`sorry, that's too many puppies`)
    } else {
        $('#image-cont').empty();
        fetch(`https://dog.ceo/api/breeds/image/random/${userVal}`)
            .then(response => response.json())
            .then(responseJson =>
                displayResults(responseJson))
            .catch(error => alert('Something went wrong. Try again later.'));
    }
    // return responseJson.message
}

function displayResults(responseJson) {

    for (let i = 0; i < responseJson.message.length; i++) {
        console.log(responseJson.message[i]);
        $('#image-cont').append(`<img src="${responseJson.message[i]}" class="results-img">`);
    }
    console.log(responseJson.message.length);
    // dogImage();
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        console.log('button clicked')
        const userTextElement = $(event.currentTarget).find('#pic-num');
        const userVal = userTextElement.val()
        //   console.log('usertextelement' + userTextElement.val())
        //   dogImage(userVal);
        console.log(userVal + ' userval')
        dogImage(userVal);
    });
}

$(watchForm())