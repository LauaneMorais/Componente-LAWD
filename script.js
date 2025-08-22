// --- LÓGICA ORIGINAL DO BOTÃO "VER MAIS" ---
const todosOsBotoes = document.querySelectorAll('.botao-descricao'); 

todosOsBotoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const cardPai = botao.closest('.card');
        const descricao = cardPai.querySelector('.descricao');

        descricao.classList.toggle('visivel');

        if (descricao.classList.contains('visivel')) {
            botao.innerHTML = '<strong>Ver menos</strong>';
        } else {
            botao.innerHTML = '<strong>Ver mais</strong>';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.container-dos-cards');
    const btnAnterior = document.getElementById('btn-anterior');
    const btnProximo = document.getElementById('btn-proximo');




    const atualizarVisibilidadeSetas = () => {
        const scrollLeft = container.scrollLeft;
        const scrollWidth = container.scrollWidth; 
        const clientWidth = container.clientWidth;  
        const tolerance = 1; 

        // Lógica para o botão "Anterior"
        // Se a posição da rolagem for maior que 0, o botão aparece.
        if (scrollLeft > tolerance) {
            btnAnterior.style.visibility = 'visible';
        } else {
            btnAnterior.style.visibility = 'hidden';
        }

        // Lógica para o botão "Próximo"
        // Se a posição da rolagem + a largura visível for igual ou maior que a largura total,
        // o botao some.
        if (scrollLeft + clientWidth >= scrollWidth - tolerance) {
            btnProximo.style.visibility = 'hidden';
        } else {
            btnProximo.style.visibility = 'visible';
        }
    };

    btnProximo.addEventListener('click', () => {
        const cardWidth = container.querySelector('.card').offsetWidth;
        const scrollAmount = cardWidth + 20;
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });

    btnAnterior.addEventListener('click', () => {
        const cardWidth = container.querySelector('.card').offsetWidth;
        const scrollAmount = cardWidth + 20;
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });

    container.addEventListener('scroll', atualizarVisibilidadeSetas);
    atualizarVisibilidadeSetas();
});