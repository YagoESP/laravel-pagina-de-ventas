export let renderProducts = () => {
    let sendButton = document.querySelectorAll(".send-info-button");
    let formContainer = document.querySelector(".form-container");

    if(sendButton){
        sendButton.forEach(sendButton => {
            
            sendButton.addEventListener("click", () => {

                let url = sendButton.dataset.url;
                
                    let sendProduct = async () => {
                    
                        let response = await fetch(url, {
                            headers: {
                                'X-Requested-With': 'XMLHttpRequest',
                            },
                            method: 'GET', 
                        })

                        
                        .then(response => {

                            if (!response.ok) throw response;
                            return response.json();

                        })
                        .then(json => {

                            formContainer.innerHTML = json.form;
                            document.dispatchEvent(new CustomEvent('renderFormModules'));
                        })
                    }
                
                sendProduct();
            });
        });
    }
}