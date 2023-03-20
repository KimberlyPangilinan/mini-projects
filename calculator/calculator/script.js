(function(){

    let screen = document.querySelector(".screen");
    let btns = document.querySelectorAll(".btn");
    let equal = document.querySelector(".btn-equal");
    let clear = document.querySelector(".btn-clear");
    let del = document.querySelector(".btn-del");

    btns.forEach(function(button){
        button.addEventListener("click",function(e){
            let value = e.target.dataset.num;
            screen.value += value;
        })
    })

    equal.addEventListener("click",function(e){
        let answer = eval(screen.value);
        screen.value = answer;
    })

    clear.addEventListener("click", function(e){
        screen.value = "";
    })

    del.addEventListener("click", function(e){
        let a = screen.value;
        screen.value = a.substring(0,a.length -1);
    })
})();