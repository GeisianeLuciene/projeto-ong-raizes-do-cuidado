/* ==========================================================================
   ROTEADOR DA SINGLE PAGE APPLICATION (SPA) - GitHub Pages Ready
   ========================================================================== */

import { inicializarValidacaoFormulario } from './form-validation.js';

// --- Caminho base do repositório no GitHub Pages ---
const baseName = '/projeto-ong-raizes-do-cuidado';

// --- Mapeamento das Rotas ---
const routes = {
    '/': '/pages/inicio.html',
    '/projetos': '/pages/projetos.html',
    '/cadastro': '/pages/cadastro.html'
};

// --- Controle de navegação ---
function handleNavigation(event) {
    event.preventDefault();
    const path = event.currentTarget.pathname;

    if (window.location.pathname !== path) {
        window.history.pushState({}, '', path);
        handleLocation();
    }

    const menuPrincipal = document.querySelector('.menu-principal');
    if (menuPrincipal) menuPrincipal.classList.remove('nav-aberta');
}

// --- Função principal de roteamento ---
async function handleLocation() {
    const fullPath = window.location.pathname;
    const pathKey = fullPath.replace(baseName, '') || '/';
    const routeFile = routes[pathKey] || routes['/'];

    try {
        const response = await fetch(baseName + routeFile);
        const html = await response.text();

        const mainContent = document.querySelector('#conteudo-principal');
        if (mainContent) mainContent.innerHTML = html;

        if (pathKey === '/cadastro') {
            inicializarValidacaoFormulario();
        }
    } catch (error) {
        console.error('Erro ao carregar página:', error);
    }
}

// --- Eventos ---
window.onpopstate = handleLocation;
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', handleNavigation);
});
handleLocation();
