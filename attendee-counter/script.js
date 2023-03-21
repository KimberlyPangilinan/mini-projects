let saved = JSON.parse(localStorage.getItem("mySaved"));

if (saved === null) {
    saved = [];
}

count = Number(localStorage.getItem("myCount"));
document.getElementById("count").innerHTML = count;

let save = localStorage.getItem("mySaved");
document.getElementById("array").innerHTML = save;

const handleClick = () => {
    count = count + 1;
    document.getElementById("count").innerHTML = count;
    localStorage.setItem("myCount", count);
}

const handleSave = () => {
    saved.push(count);
    localStorage.setItem("mySaved", JSON.stringify(saved));
    document.getElementById("array").innerHTML = saved.join(", ");
    count = 0;
    document.getElementById("count").innerHTML = count;
}

const handleReset = () => {
    localStorage.clear();
    document.getElementById("count").innerHTML = 0;
    document.getElementById("array").innerHTML = "";
}
