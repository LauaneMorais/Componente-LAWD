const todosOsBotoes = document.querySelectorAll('.botao-descricao'); 

        todosOsBotoes.forEach(botao => {
         botao.addEventListener('click', () => {

        const cardPai = botao.closest('.card');
        
        // Dentro APENAS do card clicado, encontre div de descrição
        const descricao = cardPai.querySelector('.descricao');

        descricao.classList.toggle('visivel');

        if (descricao.classList.contains('visivel')) {
            botao.innerHTML = '<strong>Ver menos</strong>';
        } else {
            botao.innerHTML = '<strong>Ver mais</strong>';
        }
    });
});