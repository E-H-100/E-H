document.addEventListener('DOMContentLoaded', function() {
  console.log("Website template loaded successfully!");
});
document.addEventListener('DOMContentLoaded', function() {
  console.log("Website template loaded successfully!");
});

window.addEventListener('load', function() {
  var loader = document.getElementById('loader');
  if(loader) {
    loader.style.display = 'none';
  }
});
// Wait for the page to fully load
window.addEventListener('load', function() {
  // Define your password (change "1234" to your preferred password)
  var correctPassword = "1234";
  var maxAttempts = 3;
  var attemptCount = 0;
  
  // Get the necessary elements
  var unlockButton = document.getElementById('unlock-button');
  var lockScreen = document.getElementById('lock-screen');
  var lockMessage = document.getElementById('lock-message');
  var lockInput = document.getElementById('lock-password');
  
  // Disable further attempts after exceeding max attempts
  function disableLock() {
    lockInput.disabled = true;
    unlockButton.disabled = true;
    lockMessage.textContent = "Too many incorrect attempts. Please refresh the page to try again.";
  }
  
  // Function to attempt unlocking the site
  function attemptUnlock() {
    var enteredPassword = lockInput.value;
    if (enteredPassword === correctPassword) {
      // Hide the lock screen if the password is correct
      lockScreen.style.display = 'none';
      // Re-enable scrolling
      document.body.style.overflow = 'auto';
    } else {
      attemptCount++;
      if (attemptCount >= maxAttempts) {
        disableLock();
      } else {
        // Display an error message if the password is incorrect
        lockMessage.textContent = "Incorrect password. Please try again.";
        // Clear the input field for another try
        lockInput.value = '';
      }
    }
  }
  
  // Unlock on button click
  unlockButton.addEventListener('click', function() {
    attemptUnlock();
  });
  
  // Unlock when the Enter key is pressed in the input field
  lockInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter' || e.keyCode === 13) {
      attemptUnlock();
    }
  });
  
  // Prevent scrolling while the lock screen is active
  document.body.style.overflow = 'hidden';
});
