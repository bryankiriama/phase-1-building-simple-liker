// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener('DOMContentLoaded', () => {
  // Step 1: Add the .hidden class to the error modal
  const errorModal = document.getElementById('modal');
  errorModal.classList.add('hidden');

  // Step 2: Add click event listener to empty hearts
  const emptyHearts = document.querySelectorAll('.like-glyph');
  emptyHearts.forEach(emptyHeart => {
    emptyHeart.addEventListener('click', () => {
      // Step 3: Invoke mimicServerCall to simulate making a server request
      mimicServerCall()
        .then(() => {
          // Step 4: Change the heart to a full heart on success
          emptyHeart.classList.add('activated-heart');
        })
        .catch(() => {
          // Step 5: Display the error modal on failure
          errorModal.classList.remove('hidden');
          // Step 6: Display the server error message in the modal
          const errorMessage = document.getElementById('modal-message');
          errorMessage.textContent = "Server failed to process your request.";
          // Step 7: Use setTimeout to hide the modal after 3 seconds
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    });
  });
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
