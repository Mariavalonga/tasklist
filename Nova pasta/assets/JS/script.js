class Task{
    constructor(id, title, status) {
        this.id = id;
        this.title = title,
        this.status = status
    }
}
class TaskList {
    constructor() {
        this.tasks = [];
    }
    addTask(task)

}



function randonId() {
    return Math.floor(Math.random() * 9999);
}
const taskList = new TaskList();

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

function createTask() {
    let title = document.getElementById("areabox1").value;
    let newTask = new Task(randomId(), title, false);
        
    tasks.addTask(newTask);
  
    document.getElementById("areabox1").value = "";
    
  
    showForm();
        }