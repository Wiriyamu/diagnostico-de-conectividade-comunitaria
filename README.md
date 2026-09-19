# Conexao que transforma

Landing page com os resultados de um diagnostico de conectividade realizado com moradores de Agua Quente, no Distrito Federal.

O projeto foi desenvolvido como parte de uma atividade extensionista e apresenta os dados coletados, os principais desafios identificados e possiveis caminhos de acao para a comunidade.

## Tecnologias

- React
- Vite
- JavaScript
- CSS
- Lucide React

## Requisitos

- Node.js 18 ou superior
- npm

## Instalacao

1. Instale as dependencias:

   ```bash
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

3. Acesse a URL exibida pelo Vite, normalmente:

   ```text
   http://localhost:5173
   ```

## Scripts disponiveis

| Comando | Descricao |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento com Vite. |
| `npm run build` | Gera a versao de producao na pasta `dist/`. |
| `npm run preview` | Executa localmente a versao gerada para producao. |

## Estrutura principal

```text
.
├── index.html          # Documento HTML inicial
├── package.json        # Dependencias e scripts do projeto
├── vite.config.js      # Configuracao do Vite
└── src/
    ├── main.jsx        # Componente principal e montagem do React
    └── styles.css       # Estilos globais e responsivos
```

## Conteudo da pagina

- Hero com a apresentacao do diagnostico.
- Indicadores sobre a conectividade da comunidade.
- Lista dos principais problemas relatados.
- Recomendacoes e proximos passos.
- Informacoes sobre o projeto.
- FAQ interativo.

## Build de producao

Para gerar os arquivos otimizados:

```bash
npm run build
```

Os arquivos serao gerados em `dist/`. Para visualizar o resultado localmente:

```bash
npm run preview
```

## Licenca

Este projeto foi desenvolvido para fins academicos e extensionistas.
