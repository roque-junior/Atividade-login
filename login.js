document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('loginForm');
  const loginBtn = document.getElementById('loginBtn');

  loginBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const email = loginForm.usernameEmail.value;
    const senha = loginForm.password.value;


    if (!email || !senha) {
      alert('Por favor, preencha todos os campos.');
      return;
    }


    axios.post('http://localhost:3000/usuarios/login', {
      email: email,
      senha: senha,
    })


      .then(response => {
        if (response.status === 200) {
          alert('Login bem-sucedido! Redirecionando para a tela de recados...');
        } else {
          throw new Error('Login inválido. Por favor, verifique suas credenciais.');
        }
      })
      .catch(error => {
        alert(error.message);
      });
  });
});