export let renderPurchaseButton = () => {

    let mainContainer = document.querySelector("main");
    let purchaseButton = document.querySelector('.purchase-button');
    let forms = document.querySelectorAll('.front-form-checkout');


    document.addEventListener("renderProductModules",( event =>{
        renderPurchaseButton();
    }), {once: true});
    
    if(purchaseButton){

        purchaseButton.addEventListener("click", (event) => {

            event.preventDefault();

            forms.forEach(form => { 

                let data = new FormData(form);
                let url = form.action;

                for (var pair of data.entries()) {
                    console.log(pair[0]+ ', ' + pair[1]); 
                }
    
                let sendSellRequest = async () => {
    
                    
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

                        document.dispatchEvent(new CustomEvent('renderProductModules'));
                    })
                    .catch ( error =>  {
    
                        if(error.status == '500'){
                            console.log(error);
                        };
                    });
                };
        
                sendSellRequest();
            });
        });
    }

    if(purchaseButton){

        purchaseButton.addEventListener("click", (event) => {

            event.preventDefault();

            let url = purchaseButton.dataset.url;

            let sendCart = async () => {

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
    
                        }
                    )
                }

                sendCart();

            }
        )
    }
}