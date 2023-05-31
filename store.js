const store =  { estado: [] };

export default store;


export function addItem (valor) {
    store.estado.push(valor);
}

export function getItems () {
    return [...store.estado];
}

export function deleteItem () {
    store.estado.pop();
}