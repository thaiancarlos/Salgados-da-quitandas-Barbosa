function startLoading() {
    const fill = document.getElementById('progress-fill');
    const percent = document.getElementById('percent');
    const status = document.getElementById('status');
    const screen = document.getElementById('loading-screen');
    
    let progress = 0;
    
    // Simula o carregamento com um intervalo
    const interval = setInterval(() => {
        // Incremento aleatório para parecer real
        progress += Math.floor(Math.random() * 5) + 1;
        
        if (progress > 100) progress = 100;
        
        fill.style.width = progress + '%';
        percent.innerText = progress + '%';
        
        // Muda o texto de status conforme o progresso
        if (progress > 20) status.innerText = "CARREGANDO MAPAS...";
        if (progress > 50) status.innerText = "SINCRONIZANDO ASSETS...";
        if (progress > 80) status.innerText = "FINALIZANDO...";

        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(() => {
                screen.classList.add('hide-loader'); // Sobe a tela de loading
            }, 500);
        }
    }, 100); // Velocidade do carregamento
}

// Inicia a função quando a janela abrir
window.onload = startLoading;