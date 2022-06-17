export let renderPlusMinusButton = () => {

    let adds = document.querySelectorAll(".add");
    let substracts = document.querySelectorAll(".subtract");

    document.addEventListener("renderProductModules", (event => {
        renderPlusMinusButton();
    }), { once: true });
    
    adds.forEach(add => {
        add.addEventListener("click", (event) => {

            event.preventDefault();

            let show = add.closest('.amount').querySelector('.show');

            show.value = (parseInt(show.value) + 1)
        });
    });
    
    substracts.forEach(substract => {

        substract.addEventListener("click", (event) => {

            event.preventDefault();
        
            let show = substract.closest('.amount').querySelector('.show');

            if(show.value > 1){
                show.value = (parseInt(show.value) - 1)
            }
        });
    });
}
