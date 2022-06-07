export let renderProducts = () => {

    let viewButtons = document.querySelectorAll(".view-button");
    let addButton = document.querySelector(".add-to-cart-button");
    let mainContainer = document.querySelector("main");
  
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
                        document.dispatchEvent(new CustomEvent('renderTabsModules'));
                        document.dispatchEvent(new CustomEvent('renderPlusMinusButtonModules'));

                        
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
  
}