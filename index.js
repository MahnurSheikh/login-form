
document.getElementById('Signup').addEventListener('click', function() {
  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let password = document.getElementById('password').value;
  let cpass = document.getElementById('cpass').value;
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 
  let regexp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/; 
  
  // Validate email
  if (!emailPattern.test(email)) {
    alert("Email is not valid");
    return;
  }

  // Validate password
  if (!regexp.test(password)) {
    alert("Password must be strong and at least 8 characters");
    return;
  }

  // Validate confirm password
  if (password !== cpass) {
    alert("Confirm Password does not match with Create Password");
    return;
  }
  
alert(`Thank you, ${name}! Signup successful! Welcome aboard.`)
document.getElementsByClassName('form').reset()
});
document.getElementById('togglePassword').addEventListener('click', function () {
          let passwordField = document.getElementById('password');
          let eyeIcon = document.getElementById('eyeIconPassword');

          if (passwordField.type === 'password') {
              passwordField.type = 'text';
              eyeIcon.classList.remove('fa-eye');
              eyeIcon.classList.add('fa-eye-slash');
          } else {
              passwordField.type = 'password';
              eyeIcon.classList.remove('fa-eye-slash');
              eyeIcon.classList.add('fa-eye');
          }
      });
      document.getElementById('toggleCPassword').addEventListener('click', function () {
                let cpasswordField = document.getElementById('cpass');
                let eyeIcon = document.getElementById('eyeIconCPassword');
    
                if (cpasswordField.type === 'password') {
                    cpasswordField.type = 'text';
                    eyeIcon.classList.remove('fa-eye');
                    eyeIcon.classList.add('fa-eye-slash');
                } else {
                    cpasswordField.type = 'password';
                    eyeIcon.classList.remove('fa-eye-slash');
                    eyeIcon.classList.add('fa-eye');
                }
            });
            

            