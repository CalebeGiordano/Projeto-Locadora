// script.js

document.addEventListener('DOMContentLoaded', function() {
    // Efetuar o parallax na imagem de fundo
    const parallax = document.querySelector('.parallax-background');
    
    window.addEventListener('scroll', function() {
        let offset = window.pageYOffset;
        parallax.style.transform = `translateY(${offset * 0.5}px)`; // Ajuste o fator de velocidade conforme necessário
    });

    // Captura todos os botões de aluguel
    const botoesAlugar = document.querySelectorAll('.alugar');

    // Para cada botão de aluguel, adiciona um evento de clique
    botoesAlugar.forEach(button => {
        button.addEventListener('click', function() {
            const carro = this.getAttribute('data-carro');
            const preco = this.getAttribute('data-preco');
            
            // Exibe uma mensagem ao usuário
            alert(`Você selecionou o ${carro} para alugar por ${preco}.`);
            
            // Aqui você pode adicionar redirecionamento ou outras funcionalidades
            // Exemplo: window.location.href = "/pagina-de-pagamento";
        });
    });
});
