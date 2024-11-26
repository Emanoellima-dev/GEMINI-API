# GEMINI-API

Esse é um projeto backend que utiliza a API do gemini. foi desenvolvida com nodejs, express e MYSQL. Nessa API você pode fazer perguntas e interagir com o gemini por meio dos endpoits. você poderá iniciar a API localmente.

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

## Exemplos
curl:
<img src="https://github.com/Emanoellima-dev/GEMINI-API/blob/main/imagens/imagem1.jpg" width="400" />
a resposta será:
<img src="https://github.com/Emanoellima-dev/GEMINI-API/blob/main/imagens/imagem2.jpg" width="400" />

certifique-se de colocar seu email para o envio ser bem sucedido.

depois de registra-se você receberá sua API key por email. a API key será usada para fazer perguntas ao gemini.veja no exemplo abaixo.
<img src="https://github.com/Emanoellima-dev/GEMINI-API/blob/main/imagens/imagem3.jpg" width="400" />
a resposta será:
<img src="https://github.com/Emanoellima-dev/GEMINI-API/blob/main/imagens/imagem4.jpg" width="400" />

## Iniciar a API localmente
- passo 1:

faça um fork e depois clone o repositorio
- passo 2:

faça o comando "npm install"
- passo 3:

crie um arquivo .env na raz do projeto, siga a mesma estrutura do arquivo [.env.example](https://github.com/Emanoellima-dev/GEMINI-API/blob/main/.env.example) que esta neste repositório. é importante ter um banco de dados MYSQL com uma tabela "Usuarios" com os campos "nome", "email", "senha", "apiKey".
- passo 4:

faça o comando "npm start" para iniciar a API localmente.
Após isso a API estará disponivel na porta 3000.

## Observaçoes
a API publica não vai ser disponibilizada aqui. siga as instruçoes acima para iniciar a API localmente. este projeto foi feito apenas com o intuito de melhorar o aprendizado sobre backend. por isso não aceito contribuições.