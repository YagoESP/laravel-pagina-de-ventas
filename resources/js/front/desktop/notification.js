export let renderNotification = () => {

    let addButton = document.querySelector(".add-to-cart-button");


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
