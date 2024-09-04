document.getElementById('togglePassword').addEventListener('click', function () {
    const passwordField = document.getElementById('password');
    const passwordFieldType = passwordField.getAttribute('type');
    const eyeIcon = document.getElementById('eyeIcon');

    if (passwordFieldType === 'password') {
        passwordField.setAttribute('type', 'text');
        eyeIcon.src = 'eye-icon-open.png'; // Ícone de olho aberto
    } else {
        passwordField.setAttribute('type', 'password');
        eyeIcon.src = 'eye-icon.png'; // Ícone de olho fechado
    }
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Substitua 'pagina-destino.html' pelo URL ou caminho para a página para onde você deseja redirecionar
        window.location.href = ('login.html'); 
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
