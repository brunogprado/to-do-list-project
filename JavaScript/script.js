let contador = 0
let input = document.getElementById('tarefa');
let btnAdd = document.getElementById('btn-add');
let main = document.getElementById('areaLista')

function addTarefa(){
    //PEGA VALOR DIGITADO NO INPUT
    let tarefa = input.value;

    //SE NÃO FOR VAZIO, NEM NULO, NEM INDEFINIDO
    if (tarefa !== '' && tarefa !== null && tarefa !== undefined){
        contador ++
        
        let novoItem =`
        <div id="${contador}" class="item">
        <div onclick="marcarTarefa(${contador})" class="item-icone">
            <span id="icone_${contador}" class="material-symbols-outlined">radio_button_unchecked</span>
        </div>
        <div onclick="marcarTarefa(${contador})" class="item-nome">
            ${tarefa}
        </div>
        <div class="item-botao">
            <button onclick="deletar(${contador})" class="delete">
                <span class="material-symbols-outlined">delete</span>
                Deletar
            </button>
        </div>
        </div>`;

        //ADICIONAR NOVO ITEM NO MAIN
        main.innerHTML += novoItem

        //LIMPAR INPUT
        input.value = '';
        input.focus()
    }
}

function deletar(id){
    var tarefa = document.getElementById(id);
    tarefa.remove()
}

function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if (classe =='item') {
        item.classList.add('clicado')
        var icone = document.getElementById('icone_' + id)
        icone.textContent = 'task_alt'
        icone.classList.add('task_alt')

        item.parentNode.appendChild(item)
        
    } else {
        item.classList.remove('clicado')
        var icone = document.getElementById('icone_' + id)
        icone.textContent = 'radio_button_unchecked'
        icone.classList.remove('task_alt')      
    }
    
}

input.addEventListener("keyup", function(event){
    //SE TECLOU ENTER(13)
    if(event.key === 'Enter'){
        event.preventDefault();
        btnAdd.click()
    }
})
