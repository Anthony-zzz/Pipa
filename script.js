document.getElementById("formContato").addEventListener("submit", function (e) {
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;

  if (nome && email && mensagem) {
    document.getElementById("mensagemEnviada").textContent = "Mensagem enviada com sucesso!";
    this.reset();
  } else {
    document.getElementById("mensagemEnviada").textContent = "Por favor, preencha todos os campos.";
  }
});
