export let renderProducts = () => {

    let viewButtons = document.querySelectorAll(".view-button");
    let addButton = document.querySelector(".add-to-cart-button");
    let mainContainer = document.querySelector("main");
    let productCategories = document.querySelectorAll(".category");
    let productContainer = document.querySelector(".shop-articles-sections-cards-content");

    if(viewButtons){

        viewButtons.forEach(viewButton => {
            
            viewButton.addEventListener("click", () => {

                let url = viewButton.dataset.url;
                
                let sendProduct = async () => {
                
                    let response = await fetch(url, {
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest',
                        },
                        method: 'GET' 
                    })
                    
                    .then(response => {

                        if (!response.ok) throw response;

                        return response.json();

                    })

                    .then(json => {

                        mainContainer.innerHTML = json.content;

                        document.dispatchEvent(new CustomEvent('renderProductModules'));
                        

                        
                    })
                   
                }
            
                sendProduct();
                
            });
        });
    }

    if(productCategories){

        productCategories.forEach(productCategory => {
            
            productCategory.addEventListener("click", () => {

                let url = productCategory.dataset.url;
                
                let sendCategory = async () => {
                
                    let response = await fetch(url, {
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest',
                        },
                        method: 'GET' 
                    })
                    
                    .then(response => {

                        if (!response.ok) throw response;

                        return response.json();

                    })

                    .then(json => {

                        productContainer.innerHTML = json.form-container;

                        document.dispatchEvent(new CustomEvent('renderProductModules'));
                        

                        
                    })
                   
                }
            
                sendCategory();
                
            });
        });
    }


    if(addButton){
        addButton.addEventListener("click", () =>{
        
            document.dispatchEvent(new CustomEvent('message', {
                detail: {
                    text: 'Enviado correctamente',
                    type: 'success'
                }
            }));
            
        })    
    }

}    
