export let renderAccordion = () =>{
    
    let faqs = document.querySelectorAll(".faq-item");

    if(faqs){
        faqs.forEach((faq, i) => {
            faq.addEventListener("click", () => {
                let contents = document.querySelectorAll(".faq-item-content")
                contents[i].classList.toggle("active")
                let arrow = document.querySelectorAll(".item")
                arrow[i].classList.toggle("active")
            });
        });
    }
}