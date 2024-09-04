document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const passwordFieldType = passwordField.getAttribute('type');
    const eyeIcon = document.getElementById('eyeIcon');

    if (passwordFieldType === 'password') {
        passwordField.setAttribute('type', 'text');
        eyeIcon.src = 'https://w7.pngwing.com/pngs/355/665/png-transparent-ui-eye-hide-view-look-privacy-user-interface-icon-thumbnail.png'; 
    } else {
        passwordField.setAttribute('type', 'password');
        eyeIcon.src = 'https://w7.pngwing.com/pngs/221/536/png-transparent-eye-password-see-view-minimalisticons-icon-thumbnail.png'; 
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        
        window.location.href = ('login.html'); 
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
