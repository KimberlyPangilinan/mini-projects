const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const text = document.querySelector("p");
//function that generates random number based on array length
random = () => Math.floor(Math.random()*hex.length);

//event when space bar is clicked
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
    let color = "#";
    for(let i=0;i<=5;i++){
        color+= hex[random()];
    }
    document.body.style.backgroundColor = color;
    text.textContent = color;
  }
})