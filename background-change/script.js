let hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let button = document.querySelector("button");
random = () => Math.floor(Math.random()*hex.length);
button.addEventListener("click",function(){
    let color = "#";
    for(let i=0;i<=5;i++){
        color+= hex[random()];
    }
    document.body.style.backgroundColor = color;
});