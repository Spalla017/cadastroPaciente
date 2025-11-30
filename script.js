const API_URL = "http://localhost:3000/api/pacientes";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("paciente-form");
  const inputNome = document.getElementById("paciente-nome");
  const inputCPF = document.getElementById("paciente-cpf");
  const listaPacientes = document.getElementById("paciente-list");

  carregarPacientes();

  form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const nome = inputNome.value.trim();
    const cpf = inputCPF.value.trim();

    if (!nome || !cpf) {
      alert("Preencha nome e CPF.");
      return;
    }

    if (cpf.length !== 11) {
      alert("CPF deve conter exatamente 11 números.");
      return;
    }

    const resposta = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: nome, cpf }),
    });

    if (!resposta.ok) {
      const erro = await resposta.json();
      alert(erro.error);
      return;
    }

    inputNome.value = "";
    inputCPF.value = "";

    carregarPacientes();
  });

  async function carregarPacientes() {
    const resposta = await fetch(API_URL);
    const pacientes = await resposta.json();
    renderizarPacientes(pacientes);
  }

  function renderizarPacientes(pacientes) {
    listaPacientes.innerHTML = "";

    pacientes.forEach((paciente) => {
      const li = document.createElement("li");

      li.innerHTML = `
        <strong>${paciente.name}</strong>
        <span class="cpf">${paciente.cpf}</span>
      `;

      listaPacientes.appendChild(li);
    });
  }
});
