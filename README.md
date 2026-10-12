# Ofertas Peixe Urbano

Frontend Angular de demonstração inspirado em um portal de ofertas. A aplicação organiza páginas de ofertas, categorias e conteúdo de entretenimento, e pode consumir dados locais por meio de JSON Server.

## Tecnologias principais

- TypeScript
- Angular 11
- HTML e CSS
- Bootstrap
- JSON Server (dados locais)

## Executar

Com Node.js instalado:

```bash
npm install
npx json-server --watch banco-de-dados.json
```

Em outro terminal, inicie o frontend:

```bash
npm start
```

O servidor Angular fica disponível em `http://localhost:4200`. A aplicação espera o backend de dados local conforme descrito no código e no arquivo de banco JSON.
