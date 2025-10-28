/* ==========================================================================
   ROTEADOR DA SINGLE PAGE APPLICATION (SPA) - Versão Corrigida
   ========================================================================== */

// Importa a função de validação (como antes)
import { inicializarValidacaoFormulario } from './form-validation.js';

// --- Define o nome do repositório (a subpasta) ---
const baseName = '/plataforma-ong-raizes-do-cuidado';

// 1. Mapeamento das Rotas (usando chaves simples)
const routes = {
    '/': '/pages/inicio.html',
    '/projetos': '/pages/projetos.html',
    '/cadastro': '/pages/cadastro.html'
};

// 2. Função de Clique no Link (corrigida para usar o pathname completo)
function handleNavigation(event) {
    event.preventDefault();
    
    // event.target.pathname já nos dá o caminho completo (ex: /plataforma-ong.../projetos)
    const path = event.target.pathname;
    
    // Apenas atualiza a URL se ela for diferente da atual
    if (window.location.pathname !== path) {
        window.history.pushState({}, "", path);
        handleLocation();
    }

    // Fecha o menu mobile após o clique
    const menuPrincipal = document.querySelector('.menu-principal');
    menuPrincipal.classList.remove('nav-aberta');
}

// 3. Função Principal de Roteamento (lógica para traduzir a URL)
async function handleLocation() {
    const fullPath = window.location.pathname; // Pega o caminho completo (ex: /plataforma-ong.../projetos)

    // "Traduz" o caminho completo para a nossa chave de rota
    // Se o caminho for "/plataforma-ong.../projetos", ele vira "/projetos"
    // Se for "/plataforma-ong.../", ele vira "/"
    const pathKey = fullPath.replace(baseName, '') || '/';

    // Procura o arquivo HTML correspondente no nosso mapa
    const routeFile = routes[pathKey] || routes['/']; // Garante que a home seja o padrão

    // Busca o arquivo no local correto (com o baseName)
    const html = await fetch(baseName + routeFile).then(data => data.text());
    
    // Injeta o HTML dentro da nossa <main>
    const mainContent = document.querySelector('#conteudo-principal');
    mainContent.innerHTML = html;
    
    // Lógica especial pós-carregamento (sem mudanças)
    if (pathKey === '/cadastro') {
        inicializarValidacaoFormulario();
    }
}

// 4. Configuração Inicial (sem mudanças)
window.onpopstate = handleLocation;

document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', handleNavigation);
});

// Carrega o conteúdo inicial
handleLocation();