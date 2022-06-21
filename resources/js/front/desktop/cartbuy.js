export let renderCartBuy = () => {
    
    let mainContainer = document.querySelector("main");
    let cartBuyButton = document.querySelector(".buy-button-cart");
    
    document.addEventListener("renderProductModules", (event => {
        renderCartBuy();
    }
    ), { once: true });

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
    
                        document.dispatchEvent(new CustomEvent('renderProductModules'));
    
                        }
                    )
                }

                sendCart();

            }
        )
    }
}