export let renderClean = () =>{
    let addButton = document.querySelector(".clean");

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