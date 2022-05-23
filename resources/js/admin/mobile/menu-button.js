export let renderMenuButton = () => {

    let hamburger = document.querySelector(".hamburger");
    let menu = document.getElementById("hamburger-menu");
    
    if(hamburger){
        hamburger.addEventListener("click",()=> {

            hamburger.classList.toggle("active");
            menu.classList.toggle("active");
        }); 
    }
}
