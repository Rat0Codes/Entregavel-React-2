# Biblioteca UI

Biblioteca de componentes reutilizáveis desenvolvida com React, Vite e Tailwind CSS.

## Sobre o projeto

O objetivo deste projeto é desenvolver uma pequena biblioteca de componentes de interface (UI), utilizando componentização no React e estilização com Tailwind CSS.

Os componentes utilizam props para permitir diferentes variações visuais e facilitar sua reutilização.

## Tecnologias utilizadas

- React
- JavaScript
- Vite
- Tailwind CSS v3

## Componentes

| Componente | Descrição |
|---|---|
| Button | Botões com variantes primary, secondary e danger. |
| Badge | Indicadores visuais de status. |
| Input | Campos de entrada de dados. |
| Card | Contêiner para agrupamento de conteúdo. |
| Alert | Mensagens com variantes success, error e warning. |

## Instalação e execução

Clone o repositório:

```bash
git clone URL_DO_REPOSITORIO
```

Entre na pasta:

```bash
cd biblioteca-ui
```

Instale as dependências:

```bash
npm install
```

Execute o projeto:

```bash
npm run dev
```

## Reflexão: Tailwind CSS vs. CSS tradicional

O Tailwind CSS facilita a componentização no React ao permitir que a estilização seja realizada diretamente nos elementos por meio de classes utilitárias. Entre suas vantagens estão a reutilização de estilos, a padronização visual e a redução da necessidade de criar arquivos CSS separados.

Por outro lado, a quantidade de classes diretamente no JSX pode dificultar a leitura do código, especialmente em componentes mais complexos. Além disso, exige familiaridade com suas classes utilitárias.

Concluindo, o Tailwind CSS oferece agilidade e organização na construção de interfaces reutilizáveis, enquanto o CSS tradicional proporciona maior liberdade na escrita e separação das regras de estilização.

## Autor

Rudson