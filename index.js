window.addEventListener("DOMContentLoaded", () => {

// Display
const display = document.getElementById("display")


// Display the numbers
const number = document.querySelectorAll(".numbers").forEach(function(item){
    item.addEventListener("click", function(e){
        // if (display.innerText === "0") {
        //     display.innerText = 0;
        //   }
    
        //   if (display.innerText === "NaN") {
        //     display.innerText = "";
        //   }
        console.log(e.target.innerHTML.trim());
     display.innerText += e.target.innerHTML.trim()
    });
    })

// Display operators
const calcuate = document.querySelectorAll(".operator-btn").forEach(function(item){
    item.addEventListener("click", function(e){
        console.log(e.target.innerHTML);
        display.innerText += e.target.innerHTML;
    
// Calculator operations
// If you click on = let the diplay on the screen be calculated
if (e.target.innerHTML === "="){
  display.innerText = eval(display.innerText)
}



}
)
})
})











