# Sistema de Reservas de Mesas

Este projeto é um sistema completo para gerenciamento de reservas de mesas em restaurantes. Ele permite visualizar, criar, editar, excluir reservas e verificar horários livres para as mesas. O sistema é composto por um backend em Node.js com TypeScript e MongoDB, e um frontend em React com Material UI.

---

## Requisitos

Antes de começar, certifique-se de ter os seguintes itens instalados em sua máquina:

- Node.js
- npm ou yarn
- MongoDB
- Git

---

## Passos para Configuração

### 1. Clone o Repositório

```bash
git clone https://github.com/abnercosta97/p3-LabDW.git sistema-reservas
cd sistema-reservas
```

---

### 2. Configure o Banco de Dados

Certifique-se de que o MongoDB está rodando localmente ou em um serviço remoto.

#### Crie o banco de dados no MongoDB:

```bash
mongo
use reservas
```

#### Saia do terminal MongoDB:

```bash
exit
```

---

### 3. Configure o Backend

1. Entre na pasta do backend:

   ```bash
   cd server
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure as variáveis de ambiente:
   Crie um arquivo `.env` na raiz do diretório `backend` com o seguinte conteúdo:

   ```env
   MONGO_URI=mongodb://localhost:27017/reservas
   PORT=3020
   ```

4. Inicie o servidor:
   Para desenvolvimento:

   ```bash
   npm run dev
   ```

   Para produção:

   ```bash
   npm start
   ```

   O backend estará rodando em [http://localhost:3020](http://localhost:3020).

---

### 4. Configure o Frontend

1. Entre na pasta do frontend:

   ```bash
   cd client
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

   O frontend estará acessível em [http://localhost:3000](http://localhost:3000).

---

## Como Usar

### 1. Funcionalidades

- Lista de Reservas:
  - Navegue até a página inicial para visualizar todas as reservas.
- Criar Reserva:
  - Clique no botão **"Nova Reserva"** para adicionar uma reserva.
- Editar Reserva:
  - Clique em **"Editar"** em uma linha de reserva.
- Excluir Reserva:
  - Clique em **"Excluir"** para remover uma reserva.
- Ver Horários Livres:
  - Navegue para a página **"Horários Livres"** para visualizar os horários disponíveis de cada mesa.

---

## Testando o Sistema

### Criar Reserva

1. Clique no botão **"Nova Reserva"**.
2. Preencha os campos (Nome do Cliente, Número da Mesa, Data e Hora, Status, Contato).
3. Clique em **"Salvar"**.

### Verificar Horários Livres

1. Navegue para a página **"Horários Livres"**.
2. Veja os horários livres e ocupados para cada mesa.

### Editar Reserva

1. Na tabela de reservas, clique no botão **"Editar"** de uma reserva.
2. Atualize as informações desejadas.
3. Clique em **"Salvar"**.

### Excluir Reserva

1. Na tabela de reservas, clique no botão **"Excluir"**.
2. Confirme a exclusão.

---

## Tecnologias Utilizadas

### Frontend

- React
- Material UI
- Axios
- React Router
- React Toastify

### Backend

- Node.js
- Express.js
- TypeScript
- Mongoose

### Banco de Dados

- MongoDB

---

## Contribuições

Sinta-se à vontade para contribuir com melhorias no projeto! Para isso:

1. Faça um fork do repositório.
2. Crie uma nova branch:
   ```bash
   git checkout -b minha-nova-funcionalidade
   ```
3. Faça suas alterações e commite:
   ```bash
   git commit -m "Adicionei uma nova funcionalidade"
   ```
4. Envie suas alterações:
   ```bash
   git push origin minha-nova-funcionalidade
   ```
5. Abra um Pull Request.

---

## Licença

Este projeto é licenciado sob a [MIT License](LICENSE).

---

### Notas Importantes

- Substitua `https://github.com/abnercosta97/p3-LabDW.git` pelo link correto do seu repositório.
- Garanta que os comandos e instruções estejam de acordo com as configurações reais do seu projeto.
