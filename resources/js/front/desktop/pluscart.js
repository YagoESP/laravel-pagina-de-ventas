export let renderPlusCart = () => {

    let mainContainer = document.querySelector("main");
    let plusButtons = document.querySelectorAll('.add');

    document.addEventListener("renderProductModules",( event =>{
        renderPlusCart();
    }), {once: true});
    
    if(plusButtons){

        plusButtons.forEach(plusButton => {
            
            plusButton.addEventListener("click", (event) => {

                event.preventDefault();

                let url = plusButton.dataset.url;
                
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

}