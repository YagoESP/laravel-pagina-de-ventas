import {renderNotifications} from './notifications.js';

export let renderMessage = () => {

    let addButton = document.querySelector(".save");

    if(addButton) {

        addButton.addEventListener("click", () =>{
        

            document.dispatchEvent(new CustomEvent('message', {
                detail: {
                    text: 'Enviado correctamente',
                    type: 'success'
                }
            }));
        }); 
    }
}

