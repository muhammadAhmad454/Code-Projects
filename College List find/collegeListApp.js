let url = 'http://universities.hipolabs.com/search?name=';


let btn = document.querySelector('button');
btn.addEventListener('click', async ()=>{
    let country = document.querySelector('input').value;
    console.log(country);
    if (country != "") {
        let colArr = await getCollege(country);
        showColleges(colArr);
        // console.log(colArr)
    } else {
        alert("Type any country name!");
    }
});

function showColleges(colArr) {
    let list = document.querySelector('#list');
    list.innerText = "";

    for(col of colArr){
        let li = document.createElement('li');
        li.innerText = col.name;
        list.appendChild(li);
    }
}


async function getCollege(country){
    try {
        let res = await axios.get(url+country);
        return res.data;
    } catch (error) {
        console.log("error : ", error)
        return [];
    }
}