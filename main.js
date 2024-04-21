const form = document.getElementById('form-agenda');
const nomes = [];
const telefones = [];
const spanCadastrado = '<span class="cadastrado">Cadastrado</span>';

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if (nomes.includes(inputNome.value)) {
        alert(`O nome ${inputNome.value} já foi inserido`);
    } else {
        nomes.push(inputNome.value);
        telefones.push(parseFloat(inputTelefone.value));
    
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputTelefone.value}</td>`;
        linha += `<td>${inputTelefone.value = spanCadastrado}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}