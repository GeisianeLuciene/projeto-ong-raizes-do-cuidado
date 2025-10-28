# Plataforma ONG "Raízes do Cuidado"

> Projeto acadêmico desenvolvido para as disciplinas de Fundamentos da Web e Programação para Interfaces Web. O projeto consiste em um site institucional de 3 páginas, construído como uma SPA (Single Page Application) responsiva, utilizando HTML5, CSS3 e JavaScript puro.

**Status:** Finalizado (Entrega IV Concluída) ✔️
**Última Release:** v1.0.0

---

## 📝 Descrição do Projeto

Este projeto consiste na criação de uma plataforma web para a ONG fictícia "Raízes do Cuidado". O site funciona como uma **Single Page Application (SPA)**, onde o conteúdo é carregado dinamicamente sem recarregar a página, oferecendo uma experiência de usuário fluida e moderna. O desenvolvimento seguiu práticas profissionais de versionamento, acessibilidade e otimização.

-   **Fase I (HTML):** A estrutura semântica do site foi construída.
-   **Fase II (CSS):** A plataforma foi estilizada com CSS3, implementando um design system, componentes modernos e layout responsivo (mobile-first).
-   **Fase III (JavaScript):** O site foi transformado em uma SPA dinâmica, com roteamento de cliente e validação de formulário avançada.
-   **Fase IV (Processos):** Foram implementadas práticas de acessibilidade (WCAG 2.1 AA), otimização de código e um fluxo de trabalho Git profissional.

## 💻 Tecnologias Utilizadas

-   **HTML5** (Semântico, Estrutura `<picture>`, Atributos ARIA)
-   **CSS3** (Variáveis, Grid, Flexbox, Media Queries, Animações, `prefers-color-scheme`)
-   **JavaScript (ES6+)** (Manipulação do DOM, `fetch()`, `async/await`, History API, Módulos `import/export`)
-   **Git & GitHub** (GitFlow simplificado, Issues, PRs, Commits Semânticos, Releases)
-   **Google Fonts** para a tipografia.
-   Ferramentas de Minificação Online (CSS, JS, HTML).

## ✨ Features (Recursos)

-   ✅ **Arquitetura SPA (Single Page Application):** Navegação fluida sem recarregamento.
-   ✅ **Roteamento de Cliente:** URLs limpas e botão "voltar" funcional.
-   ✅ **Validação de Formulário Avançada:** Verificação em tempo real com mensagens customizadas.
-   ✅ **Carregamento Dinâmico de Conteúdo:** Uso de `fetch()` para carregar HTML.
-   ✅ **Código JavaScript Modular:** Organizado via `import/export`.
-   ✅ **Layout Responsivo (Mobile-First):** Adaptação a todos os tamanhos de tela.
-   ✅ **Menu Hambúrguer Interativo:** Funcional e acessível (`aria-expanded`).
-   ✅ **Acessibilidade (WCAG 2.1 AA):**
    -   Contraste de cores adequado (incluindo modo escuro).
    -   Navegação completa por teclado com indicadores de foco visíveis.
    -   Suporte a leitores de tela com HTML semântico e atributos ARIA (`aria-controls`, `aria-describedby`).
    -   Modo Escuro automático (`prefers-color-scheme`).
-   ✅ **Otimização de Imagens:** Uso da tag `<picture>` para WebP com fallback JPG.
-   ✅ **Otimização de Código:** Arquivos HTML, CSS e JavaScript minificados na pasta `dist/`.

## 🎯 Objetivos Concluídos por Entrega

#### Entrega I (HTML)
-   Estruturação com HTML5 Semântico.
-   Criação de formulário complexo com validação nativa.

#### Entrega II (CSS)
-   Desenvolvimento de um Design System com variáveis CSS.
-   Criação de leiautes responsivos com Grid e Flexbox.
-   Implementação de navegação interativa (menu hambúrguer).
-   Estilização de componentes (cards, botões, formulários).

#### Entrega III (JavaScript)
-   Implementação de um sistema de SPA básico com roteador JS.
-   Implementação de validação de formulário avançada e modular.

#### Entrega IV (Processos)
-   Implementação de fluxo Git profissional (Issues, Branches, PRs).
-   Garantia de conformidade com Acessibilidade (WCAG 2.1 AA).
-   Otimização de código (Minificação) e imagens.
-   Criação de Release com versionamento semântico (`v1.0.0`).

## 📦 Build para Produção

A pasta `dist/` contém a versão otimizada e minificada do projeto, pronta para deploy. Os arquivos nesta pasta foram processados para reduzir o tamanho e melhorar o tempo de carregamento. O deploy no GitHub Pages é feito a partir da branch `main`, utilizando os arquivos não minificados da raiz para facilitar a demonstração do código fonte e garantir o funcionamento correto com a tag `<base>`.

## 🚀 Como Visualizar o Projeto

O projeto pode ser visualizado ao vivo através do link do GitHub Pages:

-   **Link do Site:** **[https://geisianeluciene.github.io/projeto-ong-raizes-do-cuidado/](https://geisianeluciene.github.io/projeto-ong-raizes-do-cuidado/)**

Para rodar localmente (necessário para a navegação SPA funcionar):
1.  Clone ou baixe o repositório.
2.  Instale a extensão **Live Server** no VS Code.
3.  Clique com o botão direito no `index.html` e selecione "Open with Live Server".

## ✒️ Autor

Projeto desenvolvido por **Geisiane Luciene**.

- **LinkedIn:** [Geisiane Luciene](https://www.linkedin.com/in/geisiane-luciene-a51536379/)
- **Email:** [lucienegeisiane9@gmail.com](mailto:lucienegeisiane9@gmail.com)

---