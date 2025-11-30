# 📋 Cadastro e Consulta de Pacientes

Sistema simples para **cadastrar e listar pacientes** de um hospital.
Desenvolvido utilizando **Node.js (Express)** no backend e **HTML/CSS/JavaScript** no frontend.

O sistema permite:

✅ Adicionar pacientes
✅ Informar **nome** e **CPF**
✅ Validar CPF (somente números e limite de 11 dígitos)
✅ Listar pacientes cadastrados
✅ Backend com rotas REST
✅ Armazenamento em memória (array)
✅ Frontend consumindo API via `fetch()`

---

## 🚀 Tecnologias Utilizadas

### **Frontend**

* HTML5
* CSS3
* JavaScript Vanilla
* Fetch API

### **Backend**

* Node.js
* Express.js

### **Outros**

* Armazenamento em memória (array)

---

## 📁 Estrutura do Projeto

```
/
├── backend.js          # Servidor Node + rotas da API
├── index.html          # Interface do sistema
├── script.js           # Lógica do frontend (fetch, validação, etc.)
├── style.css           # Estilização da interface
├── package.json        # Dependências do projeto
└── node_modules/       # Módulos instalados
```

---

## ⚙️ Instalação e Execução

### 1️⃣ Instale as dependências

```bash
npm install
```

### 2️⃣ Execute o servidor

```bash
node backend.js
```

### 3️⃣ Acesse no navegador

```
http://localhost:3000/
```

---

# 📡 API – Rotas Disponíveis

## ➤ GET `/api/pacientes`

Retorna a lista completa de pacientes cadastrados.

### **Exemplo de resposta:**

```json
[
  {
    "name": "João Silva",
    "cpf": "11122233344"
  }
]
```

---

## ➤ POST `/api/pacientes`

Adiciona um novo paciente.

### **Corpo da requisição (JSON):**

```json
{
  "name": "João Silva",
  "cpf": "11122233344"
}
```

### **Validações:**

* Nome é obrigatório
* CPF deve conter **apenas números**
* CPF deve ter **exatamente 11 dígitos**
* CPFs duplicados não são permitidos

---

# 🖥️ Funcionalidades do Frontend

* Formulário simples para inserir **nome** e **CPF**
* Validação básica antes de enviar ao backend
* Lista dinâmica atualizada após cada cadastro
* Integração com a API via `fetch()`

---

# 🎨 Interface

A interface é clara e objetiva:

* Layout centralizado
* Campos de texto simples
* Lista de pacientes com nome e CPF alinhados
* Alertas de erro para entradas inválidas

---

# 👨‍💻 Autor

Projeto desenvolvido para fins acadêmicos no curso de **Sistemas de Informação**.

---
