const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  loginMessage.className = "login-message success";
  loginMessage.textContent = "✅ Tela de login funcionando. Autenticação será implementada na próxima etapa.";
});