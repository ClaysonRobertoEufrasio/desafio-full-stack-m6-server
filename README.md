# Documentação do Desafio Full Stack M6 Server

- Projeto de cadastro de clientes desenvolvido com React em TypeScript, API em TypeORM. O projeto permite o registro de clientes juntamente com uma lista de contatos

## Instalação

### Para instalar o aplicativo, siga as etapas abaixo:

1. Clone o repositório do GitHub usando o seguinte comando:

```bash
git clone git@github.com:ClaysonRobertoEufrasio/desafio-full-stack-m6-server.git
```

2. Navegue para o diretório raiz do projeto usando o seguinte comando:

```bash
cd desafio-full-stack-m6-server
```

3. Instale as dependências do projeto usando o seguinte comando:

```
yarn install
```
3. Rode as migrations

```
1. yarn typeorm migration:create src/migrations/initialMigration

2. yarn typeorm migration:generate src/migrations/createTables -d src/data-source.ts

3. yarn typeorm migration:run -d src/data-source.ts
```

## Execução

Para executar o aplicativo, siga as etapas abaixo:

1. Navegue para o diretório raiz do projeto.

2. Execute o seguinte comando para iniciar o servidor de desenvolvimento:

```
yarn dev
```

3. O aplicativo será executado em http://localhost:3000.

