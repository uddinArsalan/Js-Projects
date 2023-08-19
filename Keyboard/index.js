const keys = document.querySelectorAll(".keys");
const screen = document.querySelector(".screen-input");
const alpha = document.querySelectorAll(".alpha");
const capslock = document.querySelector(".capslock");
const numbers = document.querySelectorAll(".num");
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const mul = document.querySelector(".mul");

const arr = Array.from(keys);
const alphabet = Array.from(alpha);

arr.map((key) =>
  key.addEventListener("click", () => {
    // console.log(key)
      let prev = screen.textContent;
      
      if (!key.textContent) {
          screen.textContent += " ";
          return;
        }
        if (key.textContent.toLocaleLowerCase() === "tab") {
            screen.textContent += "  ";
            return;
        }

        // let j = 0
        // if (key.textContent === "Caps Lock") {
          // if(j%2 !== 0){
            // for (let i = 0; i < 26; i++) {
            //   alphabet[i].innerText = alphabet[i].innerText.toUpperCase();
            // }
        //   }
        // else{
        //   for (let i = 0; i < 26; i++) {
        //     alphabet[i].innerText = alphabet[i].innerText.toLowerCase();
        //   }
        // }
        // 
        // j++;
      //   return;
      // }
    let i = 0;
    if (key.textContent.toLowerCase() === "backspace") {
      screen.textContent = prev.substring(0, prev.length - i - 1);
      return;
    }
    i++;
    if( key.textContent.toLowerCase() != "caps lock"){
      screen.textContent += key.textContent;
    }
    })
);


let count = 0
function toggleCase(e){
    e.target.classList.toggle("border");
    count++;
    arr.forEach(ele => {
      if(count % 2 != 0){
        ele.innerText = ele.innerText.toUpperCase()
      }else{
        ele.innerText = ele.innerText.toLowerCase()
      }
    })
}

capslock.addEventListener("click",toggleCase);

function Add(){
  
}

add.addEventListener("click",Add)