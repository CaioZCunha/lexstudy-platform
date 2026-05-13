# 📚 LexStudy Platform

Plataforma web desenvolvida para auxiliar estudantes de Direito nos estudos, oferecendo acesso a resumos, quizzes e flashcards de forma simples, organizada e interativa.

Projeto acadêmico da disciplina de **Programação Frontend e DevOps**, com foco em desenvolvimento frontend, versionamento, integração contínua e entrega contínua (CI/CD).

---

# 🌐 Site Online

🔗 https://lexstudy-platform.azurewebsites.net/

---

# 🚀 Funcionalidades

- 📖 Resumos organizados por matéria
- 🧠 Quiz interativo
- 🗂️ Flashcards para revisão
- 📚 Organização de conteúdos jurídicos
- 💻 Interface responsiva
- 🔍 Navegação intuitiva

---

# 🛠️ Tecnologias Utilizadas

## Frontend
- HTML5
- CSS3
- JavaScript
- Bootstrap

## DevOps
- Git & GitHub
- GitHub Actions
- Cypress (Testes E2E)
- SonarQube / SonarCloud
- Azure Web App
- Docker

---

# ⚙️ CI/CD

O projeto utiliza GitHub Actions para automação de integração contínua e entrega contínua.

## Pipeline de CI
Executa automaticamente:
- Instalação das dependências
- Inicialização do projeto
- Testes automatizados E2E com Cypress
- Verificação de funcionamento do sistema

## Pipeline de CD
Executa automaticamente:
- Build da aplicação
- Criação da imagem Docker
- Publicação da imagem no Docker Hub
- Deploy automático no Azure Web App

---

# 🧪 Testes Automatizados

Os testes End-to-End foram desenvolvidos utilizando Cypress para validar:

- Carregamento da página inicial
- Navegação entre páginas
- Funcionamento dos componentes principais
- Fluxo básico da plataforma

---

# 📊 Qualidade de Código

O projeto utiliza SonarQube/SonarCloud para análise contínua da qualidade do código, verificando:

- Bugs
- Vulnerabilidades
- Code Smells
- Manutenibilidade
- Segurança

---

# 🌿 Estratégia de Branches

Organização do fluxo Git:

- `main` → versão estável/produção
- `dev` → integração do desenvolvimento
- `feature/*` → desenvolvimento de funcionalidades

---

# 👥 Equipe

Projeto desenvolvido para a disciplina de Programação Frontend e DevOps.

- Caio Zanfollim Cunha
- João Pedro
- Eduardo
- Pedro
- Canuto

---

# 📦 Como Executar o Projeto

## Clonar o repositório

```bash
git clone https://github.com/CaioZCunha/lexstudy-platform.git
````

## Entrar na pasta

```bash
cd lexstudy-platform
```

## Instalar dependências

```bash
npm install
```

## Rodar o projeto

```bash
npm run start
```

---

# 🧪 Executar Cypress

## Abrir interface do Cypress

```bash
npm run cypress:open
```

## Rodar testes no terminal

```bash
npm run cypress:run
```

---

# 🐳 Docker

O projeto utiliza Docker para padronização do ambiente e deploy da aplicação.

---

# ☁️ Deploy

Deploy automatizado realizado utilizando:

* Docker Hub
* Azure Web App
* GitHub Actions

---

# 📄 Licença

Projeto acadêmico desenvolvido exclusivamente para fins educacionais.

