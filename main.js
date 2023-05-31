import { addItem, deleteItem, getItems } from "./store.js";

const form = document.forms.entrada;
form.addEventListener('submit', envia);
form.remover.addEventListener('click', remover);

atualiza();

function envia (evento) {
    evento.preventDefault();
    console.log('Formulário enviado!');
    const n = form.valor.value;
    addItem(n);
    form.valor.value = "";
    form.valor.focus();
    atualiza();
}

function remover() {
    console.log('Remove Clicado!');
    deleteItem();
    atualiza();
}

function atualiza () {
    const ol = document.querySelector('ol');
    ol.innerHTML = "";
    const items = getItems();
    for (let i = 0; i < getItems().length; i++){
        const li = document.createElement('li');
        li.textContent = items[i];
        ol.appendChild(li);
    }
}