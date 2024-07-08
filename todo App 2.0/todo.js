console.log("Welcome to CHEETAH")
let todo = []
let req = prompt("Enter your request...");

while (true) {
    if (req == 'quit') {
        alert("Okay, Quitted and your data lost after refresh the page");
        console.log('quitted app');
        break;
    }
    if (req == 'list') {
        console.log("---------START LIST--------")
        if (todo != "") {
            for (let i = 0; i < todo.length; i++) {
                console.log(`No. ${i}: ${todo[i]}`);
            }
        } else {
            console.log("No Tasks Found! (empty)")
        }
        console.log("---------END LIST--------")
    } else if (req == 'add') {
        let task = prompt("Add...");
        todo.push(task)
        console.log("task added.!")
    } else if (req == 'del') {
        let idNum = prompt("Enter Number to Delete...")
        todo.splice(idNum, 1);
        console.log("task Deleted successfully.!")
    } else {
        console.log("Wrong Request!")
    }
    req = prompt("Enter your request...");
}