// Seleciona todos os botões das categorias
const botoesCategoria = document.querySelectorAll(".botao-categoria");


// Adiciona uma função para cada botão
botoesCategoria.forEach(function(botao) {

    botao.addEventListener("click", function() {

        // Pega a categoria onde o botão está
        const categoria = botao.parentElement;


        // Abre ou fecha a categoria
        categoria.classList.toggle("aberta");

    });

});
