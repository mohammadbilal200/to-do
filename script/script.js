let tasksList=[];

addTask = () => {
    const task=document.getElementById("task-input").value;
    const taskNumber=tasksList.length/2;
    tasksList.push('<button onclick="removeTask(event)" id=btn-'+taskNumber+'>'+(taskNumber+1)+'</button>');
    tasksList.push('<ul>'+task+'</ul>');
    display();
}

const removeTask = (event) => {
    const taskNumber= event.target.id.slice(-1)*2;
    tasksList.splice(taskNumber, 2);
    for(let i=0; i<=tasksList.length; i+=2){
        tasksList[i].removeAttribute("id");
        tasksList[i].setAttribute("id", "btn-"+(i/2));
        tasksList[i].value=(i/2)+1;
    }
    // tasksList.forEach(reNumber);
    display();
}

const display = () => {
    document.getElementById("tasks").innerHTML=tasksList.join(`
    `);}