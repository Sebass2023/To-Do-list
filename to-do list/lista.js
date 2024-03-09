//elementos del DOM

const input = document.querySelector('input');
const addBtn = document.querySelector('.btn-add');
const ul = document.querySelector('ul');
const empty = document.querySelector('.empty');


//se agrega un evento que se ejecuta al hacer click al boton

addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log(1);

    const text = input.value;

    if(text !== ''){

//crear y agregar elementos al Dom

    const li = document.createElement('li');
    const p = document.createElement('p');
    p.textContent = text;

    li.appendChild(p);
    li.appendChild(addDeleteBtn());
    ul.appendChild(li);

    input.value = "";
    empty.style.display = "none";

    }

});


//crear boton de delete y asignarlo a x

function addDeleteBtn(){
    const deleteBtn = document.createElement('button');

    deleteBtn.textContent = 'x';
    deleteBtn.className = 'btn-delete';

    deleteBtn.addEventListener('click', (e) => {
        const item = e.target.parentElement;
        ul.removeChild(item);

        const items = document.querySelectorAll('li');

        if(items.length === 0){
            empty.style.display = "block";
        }
    });
    return deleteBtn;
}