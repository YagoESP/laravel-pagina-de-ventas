export let renderMenu = () => {

    let viewMenu = document.querySelectorAll(".view-button-menu");
    let mainContainer = document.querySelector("main");
    let addButton = document.querySelector(".add-to-cart-button");

    if(viewMenu) {

        viewMenu.forEach(viewMenu => {
            
            viewMenu.addEventListener("click", () => {

                let url = viewMenu.dataset.url;
                
                let sendView = async () => {
                
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

                        document.dispatchEvent(new CustomEvent('renderMenuModules'));

                        
                    })
                   
                }
            
                sendView();
                
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