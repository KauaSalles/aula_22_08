// script.js
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

   
    const validUsername = 'Kauã';
    const validPassword = 'salles2007';

    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === '' || password === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    
    if (username === validUsername && password === validPassword) {
        alert('Login bem-sucedido!');
       
    } else {
        alert('Nome de usuário ou senha incorretos.');
    }
});

document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordField = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeIcon');
    
    if (passwordField.type === 'password') {
        passwordField.type = 'text';
        eyeIcon.src = 'https://w7.pngwing.com/pngs/372/242/png-transparent-eye-see-look-view-user-interface-icon.png'; 
    } else {
        passwordField.type = 'password';
        eyeIcon.src = 'https://w7.pngwing.com/pngs/401/840/png-transparent-eye-eyes-hide-view-watch-show-disable-basic-user-interface-icon-thumbnail.png';
    }
});
