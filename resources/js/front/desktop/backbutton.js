export let renderBackButton = () => {
    
    let mainContainer = document.querySelector("main");
    let backButton = document.querySelector(".back-button");
    
    document.addEventListener("renderProductModules", (event => {
        renderBackButton();
    }
    ), { once: true });

    if(backButton){

        backButton.addEventListener("click", (event) => {

            event.preventDefault();

            let url = backButton.dataset.url;

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