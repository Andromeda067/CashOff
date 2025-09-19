# 💰 CashOff
[![Next.js](https://img.shields.io/badge/Next.js-13.5.1-black?logo=next.js)](https://nextjs.org/) [![React](https://img.shields.io/badge/React-18.3.0-blue?logo=react)](https://react.dev/) [![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.5.0-teal?logo=tailwind-css)](https://tailwindcss.com/) [![License](https://img.shields.io/badge/License-MIT-green)](LICENSE) [![GitHub stars](https://img.shields.io/github/stars/Andromeda067/CashOff)](https://github.com/seu-usuario/cashoff/stargazers)


CashOff é uma plataforma de gestão financeira que permite controlar **lucros** e **despesas** de forma prática e eficiente. Construído com **Next.js**, **React** e **Tailwind CSS**, o projeto segue uma arquitetura **MVC** para melhor organização do código e escalabilidade 🚀.

---

## 🛠 Tecnologias Utilizadas

- ⚛️ [Next.js](https://nextjs.org/) (React Framework)
- ⚛️ [React](https://reactjs.org)
- 🎨 [Tailwind CSS](https://tailwindcss.com/)
- 🟢 Node.js (v18+ recomendado)
- 📦 npm ou yarn

---

## 📁 Estrutura de Pastas Inicial (MVC)

### cashoff/
### │
### ├── app/ # Lógica do Next.js (rotas, pages) 
### │ ├── controllers/ # Controladores (Controllers) 🕹
### │ ├── models/ # Modelos de dados (Models) 📊
### │ ├── views/ # Componentes e Views (Views) 🎨
### │ └── services/ # Serviços auxiliares e APIs 🔧
### │
### ├── public/ # Arquivos estáticos (imagens, ícones) 🖼
### ├── styles/ # Arquivos CSS e Tailwind 🎨
### ├── node_modules/ # Dependências do projeto 📦
### ├── .gitignore # Ignora node_modules, .next, etc. 🚫
### ├── package.json # Configuração do projeto e scripts 📜
### └── README.md # Este arquivo 📖


> Inicialmente, o projeto seguirá o padrão **MVC**, mas como o Next.js tem o conceito de **pages e components**, a pasta `views` será usada para componentes visuais e páginas principais ✨.

---

## ✅ Pré-requisitos

Certifique-se de ter instalado em sua máquina:

- 🟢 [Node.js](https://nodejs.org/) (versão LTS recomendada)
- 📦 npm ou yarn
- 🐙 Git (opcional, se for clonar o projeto)

---

## 🚀 Instalação

Abra o terminal e siga os passos abaixo:

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/cashoff.git

cd cashoff

npm install
# ou, se preferir yarn
yarn install


##🏃 Scripts Úteis

npm run dev
# ou
yarn dev
```

## 💡 Boas práticas

Mantenha o padrão MVC para organizar funcionalidades 🗂

Utilize componentes reutilizáveis no views/components ♻️

Separe lógica de negócio nos controllers e manipulação de dados nos models 🧩

Use Tailwind CSS para estilização rápida e responsiva 🎨

## 🤝 Contribuição

Contribuições são bem-vindas!

Fork este repositório 🍴

Crie uma branch para sua feature (git checkout -b feature/nova-feature) 🌿

Commit suas alterações (git commit -m 'Adiciona nova feature') 📝

Push para a branch (git push origin feature/nova-feature) 🚀

Abra um Pull Request 💌