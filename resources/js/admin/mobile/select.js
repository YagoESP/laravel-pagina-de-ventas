export let renderSelect = () => {
    let infoproducts = document.querySelector('.informations-product');

    
    
    if(infoproducts){

        infoproducts.addEventListener("change", () => {

            let infoRelated = document.querySelectorAll('.information-related');

            [...infoRelated].forEach(div => {
                if(infoproducts.value === div.dataset.related){
                    div.classList.add('active');
                }else{
                    div.classList.remove('active');
                }
            });  
        })
        
        // [...infoproducts.options].forEach(infoproduct =>{

        //     console.log(infoproduct);

            

        //     infoproduct.addEventListener("click", () => {
                
        //         let infoRelated = document.querySelector('.information-related');
        //         console.log(infoRelated);
        //         console.log(infoRelated.dataset.related);
          
        //         // if(infoproduct.value === infoRelated.dataset.related){
        //         //     infoRelated.classList.add('active');
        //         // }else{
        //         //     infoRelated.classList.remove('active');
        //         // }

        //     });
        // })
    }
}