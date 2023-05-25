let color_code = document.querySelector("#color_code");
let btn = document.querySelector("#btn");

function color(){
    // hex code
    const random_number = Math.floor(Math.random() * 1677215);
    const random_code = "#" + random_number.toString(16);
    document.body.style.backgroundColor = random_code;
    color_code.innerText = random_code;

    navigator.clipboard.writeText(random_code);
}

btn.addEventListener("click",function(){
    color();
})

window.onload = () =>{
    color();
}