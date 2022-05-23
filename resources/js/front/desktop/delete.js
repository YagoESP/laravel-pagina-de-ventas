export let renderDelete = () => {
    let delets = document.querySelectorAll(".delete");

    delets.forEach(delet => {
        delet.addEventListener("click",() => {
            delet.classList.add("active");
        })
    })
}