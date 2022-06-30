export let renderCart = () => {

    let mainContainer = document.querySelector("main");
    let cartBuyButton = document.querySelector(".buy-button-cart");
    let plusMinusButtons = document.querySelectorAll('.plus-minus-button');

    document.addEventListener("carts", (event => {
            renderCart();
        }
    ));
    
    if(cartBuyButton){

        cartBuyButton.addEventListener("click", (event) => {

            event.preventDefault();

            let url = cartBuyButton.dataset.url;

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
    
                        document.dispatchEvent(new CustomEvent('checkout'));
    
                        }
                    )
                }

                sendCart();

            }
        )
    }

    if(plusMinusButtons){

        plusMinusButtons.forEach(plusMinusButton => {
            
            plusMinusButton.addEventListener("click", (event) => {

                event.preventDefault();

                let url = plusMinusButton.dataset.url;
                
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

                        document.dispatchEvent(new CustomEvent('cart'));
                 
                    })
                   
                }
            
                sendProduct();
                
            });
        });
    }

}