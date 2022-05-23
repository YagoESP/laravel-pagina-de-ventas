export let renderEdit = () => {
    let edits = document.querySelectorAll(".edit");

    edits.forEach(edit => {
        edit.addEventListener("click",() => {
            edit.classList.add("active");
        })
    })
}