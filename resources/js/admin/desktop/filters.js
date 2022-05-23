export let renderFilters = () => {

    let filter = document.querySelector(".icon");
    let faqs = document.querySelector(".faqs");
    
    if(filter){
        filter.addEventListener("click",()=> {

            faqs.classList.toggle("active");
        }); 
    }
}
