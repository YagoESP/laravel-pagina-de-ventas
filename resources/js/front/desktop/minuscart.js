export let renderMinusCart = () => {

    let mainContainer = document.querySelector("main");
    let minusButtons = document.querySelectorAll('.subtract');

    document.addEventListener("renderProductModules",( event =>{
        renderMinusCart();
    }), {once: true});
    
    if(minusButtons){

        minusButtons.forEach(minusButton => {
            
            minusButton.addEventListener("click", (event) => {

                event.preventDefault();

                let url = minusButton.dataset.url;
                
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