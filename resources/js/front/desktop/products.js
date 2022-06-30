export let renderProducts = () => {

    let viewButtons = document.querySelectorAll(".view-button");
    let productCategories = document.querySelectorAll(".category");
    let productFilter = document.querySelector(".product-filter");
    let buyButton = document.querySelector('.buy-button');
    let forms = document.querySelectorAll('.front-form-product');
    let mainContainer = document.querySelector("main");
    
    document.addEventListener("products", (event => {
            renderProducts();
        }));

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

                        document.dispatchEvent(new CustomEvent('product'));
                              
                    })
                   
                }
            
                sendProduct();
                
            });
        });
    }

    if(buyButton){

        buyButton.addEventListener("click", (event) => {

            event.preventDefault();

            forms.forEach(form => { 

                let data = new FormData(form);
                let url = form.action;

                for (var pair of data.entries()) {
                    console.log(pair[0]+ ', ' + pair[1]); 
                }
    
                let sendPostRequest = async () => {
    
                    
                    let response = await fetch(url, {
                        headers: {
                            'Accept': 'application/json',
                            'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
                        },
                        method: 'POST',
                        body: data
                    })
                    .then(response => {
                    
                        if (!response.ok) throw response;

                        return response.json();
                    })
                    .then(json => {

                        mainContainer.innerHTML = json.content;

                        document.dispatchEvent(new CustomEvent('cart'));
                    })
                    .catch ( error =>  {
    
                        if(error.status == '500'){
                            console.log(error);
                        };
                    });
                };
        
                sendPostRequest();
            });
        });
    }

    if(productCategories){

        productCategories.forEach(productCategory => {

            productCategory.addEventListener("click", () => {

                let url = productCategory.dataset.url;

                console

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

                        document.dispatchEvent(new CustomEvent('loadSection', {
                            detail: {
                                section: 'products'
                            }
                        }));
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

    if(productFilter){

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

                    document.dispatchEvent(new CustomEvent('loadSection', {
                        detail: {
                            section: 'products'
                        }
                    }));
                })
                .catch(error =>  {
                                
                    if(error.status == '500'){
                        console.log(error);
                    };
                });
                    
            };

            sendFilterRequest();
            
        });
    };
}    
