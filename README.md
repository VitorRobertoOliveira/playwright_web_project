Claro! Abaixo está o mesmo conteúdo formatado corretamente para um arquivo README de GitHub, usando a sintaxe de Markdown:

---

# Projeto de Automação de Testes Web com TypeScript e Playwright

Este projeto é desenvolvido para automatizar testes de aplicações web utilizando [Playwright](https://playwright.dev/) e [TypeScript](https://www.typescriptlang.org/). O Playwright oferece uma estrutura poderosa e confiável para automação de navegadores, enquanto o TypeScript garante segurança de tipos e uma melhor experiência de desenvolvimento.

## Funcionalidades do Projeto

- Testes em vários navegadores (Chromium, Firefox e WebKit)
- Execução de testes em modo headless e headful
- Execução paralela de testes
- Captura de screenshots e gravação de vídeos dos testes
- Suporte completo ao TypeScript para escrita de testes limpos, escaláveis e de fácil manutenção

## Configuração

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

### Instalação

1. Clone o repositório:

   ```bash
   git clone https://github.com/VitorRobertoOliveira/playwright_web_project.git
   ```

2. Acesse o diretório do projeto:

   ```bash
   cd playwright_web_project
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```

4. Instale os navegadores do Playwright:

   ```bash
   npx playwright install
   ```

## Executando os Testes

### Executar Todos os Testes

Para rodar todos os casos de teste, utilize o comando:

```bash
npx playwright test
```

### Executar um Teste Específico

Para rodar um único arquivo de teste, utilize:

```bash
npx playwright test tests/exemplo.spec.ts
```

### Executar Testes em Modo Headed

Você pode rodar os testes com a interface do navegador visível utilizando:

```bash
npx playwright test --headed
```

### Gerar Relatório de Testes

Para gerar um relatório em HTML dos testes, utilize:

```bash
npx playwright show-report
```

## Estrutura do Projeto

- `tests/`: Contém todos os arquivos de testes escritos em TypeScript.
- `playwright.config.ts`: Arquivo de configuração do Playwright, onde você pode definir opções do navegador, diretório de testes, timeouts, etc.
- `package.json`: Contém as dependências do projeto e os scripts para execução dos testes.

## Escrevendo Testes

Cada teste é escrito utilizando a API do Playwright e TypeScript, garantindo um código claro e fortemente tipado. Aqui está um exemplo de caso de teste:

```typescript
import { test, expect } from '@playwright/test';

test('a página inicial tem o título correto', async ({ page }) => {
  await page.goto('https://exemplo.com');
  const title = await page.title();
  expect(title).toBe('Exemplo de Domínio');
});
```

## Executando Testes em Paralelo

O Playwright executa automaticamente os testes em paralelo. Você pode configurar o número de workers no arquivo `playwright.config.ts`:

```typescript
workers: 4 // Ajuste este valor com base na capacidade da sua CPU
```

## Debugando Testes

Para debugar seus testes:

1. Adicione `test.only` para executar um teste específico.
2. Use `npx playwright test --debug` para pausar a execução e interagir com o navegador.

## Contribuição

Sinta-se à vontade para contribuir abrindo issues ou criando pull requests. Siga as diretrizes de código estabelecidas e escreva testes adequados para qualquer nova funcionalidade ou correção de bugs.

## Licença

Este projeto está licenciado sob a licença MIT.

---

### Boas Testes! 🎉
