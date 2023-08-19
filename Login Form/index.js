const toggle_log = document.querySelector(".toggle-log");

const toggle_reg = document.querySelector(".toggle-Reg")

toggle_log.addEventListener("click",()=>{
    toggle_reg.classList.remove("toggle-Reg")
    toggle_reg.classList.add("toggle-log")
    toggle_log.classList.add("toggle-Reg")
})

toggle_reg.addEventListener("click",()=>{
    toggle_log.classList.remove("toggle-Reg")
    toggle_reg.classList.add("toggle-Reg")
})