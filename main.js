'use strict';

function dogImage(userVal) {
    $('#image-cont').empty();
    fetch(`https://dog.ceo/api/breed/${userVal}/images/random`)
        .then(response => {
            if (response.status === 200) {
                response.json()
                .then(responseJson =>
                    displayResults(responseJson));
            } else {
                failed(response)
            }
            console.log(response);
        })
        .catch(error => handleErrors());
    // return responseJson.message
}

function handleErrors() {
    alert(`sorry, that breed was not found`);
}

function displayResults(responseJson) {
    $('#image-cont').append(`<img src="${responseJson.message}" class="results-img">`);
    // console.log(responseJson.message.length);
    // dogImage();
}

function watchForm() {
    $('form').submit(event => {
        event.preventDefault();
        console.log('button clicked')
        const userTextElement = $(event.currentTarget).find('#pic-num');
        const userVal = userTextElement.val()
        console.log('usertextelement ' + userTextElement.val())
        //   dogImage(userVal);
        dogImage(userVal);
    });
}

$(watchForm())