function mostrarConteudo(pagina = 'home') {
    
    const todosConteudos = document.querySelectorAll('.content');
    todosConteudos.forEach(conteudo => {
        conteudo.classList.remove('active');
    });

    
    const todosOsBotoes = document.querySelectorAll('.nav-item');
    todosOsBotoes.forEach(botao => {
        botao.classList.remove('active');
    });

    
    const conteudoSelecionado = document.getElementById(pagina);
    if (conteudoSelecionado) {
        conteudoSelecionado.classList.add('active');
    }

   
    if (event && event.target) {
        event.target.classList.add('active');
    }
}