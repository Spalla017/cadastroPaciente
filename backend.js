// backend.js
const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

// "Banco de dados" em memória
let pacientes = [];

// GET /api/pacientes
app.get("/api/pacientes", (req, res) => {
  res.json(pacientes);
});

// POST /api/pacientes
app.post("/api/pacientes", (req, res) => {
  const { name, cpf } = req.body;

  if (!name || !cpf) {
    return res.status(400).json({ error: "Nome e CPF são obrigatórios." });
  }

  // Impedir CPFs duplicados
  if (pacientes.some((p) => p.cpf === cpf)) {
    return res.status(400).json({ error: "Este CPF já está cadastrado." });
  }

  const novoPaciente = {
    name: name.trim(),
    cpf: cpf.trim(),
  };

  pacientes.push(novoPaciente);
  res.status(201).json(novoPaciente);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
