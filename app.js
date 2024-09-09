function pesquisar() {
    // Obtém o termo de pesquisa do input(.value) e converte para minúsculas(toLowercase), removendo espaços em branco(.trim)
    const termoPesquisa = document.getElementById("caixapesquisa").value.toLowerCase().trim(); 

    // Obtém a referência à seção onde os resultados serão exibidos
    const sectionResultados = document.getElementById('resultados-pesquisa');

    // Inicializa uma string vazia para armazenar os resultados da pesquisa em formato HTML
    let resultados = "";
  
    // Verifica se o termo de pesquisa está vazio após remover espaços em branco
    if (termoPesquisa === '') {
        // Se estiver vazio, exibe uma mensagem na seção de resultados e encerra a função
        sectionResultados.innerHTML = '<p>Digite um termo para pesquisar.</p>';
        return; 
    }

    // Itera sobre cada objeto 'dado' dentro do array 'dados'
    for (let dado of dados) {
        // Verifica se o termo de pesquisa está presente no título ou na descrição (ignorando maiúsculas/minúsculas)
        if ((dado.titulo.toLowerCase().includes(termoPesquisa) || dado.descricao.toLowerCase().includes(termoPesquisa)) || dado.descricao.toLowerCase().includes(termoPesquisa)){
            // Se encontrado, adiciona um novo bloco de HTML à string 'resultados' para cada 'dado'
            resultados += `
                <div class="item-resultado">
                    <h2>${dado.titulo}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a> 
                </div>
            `;
        }
    }

    // Verifica se nenhum resultado foi encontrado
    if (!resultados) {
        // Se nenhum resultado, define uma mensagem na string 'resultados'
        resultados = '<p>Procure algo relacionado ao autismo.</p>';
    }

    // Define o conteúdo HTML da seção de resultados com os resultados da pesquisa ou a mensagem de "nenhum resultado"
    sectionResultados.innerHTML = resultados;
}