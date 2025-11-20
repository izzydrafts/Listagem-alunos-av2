Estudo de Caso – Desenvolvimento Web e Mobile

Projeto desenvolvido como parte da avaliação da disciplina Desenvolvimento de Aplicações Web e Mobile, contemplando:

Aplicação Web com React + Vite

Aplicação Mobile com React Native + Expo

Consumo de API externa

Navegação entre telas

Testes automatizados (Vitest + RTL)

Deploy da versão Web no Vercel

📁 Estrutura do Repositório
meu-estudo-caso-1/
│
├── web/        → Aplicação Web (React + Vite)
│
└── mobile/     → Aplicação Mobile (React Native + Expo)

🌐 Aplicação Web (React + Vite)
🚀 Tecnologias Utilizadas

React 19

Vite

React Router DOM

Axios

React Bootstrap

Vitest

React Testing Library

📌 Funcionalidades da versão Web
✔ Listagem de alunos

Tela inicial consumindo API externa e exibindo cards contendo:

nome

matrícula

botão Ver detalhes

✔ Tela de detalhes

Exibe dados completos do aluno:

nome

matrícula

turma

curso

id

✔ Rotas implementadas
/                → Lista de alunos
/aluno/:id       → Detalhes de um aluno

✔ Testes automatizados

Foram implementados testes para:

AlunoCard

Home

Os testes utilizam:

Vitest

React Testing Library

Mocks com Axios

🧪 Como rodar o projeto Web
cd web
npm install
npm run dev

▶ Rodar os testes
npm test

📱 Aplicação Mobile (React Native + Expo)
🚀 Tecnologias Utilizadas

Expo

React Native

Expo Router

Axios

📌 Funcionalidades da versão Mobile
✔ Listagem de alunos

Consome a mesma API da versão Web e exibe cards com:

nome

matrícula

botão Ver detalhes

✔ Tela de detalhes

Exibe as informações completas:

nome

matrícula

turma

curso

id

✔ Navegação

Implementada com Expo Router:

/                    → Lista de alunos
/aluno/[id].jsx      → Detalhes do aluno

▶ Como rodar o projeto Mobile
cd mobile
npm install
npx expo start


Depois:

Pressione a para Android

Pressione w para Web

Ou escaneie o QR Code com o app Expo Go

🔗 API Utilizada

A API utilizada no estudo de caso:

https://proweb.leoproti.com.br/alunos


Exemplo de resposta:

[
  { "id": 224, "nome": "Pedro", "turma": null, "curso": null, "matricula": null },
  { "id": 230, "nome": "Caio Perreira", "turma": null, "curso": null, "matricula": "2232" }
]

🔥 Deploy

A versão Web está publicada no Vercel:
https://listagem-alunos-av2.vercel.app/
