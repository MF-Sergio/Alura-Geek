
function exibirInputPesquisa () {
    var lupa = document.querySelector('[data-lupa]');
    var inputPesquisa = document.querySelector('[data-pesquisa]');
    
    lupa.addEventListener('click', () => {
        inputPesquisa.classList.toggle('cabecalho__pesquisa--ativo');
    })
}

exibirInputPesquisa();