# GEMINI-API

Esse é um projeto backend que utiliza a API do gemini. foi desenvolvida com nodejs, express e MYSQL. Nessa API você pode fazer perguntas e interagis com o gemini por meio dos endpoits.

## Tecnologias usadas
- nodejs
- express
- MYSQL
- sequelize
- bcrypt para hash de senha
- BREVO para o envio de emails

## Endpoints
| método | endpoint | descrição |
|--------|--------|---------|
| POST | `/api/register` | registra o usuario e envia um email com sua API key que vai ser usada para ter acesso as requisições.
| POST | `/api` | esse endpoint permite que você interaja com o gemini fazendo perguntas.

## exemplos
