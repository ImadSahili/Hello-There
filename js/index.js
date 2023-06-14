let button=document.getElementById("menu");
let action=document.getElementById("actions");

button.addEventListener("click",() => {
    hundle();
});
function hundle(){
    button.classList.toggle("is-avtive");
    action.classList.toggle("is-avtive");

}