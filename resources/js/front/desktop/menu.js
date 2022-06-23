export let renderMenu = () => {

    let viewButtons = document.querySelectorAll(".view-button-menu");
    let mainContainer = document.querySelector("main");

    document.addEventListener("renderProductModules", (event => {
        renderMenu();
    }
    ), { once: true });

    if(viewButtons) {

        viewButtons.forEach(viewButton => {
            
            viewButton.addEventListener("click", (event) => {

                event.preventDefault();

                let url = viewButton.dataset.url;
                
                let sendMenu = async () => {
                
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
            
                sendMenu();
                
            });
        });
    }



  
}