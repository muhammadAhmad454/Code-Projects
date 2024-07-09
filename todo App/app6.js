let addTask = document.querySelector("#addBtn");
let enterTask = document.querySelector("#taskInp");
let listOfTask = document.querySelector('ol');
// let showTask = [];
addTask.addEventListener('click', function () {
    if (enterTask.value != "") {
        let item = document.createElement('li');
        item.innerText = enterTask.value;

        let delBtn = document.createElement('button');
        delBtn.innerText = 'Delete';
        delBtn.classList.add('deleteTask');

        listOfTask.appendChild(item);
        item.append(delBtn);
        enterTask.value = "";   
    } else {
        alert(" empty, Enter task");
    }
});

listOfTask.addEventListener('click', function(event){
    if(event.target.nodeName == 'BUTTON'){
        let delItem = event.target.parentElement;
        delItem.remove();
        console.log('deleted item');
    }
})
