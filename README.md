# Competi React App

## :rocket: Tecnologias

-  [React.js](https://pt-br.reactjs.org/)
-  [TypeScript](https://www.typescriptlang.org/)
-  [React-icons](https://react-icons.netlify.com/)
-  [Styled-Components](https://styled-components.com/)
-  [Axios](https://github.com/axios/axios)
-  [MUI](https://mui.com/pt/)

## 💻 Sobre o projeto

Integração da [PokeAPI](https://pokeapi.co/docs/v2#pokemon) em uma interface com referência no Figma e desenvolvida em React.js.

### Funcionalidades

- [x] **Busca por nome ou tipo**

- [x] **Showcase de Pokémons**

- [x] **Pokedex do Usuário**

- [x] **Listagem de Status de cada Pokémon**


## 📥 Instalação

Faça um clone desse repositório e acesse o diretório.

```bash
$ git clone https://github.com/matheuspaolini/competi-react-app.git && cd competi-react-app
```

**Não é necessário nenhum tipo de autenticação para fazer o uso da API.**


```bash
# Instalando as dependências
$ yarn

# Executanto aplicação em modo de desenvolvedor
$ yarn dev

# Executando aplicação após o build
$ yarn build && yarn preview
```

### Navegação
- Pokémon Logo -> Botão para a Home. 
	- Path: /
- Login -> Botão para Página de Autenticação.
	- Path: /auth
- Username após Login -> Botão para Pokedex do Usuário.
	- Path: /pokedex

## :muscle: Melhorias
- Resetar o número da página atual após o tipo de busca ser alterado;
- Mostrar scrollbars somente quando o elemento estiver dando overflow;
- Adicionar validadores nos inputs;
- Adicionar tratamento de erros da API e feedback para o usuário.
- Adicionar arquivo para centralizar as rotas da API e remover hardcode.
