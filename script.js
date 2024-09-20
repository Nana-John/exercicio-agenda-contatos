const contatoForm = document.getElementById('contatoForm');
const tabelaContatos = document.getElementById('tabelaContatos').getElementsByTagName('tbody')[0];

contatoForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Impede o recarregamento da página

    const nome = document.getElementById('nome').value;
    const telefone = document.getElementById('telefone').value;

    const novaLinha = tabelaContatos.insertRow();
    const celulaNome = novaLinha.insertCell();
    const celulaTelefone = novaLinha.insertCell();

    celulaNome.innerHTML = `<i class="fas fa-user"></i> ${nome}`; 
    celulaTelefone.innerHTML = `<i class="fas fa-phone"></i> ${telefone}`;

    contatoForm.reset(); // Limpa o formulário
});