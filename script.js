//Projecto lista de tarefas
 // Função para adicionar uma tarefa à lista

 function addTask() {
    //obtém o texto inserido pelo usuario
    let input = document.getElementById('taskInput').value
    //verefica se o campo não esta vazio
    if(input.trim() !== '') {
        //cria um novo elemento de lista
        let newTask = document.createElement('li');
        //Define o conteúdo do novo elemento da lista como o texto da tarefa cenvertida para minúsculas
        newTask.textContent = input.toLowerCase();
        //Adiciona a nova tarefa á lista
        document.getElementById('taskList').appendChild(newTask);
        //Limpa campo de entrada
        document.getElementById('taskInput').value = '';
    }else{
        alert('Por favor adicioner uma lista!')
    }
    
}//Adicionar ouvinte  de eventos ao botão  "Add Task" 
document.getElementById('addTaskBtn').addEventListener('click', addTask);

const horaAtual = new Date();
const hora = horaAtual.getHours();
const minutos = horaAtual.getDate();

if(hora < 12 || hora > 18) {
    alert(`Agora são ${hora}:${minutos} Bom Dia!`)
}else{
    alert(`Agora são ${hora}:${minutos} Boa Noite!`)
}

