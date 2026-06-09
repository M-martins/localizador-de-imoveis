const loginForm = document.getElementById("loginForm");
const loginMessage = document.getElementById("loginMessage");

let loginAttempts = 0;

initializeAuth();

loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  setLoginMessage("Validando credenciais...", "info");

  try {
    await loginWithPortal(username, password);

    loginAttempts = 0;

    setLoginMessage("✅ Credenciais validadas com sucesso.", "success");

    setTimeout(() => {
      alert("Próxima etapa: carregar o mapa.");
    }, 800);

  } catch (error) {
    loginAttempts++;

    console.error("Erro de autenticação:", error);

    if (loginAttempts === 1) {
      setLoginMessage(
        "❌ Login ou senha inválidos. Tente novamente.",
        "error"
      );
    } else {
      loginMessage.className = "login-message error";
      loginMessage.innerHTML = `
        ❌ Login ou senha inválidos.
        <br>
        <span>Para recuperar sua senha, acesse a tela oficial do Portal.</span>
        <br>
        <a href="${APP_CONFIG.portalHomeUrl}signin.html" target="_blank">
          Abrir recuperação de senha
        </a>
      `;
    }

    document.getElementById("password").value = "";
  }
});

function setLoginMessage(message, type) {
  loginMessage.className = `login-message ${type}`;
  loginMessage.textContent = message;
}