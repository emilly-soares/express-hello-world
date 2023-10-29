# Projeto Github Actions API NodeJS Express 🚀

[![NodeJS CI CD](https://github.com/emilly-soares/express-hello-world/actions/workflows/main.yml/badge.svg)](https://github.com/emilly-soares/express-hello-world/actions/workflows/main.yml)

## Descrição 📄
Deploy de API Nodejs Express

### Desafios

Para cada item da atividade foi realizado um commit diferente com código do desafio

1. Crie um novo endpoint na aplicação do tipo **GET** chamada **/meunome**, ela deve retornar seu nome completo quando acessada.
2. Crie um novo endpoint na aplicação do tipo **GET** chamada **/tico**, ela deve retornar a mensagem “teco”. 
3. Crie um novo endpoint na aplicação do tipo **GET** chamada **/pokemons**, ela deve retornar no formato **JSON** uma lista com os 10 primeiros pokemons que de acordo com a ordem em que foram capturados pelo Ash. 
4. Crie um novo endpoint na aplicação do tipo **POST** chamada **/series**, ela deve retornar no formato **JSON** uma lista com os 3 seriados que você mais gostou de assistir. 😉 (Dica você pode usar o postman ou o comando curl para testar o endpoint)

### Endpoints e Testes com Jest

#### Test Endpoints
O projeto agora inclui testes automatizados para os endpoints com o uso do Jest. Veja abaixo a descrição dos endpoints e como testá-los:

1. **/meunome**
   - **Método:** GET
   - **Descrição:** Retorna o nome completo do autor do projeto.
   - **Exemplo de Uso:**
     ```bash
     curl https://lime-pleasant-hatchling.cyclic.app/meunome
     ```

2. **/tico**
   - **Método:** GET
   - **Descrição:** Retorna a mensagem "teco".
   - **Exemplo de Uso:**
     ```bash
     curl https://lime-pleasant-hatchling.cyclic.app/tico
     ```

3. **/pokemons**
   - **Método:** GET
   - **Descrição:** Retorna uma lista JSON dos 10 primeiros pokemons capturados pelo Ash.
   - **Exemplo de Uso:**
     ```bash
     curl https://lime-pleasant-hatchling.cyclic.app/pokemons
     ```

4. **/series**
   - **Método:** POST
   - **Descrição:** Retorna uma lista JSON dos 3 seriados favoritos do autor do projeto.
   - **Exemplo de Uso:**
     ```bash
     curl -X POST https://lime-pleasant-hatchling.cyclic.app/series
     ```

Para executar os testes automatizados, utilize o Jest. Certifique-se de ter as dependências do projeto instaladas. Execute o seguinte comando:

```bash
yarn test
   ```

Os testes avaliarão se os endpoints estão funcionando corretamente.

Como Testar 🧪
Para testar os endpoints, utilize ferramentas como o Postman ou o CURL. Exemplos de comandos CURL estão fornecidos em cada seção de endpoint acima.

Hospedagem 🌐
Este projeto está hospedado no Cyclic. Você pode acessá-lo aqui.

Contribuição 🤝
Se deseja contribuir para este projeto, siga as etapas abaixo:

Faça um fork do repositório
Crie um branch para sua nova feature;
Faça commit de suas alterações;
Faça push para o branch;
Crie um novo Pull Request.
Licença 📝
Este projeto está licenciado sob a licença MIT. Consulte o arquivo LICENSE para obter mais detalhes.
