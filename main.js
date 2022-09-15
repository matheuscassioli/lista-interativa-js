const form = document.querySelector('.principal__entradas');
const lista = document.querySelector('.principal__lista') 


form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    criaElemento(evento.target.elements['nome'].value, evento.target.elements['quantidade'].value);
})

function criaElemento(nome, quantidade) { 

    // <li class="item"><strong>7</strong>Camisas</li>
    const novoItem = document.createElement('li');
    novoItem.classList.add('principal__item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade; 

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem) 
}