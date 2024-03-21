// Função para formatar o tempo em dias, horas, minutos e segundos
function formatarTempo(tempo) {
    const dias = Math.floor(tempo / (3600 * 24));
    const horas = Math.floor((tempo % (3600 * 24)) / 3600);
    const minutos = Math.floor((tempo % 3600) / 60);
    const segundos = Math.floor(tempo % 60);
    return `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Função para calcular a diferença de tempo entre duas datas
function calcularDiferencaDeTempo(data1, data2) {
    const diferencaEmSegundos = Math.abs(data2 - data1) / 1000; // Convertendo para segundos
    return diferencaEmSegundos;
}

// Função para atualizar o contador de tempo
function atualizarContador() {
    // Data do primeiro beijo (ano, mês-1, dia, hora, minuto, segundo)
    const primeiraData = new Date(2024, 2, 3, 17, 0, 0);

    // Data atual
    const hoje = new Date();

    // Calcular a diferença de tempo
    const diferencaDeTempo = calcularDiferencaDeTempo(primeiraData, hoje);

    // Formatar a diferença de tempo
    const tempoFormatado = formatarTempo(diferencaDeTempo);

    // Exibir o contador de tempo na página
    document.getElementById('contador').textContent = `Já se passaram ${tempoFormatado} desde o primeiro beijo.`;
}

// Chamar a função de atualização do contador a cada segundo
setInterval(atualizarContador, 1000);

// Evento para mostrar a frase especial quando o botão é clicado
document.getElementById('mostrarFrase').addEventListener('click', function() {
    var fraseEspecial = document.getElementById('fraseEspecial');
    if (fraseEspecial.style.display === 'none') {
        fraseEspecial.style.display = 'block';
    } else {
        fraseEspecial.style.display = 'none';
    }
});

function mostrarCoraçoes() {
    const numCoraçoes = 30; // Aumentando a quantidade de corações

    for (let i = 0; i < numCoraçoes; i++) {
        // Criar coração
        const coracao = document.createElement('div');
        coracao.classList.add('coracao');

        // Posicionar coração aleatoriamente na página
        const left = Math.random() * window.innerWidth;
        const top = Math.random() * window.innerHeight;
        coracao.style.left = `${left}px`;
        coracao.style.top = `${top}px`;

        // Adicionar coração à página
        document.getElementById('coracoes').appendChild(coracao);

        // Remover coração após a animação terminar
        setTimeout(() => {
            coracao.remove();
        }, 10000); // Ajustando o tempo de remoção dos corações
    }
}


