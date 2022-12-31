let tasksList=[];
addTask = () => {
    const task=document.getElementById("task-input").value;
    const taskNumber=tasksList.length
    tasksList.push('<button onclick="removeTask(event)" id=btn-'+taskNumber+'>'+(taskNumber+1)+'</button><ul>'+task+'</ul>');
    document.getElementById("tasks").innerHTML=tasksList.join(`
    `);
}
const removeTask = (event) => {
    const taskNumber= event.target.id.slice(-1);
    tasksList.splice(taskNumber, 1);
    // tasksList.forEach(renumber);
    document.getElementById("tasks").innerHTML=tasksList.join(`
    `);
}



const renumber = (item, index, arr) => {
    item.removeAttribute("id");
    item.setAttribute("id", "btn-"+index);
    item.value=index+1;
    arr[index] = item;
}