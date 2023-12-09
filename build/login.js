'use-strict';

const emailLabel = document.getElementById('email');
const paswwordLabel = document.getElementById('password');
const closedEye = document.getElementById('eye-closed');
const openEye = document.getElementById('eye-open');
const passwordEye = document.getElementById('password-eye');


// const labelMove {
    
// }




closedEye.addEventListener("click", (e) => {
    if(closedEye.classList.contains("show")){
        closedEye.classList.add("hidden")
        openEye.classList.add("hidden")
    }
    console.log(e.target)
});
emailLabel.addEventListener("click", labelMove);