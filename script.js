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
  var correctPassword = "05-11-09";
  var maxAttempts = 3;
  // Retrieve any previous attempt count from localStorage (or start at 0)
  var attemptCount = parseInt(localStorage.getItem('attemptCount')) || 0;
  
  // Get the necessary elements
  var unlockButton = document.getElementById('unlock-button');
  var lockScreen = document.getElementById('lock-screen');
  var lockMessage = document.getElementById('lock-message');
  var lockInput = document.getElementById('lock-password');

  // Check if the user is already locked out
  if (localStorage.getItem('lockedOut') === 'true') {
    lockInput.disabled = true;
    unlockButton.disabled = true;
    lockMessage.textContent = "Too many incorrect attempts. You are locked out.";
  }
  
  // Disable further attempts and store lock state in localStorage
  function disableLock() {
    lockInput.disabled = true;
    unlockButton.disabled = true;
    lockMessage.textContent = "Too many incorrect attempts. You are locked out.";
    localStorage.setItem('lockedOut', 'true');
  }
  
  // Function to attempt unlocking the site
  function attemptUnlock() {
    // If already locked out, do nothing
    if (localStorage.getItem('lockedOut') === 'true') {
      return;
    }
    
    var enteredPassword = lockInput.value;
    if (enteredPassword === correctPassword) {
      // Add the fade-out class for a smooth transition
      lockScreen.classList.add('fade-out');
      // After the transition (0.5s), hide the lock screen and re-enable scrolling
      setTimeout(function() {
         lockScreen.style.display = 'none';
         document.body.style.overflow = 'auto';
      }, 500);
      // Clear any stored attempt count or lock flag (optional)
      localStorage.removeItem('attemptCount');
      localStorage.removeItem('lockedOut');
    } else {
      attemptCount++;
      localStorage.setItem('attemptCount', attemptCount);
      if (attemptCount >= maxAttempts) {
        disableLock();
      } else {
        lockMessage.textContent = "Incorrect password. Please try again.";
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
