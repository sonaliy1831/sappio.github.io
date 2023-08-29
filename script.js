document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('login-form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Here, you should perform validation and authentication checks.
    // This is just a basic example.
    if (username === 'user' && password === 'password') {
      alert('Login successful!');
    } else {
      alert('Login failed. Please check your credentials.');
    }
  });
});
