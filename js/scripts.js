// Função para obter o parâmetro 'page' da URL
function getPageFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('page') || 'home';
}

// Função para ativar a aba correta com base na URL
function activateTabFromURL() {
    const currentPage = getPageFromURL();
    
    // Remove a classe 'active' de todos os botões
    document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
    
    // Adiciona a classe 'active' ao botão correspondente
    const activeButton = document.querySelector(`.tab-button[data-tab="${currentPage}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    } else {
        document.querySelector('.tab-button[data-tab="home"]').classList.add('active');
    }
}

// Função para renderizar o changelog (usada apenas em changelog.html)
function renderChangelog() {
    const releasesList = document.getElementById('releasesList');
    if (!releasesList) return;

    const releases = [
        {
            title: "Versão 3.0.1 - 20 de Abril, 2025",
            description: `**Melhorias:**
            - Adicionada nova interface de usuário com tema ciberpunk
            - Otimização de registros para Windows 11 24H2
            - Novo motor de desbloqueio de FPS para drivers NVIDIA série 5XX
            - Melhorias no sistema de otimização de memória RAM
            
            **Correções:**
            - Corrigido bug que causava falha ao iniciar em alguns sistemas
            - Resolvido problema com otimização de rede em certas placas Wi-Fi
            - Ajustado conflito com software de anti-cheat em jogos populares`
        },
        {
            title: "Versão 2.9.5 - 15 de Março, 2025",
            description: `**Melhorias:**
            - Adicionado suporte para placas AMD série 8000
            - Nova ferramenta de limpeza de cache para jogos
            - Melhorado sistema de otimização de latência
            
            **Correções:**
            - Corrigido problema com memória vazando após longos períodos de uso
            - Ajustada compatibilidade com últimas atualizações do Windows`
        },
        {
            title: "Versão 2.9.0 - 28 de Fevereiro, 2025",
            description: `**Melhorias:**
            - Novo painel de configurações avançadas
            - Adicionado suporte para processadores Intel 14ª geração
            - Otimizações específicas para jogos populares de 2025
            
            **Correções:**
            - Resolvidos problemas de compatibilidade com certos antivírus
            - Corrigido erro que impedia a ativação em algumas máquinas
            - Melhorada estabilidade geral do aplicativo`
        }
    ];

    releases.forEach(release => {
        const li = document.createElement('li');
        
        const h2 = document.createElement('h2');
        h2.textContent = release.title;
        h2.addEventListener('click', function() {
            const description = this.nextElementSibling;
            if (description.style.display === 'block') {
                description.style.display = 'none';
            } else {
                document.querySelectorAll('.description').forEach(desc => {
                    desc.style.display = 'none';
                });
                description.style.display = 'block';
            }
        });
        
        const div = document.createElement('div');
        div.className = 'description';
        div.innerHTML = release.description.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        
        li.appendChild(h2);
        li.appendChild(div);
        releasesList.appendChild(li);
    });
}

// Evento ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
    // Ativa a aba correta com base na URL
    activateTabFromURL();
    
    // Renderiza o changelog, se estiver na página changelog
    renderChangelog();
});