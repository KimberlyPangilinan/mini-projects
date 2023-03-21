let count = 0;
let saved=[];
count = Number(localStorage.getItem("myCount"));
document.getElementById("count").innerHTML = count;


const handleClick=()=>{
    count= count+1;
    document.getElementById("count").innerHTML = count;
    localStorage.setItem("myCount", count);
}

const handleSave=()=>{
    
    saved.push(count);
    console.log(saved);
    count=0;
    document.getElementById("count").innerHTML = count;

}

