export let renderCart = () => {

    let mainContainer = document.querySelector("main");
    let buyButton = document.querySelector('.buy-button');
    let forms = document.querySelectorAll('.front-form-product');


    document.addEventListener("renderProductModules",( event =>{
        renderCart();
    }), {once: true});
    
    if(buyButton){

        buyButton.addEventListener("click", (event) => {

            event.preventDefault();

            forms.forEach(form => { 

                let data = new FormData(form);
                let url = form.action;

                for (var pair of data.entries()) {
                    console.log(pair[0]+ ', ' + pair[1]); 
                }
    
                let sendPostRequest = async () => {
    
                    
                    let response = await fetch(url, {
                        headers: {
                            'Accept': 'application/json',
                            'X-CSRF-TOKEN': document.head.querySelector('meta[name="csrf-token"]').content
                        },
                        method: 'POST',
                        body: data
                    })
                    .then(response => {
                    
                        if (!response.ok) throw response;

                        return response.json();
                    })
                    .then(json => {

                        mainContainer.innerHTML = json.content;

                        document.dispatchEvent(new CustomEvent('renderProductModules'));
                    })
                    .catch ( error =>  {
    
                        if(error.status == '500'){
                            console.log(error);
                        };
                    });
                };
        
                sendPostRequest();
            });
        });
    }
}