let addBtn = document.querySelector("#addTask");
let input = document.querySelector("#taskInput");
let ol = document.querySelector('ol');
let para = document.querySelector('.para');

addBtn.addEventListener("click", function(){
    console.log(input.value); 
    if (input.value != ""){
        let item = document.createElement('li');
        item.innerText = input.value;
        input.value = "";

        let addDelBtn = document.createElement('button')
        addDelBtn.innerText = "Delete"
        addDelBtn.classList.add('delete');
        ol.appendChild(item);
        item.append(addDelBtn);

    } else{
        alert("Empty Task not allowed!")
    }
})

ol.addEventListener("click", function(e){
    
    if(e.target.nodeName == 'BUTTON'){
        let pElem = e.target.parentElement;
        pElem.remove();
        console.log("item deleted");
    }
})

console.dir(ol);