export let renderMinusCart = () => {

    let mainContainer = document.querySelector("main");
    let MinusButtons = document.querySelectorAll('.subtract');

    document.addEventListener("renderProductModules",( event =>{
        renderMinusCart();
    }), {once: true});
    
    if(MinusButtons){

        MinusButtons.forEach(MinusButton => {
            
            MinusButton.addEventListener("click", (event) => {

                event.preventDefault();

                let url = MinusButton.dataset.url;
                
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