export let renderProducts = () => {

    let viewButtons = document.querySelectorAll(".view-button");
    let addButton = document.querySelector(".add-to-cart-button");
    let productCategories = document.querySelectorAll(".category");
    let productFilters = document.querySelectorAll(".filter");
    let mainContainer = document.querySelector("main");

    document.addEventListener("renderProductModules", (event => {
        renderProducts();
    }), { once: true });

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


    if(productCategories){

        productCategories.forEach(productCategory => {

            productCategory.addEventListener("click", () => {

                let url = productCategory.dataset.url;

                let sendCreateRequest = async () => {

                    document.dispatchEvent(new CustomEvent('startWait'));

                    let response = await fetch(url, {
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest',
                        },
                        method: 'GET', 
                    })
                    .then(response => {
                                    
                        if (!response.ok) throw response;
                                    
                        return response.json();
                    })
                    .then(json => {
                                    
                        mainContainer.innerHTML = json.content;

                        document.dispatchEvent(new CustomEvent('renderProductModules'));
                    })
                    .catch(error =>  {
                                    
                        if(error.status == '500'){
                            console.log(error);
                        };
                    });
                      
                };

                sendCreateRequest();
                
            });
        });
    };

    if(productFilters){

        productFilters.forEach(productFilter => {

            productFilter.addEventListener("change", () => {

                let url = productFilter.value;

                let sendFilterRequest = async () => {

                    document.dispatchEvent(new CustomEvent('startWait'));

                    let response = await fetch(url, {
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest',
                        },
                        method: 'GET', 
                    })
                    .then(response => {
                                    
                        if (!response.ok) throw response;
                                    
                        return response.json();
                    })
                    .then(json => {
                                    
                        mainContainer.innerHTML = json.content;

                        document.dispatchEvent(new CustomEvent('renderProductModules'));
                    })
                    .catch(error =>  {
                                    
                        if(error.status == '500'){
                            console.log(error);
                        };
                    });
                      
                };

                sendFilterRequest();
                
            });
        });
    };

}    
