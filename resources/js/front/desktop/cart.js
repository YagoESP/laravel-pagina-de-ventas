export let renderCart = () => {

    let mainContainer = document.querySelector("main");
    let buyButtons = document.querySelectorAll(".buy-button");

    document.addEventListener("renderCartModules", (event => {
        renderCart();
    }), { once: true });

    if(buyButtons){

        buyButtons.forEach(buyButton => {
            
            
            buyButton.addEventListener("click", () => {

                let url = buyButton.dataset.url;
                
                let sendCart = async () => {
                
                    let response = await fetch(url, {
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest',
                        },
                        method: 'POST' 
                    })
                    
                    .then(response => {

                        if (!response.ok) throw response;

                        return response.json();

                    })

                    .then(json => {

                        mainContainer.innerHTML = json.content;

                        document.dispatchEvent(new CustomEvent('renderCartModules'));
                              
                    })
                   
                }
            
                sendCart();
                
            });
        });
    }

}    
