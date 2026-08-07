# Pokédex

Uma Pokédex simples feita em React, consumindo a [PokéAPI](https://pokeapi.co) para buscar informações de qualquer Pokémon em tempo real.

## Deploy

Acesse: [Pokedex (Lucas Sena)](https://pokedexls.netlify.app/)

## Funcionalidades

- Busca por nome ou número
- Exibe sprite, tipos e status base (HP, ataque, defesa, etc)
- Estados de carregamento e erro tratados
- Interface com tema retrô de Pokédex

## Tecnologias

- React
- Vite
- CSS Modules
- [PokéAPI](https://pokeapi.co)

## Rodando localmente

```bash
git clone https://github.com/01Lucasena/pokedex.git
cd pokedex
npm install
npm run dev
```

O projeto abre em `http://localhost:5173`.

## Estrutura do projeto

```
src/
├── components/
│   ├── Pokedex/       # componente principal, busca e estados
│   ├── PokemonCard/    # exibição dos dados do pokémon
│   └── StatBar/         # barra de status individual
├── constants/
│   └── pokemonTypes.js  # cores dos tipos e labels dos status
├── App.jsx
└── main.jsx
```

## O que aprendi construindo isso

- `useState` para gerenciar múltiplos estados (busca, resultado, loading, erro)
- `fetch` com `async/await` e tratamento de erro com `try/catch/finally`
- Renderização condicional para diferentes estados da UI
- Composição de componentes e passagem de dados via props
- CSS Modules para estilos isolados por componente

## Próximos passos

- [ ] Botão de Pokémon aleatório
- [ ] Busca com lista de resultados
- [ ] Exibir cadeia de evolução

## Deploy

Publicado no Netlify com deploy automático a cada push na branch principal.