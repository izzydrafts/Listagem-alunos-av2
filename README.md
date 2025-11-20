# 📚 Estudo de Caso - Desenvolvimento Web e Mobile  
Projeto desenvolvido como parte da avaliação de **Desenvolvimento de Aplicações Web e Mobile**, incluindo:

- Aplicação **Web** construída com **React + Vite**
- Aplicação **Mobile** construída com **React Native + Expo**
- Consumo de API externa
- Navegação entre telas
- Testes automatizados com **Vitest + React Testing Library**
- Deploy no **Vercel** (versão Web)

---

## 📁 Estrutura do Repositório

```
meu-estudo-caso-1/
│
├── web/        # Aplicação web em React
│
└── mobile/     # Aplicação mobile em React Native (Expo)
```

---

# 🌐 **Aplicação Web (React + Vite)**

## 🚀 Tecnologias utilizadas
- React 19
- Vite
- React Router DOM
- Axios
- React Bootstrap
- Vitest
- React Testing Library

---

# 📌 Funcionalidades da versão Web

### ✔ Listagem de alunos  
A tela inicial **consome dados da API** e exibe cards com:
- nome  
- matrícula  
- botão “Ver detalhes”

### ✔ Tela de detalhes  
Exibe informações individuais do aluno:
- nome  
- matrícula  
- turma  
- curso  
- id  

### ✔ Rotas implementadas
```
/                → Lista de alunos
/aluno/:id       → Detalhes de um aluno
```

### ✔ Testes automatizados
Inclui testes para:
- `AlunoCard`
- `Home`

Todos os testes utilizam:
- **Vitest**
- **React Testing Library**
- mocks do `axios`

---

# 🧪 Como rodar o projeto Web

```sh
cd web
npm install
npm run dev
```

## ▶ Rodar os testes

```sh
npm test
```

---

# 📱 Aplicação Mobile (React Native + Expo)

## 🚀 Tecnologias utilizadas
- Expo
- React Native
- Expo Router
- Axios

---

# 📌 Funcionalidades da versão Mobile

### ✔ Listagem de alunos  
A tela principal consome a mesma API da versão Web e exibe cards com:
- nome  
- matrícula  
- botão "Ver detalhes"

### ✔ Tela de detalhes  
Exibe informações completas de acordo com a API:
- nome  
- matrícula  
- turma  
- curso  
- id

### ✔ Navegação  
Implementação utilizando **Expo Router**, com rotas:
```
/                    → Lista de alunos
/aluno/[id].jsx      → Detalhes do aluno
```

---

# 📱 Como rodar o projeto Mobile

```sh
cd mobile
npm install
npx expo start
```

Depois:
- Pressione **a** para abrir no Android  
- Pressione **w** para abrir no navegador  
- Ou escaneie o QR code no terminal com o **Expo Go**

---

# 🔗 API Utilizada

Os dados dos alunos são consumidos do endpoint:

```
https://proweb.leoproti.com.br/alunos
```

Exemplo do retorno:

```json
[
  { "id": 224, "nome": "Pedro", "turma": null, "curso": null, "matricula": null },
  { "id": 230, "nome": "Caio Perreira", "turma": null, "curso": null, "matricula": "2232" }
]
```

---

# 🔥 Deploy

A aplicação Web foi publicada no **Vercel** e está disponível em:

👉 **https://meu-estudo-caso-1-web-fh1q.vercel.app/**

---

# 👨‍💻 Autor

**Carolina Ferreira Passos Pessoa**  
Desenvolvedor Web & Mobile  
Minas Gerais - Brasil

---
