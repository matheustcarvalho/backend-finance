# Backend Finance - API RESTful

API RESTful que simula funcionalidades de transações, permitindo transferências entre usuários e lojistas, além de notificações de pagamento. Desenvolvido com Node.js, TypeScript, Sequelize, PostgreSQL e Docker, seguindo Clean Code, SOLID e Design Patterns.

## Tecnologias

- **Node.js** - Ambiente de execução JavaScript.
- **TypeScript** - Tipagem estática.
- **Sequelize** - ORM.
- **PostgreSQL** - Banco de dados relacional.
- **Docker** - Contêinerização.
- **Axios** - Requisições externas.
- **Jest** - Testes automatizados.

## Funcionalidades

### Transferências

- Usuários transferem valores entre si e para lojistas.
- Lojistas apenas recebem transferências.
- Validação de saldo e transações seguras.

### Autorização Externa

- Verificação de autorização via serviço externo.

### Notificações

- Notificações via e-mail ou SMS (serviço externo).

## Endpoint

### **POST /api/transfer**

Realiza uma transferência.

**Requisição:**

```json
{
  "value": 100.0,
  "payer": 4,
  "payee": 15
}
```

**Resposta de Sucesso:**

```json
{
  "message": "Transferência realizada com sucesso"
}
```

**Resposta de Erro:**

```json
{
  "message": "Erro ao realizar a transferência"
}
```

## Como Rodar o Projeto

### Pré-requisitos

- Node.js, Docker e PostgreSQL.

### Passos

1. **Clonar o repositório:**

   ```bash
   git clone https://github.com/matheustcarvalho/backend-finance.git
   cd backend-finance
   ```

2. **Configurar o ambiente:**
   Crie um arquivo `.env` com as variáveis necessárias,
   conforme disponível em `.env.example`.

3. **Subir containers**

   ```bash
   docker-compose up -d
   ```

4. **Rodar seeders:**

   ```bash
   docker exec -it nome-do-container-app npm run seed
   ```

   O servidor estará disponível em `http://localhost:3000`.

## Testes

Rodar testes:

```bash
npx jest
```

Modo interativo:

```bash
npx jest --watch
```

## Arquitetura

- **Layered Architecture**
  - **Repositório:** Acesso ao banco de dados.
  - **Serviço:** Lógica de negócio (transferências, validações, etc.).
  - **Controlador:** Gerencia requisições HTTP.

## Padrões de Design

- **Repository Pattern** - Abstração do acesso a dados.
- **Singleton Pattern** - Instâncias únicas para serviços.
- **Transaction Pattern** - Assegura que as transferências sejam atômicas.

```

```
