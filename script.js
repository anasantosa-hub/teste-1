// Abre e fecha o menu no celular.
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("aberto");
});

// Clicar em um horário leva o aluno para o formulário já com o horário escolhido.
document.querySelectorAll(".link-reserva").forEach((botao) => {
  botao.addEventListener("click", () => {
    document.querySelector("#horario-reserva").value = botao.dataset.horario;
    document.querySelector("#reservas").scrollIntoView({ behavior: "smooth" });
  });
});

// Simula uma reserva. O navegador guarda a informação localmente.
const formulario = document.querySelector("#form-reserva");
const mensagem = document.querySelector("#mensagem-reserva");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.querySelector("#nome").value.trim();
  const horario = document.querySelector("#horario-reserva").value;
  const tipo = document.querySelector("#tipo-reserva").value;

  const reserva = { nome, horario, tipo, criadaEm: new Date().toISOString() };
  localStorage.setItem("reservaSalaInformatica", JSON.stringify(reserva));

  mensagem.textContent = `Reserva registrada para ${nome}, ${horario}.`;
  formulario.reset();
});

// Cadastro simples de voluntariado.
document.querySelector("#btn-voluntario").addEventListener("click", () => {
  const nome = prompt("Qual é o seu nome?");
  if (!nome) return;

  localStorage.setItem("monitorVoluntario", nome);
  document.querySelector("#mensagem-monitor").textContent =
    `${nome}, seu interesse em ser monitor foi registrado neste navegador!`;
});
