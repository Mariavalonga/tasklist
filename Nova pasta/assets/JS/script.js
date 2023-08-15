let armazenar = [];
function add() {
    let init = document.getElementById("tarefa").value;
    let information = new Task(randonId(), title, false);

    if(init == ""){
        alert("Digite algo válido!");
        return;
    }
    information.push(armazenar);
}
console.log(armazenar);


class Task{
    constructor(id, title, status) {
        this.id = id;
        this.title = title,
        this.status = status
    }
}








function randonId() {
    return Math.floor(Math.random() * 9999);
}


 function createTask() {
     let title = document.getElementById("newTask")
     let qqNome = new task(randomId(), title, false)

     TaskList.addTask(qqNome);

     document.getElementById("newTask").value = "";
 }




function showForm() {
    document.getElementById("sect1").classList.remove("hidden");
    let showContent = "";

    posts.forEach((index) =>  {
        showContent += `
        <div class="itemPost">
    

        <button onclick="editPost(${index})">Editar</button>
        <button onclick ="deletePost(${index})">Excluir</button>

        
        </div>
       
        `
    });
}



