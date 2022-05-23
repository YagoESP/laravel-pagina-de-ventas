export let renderNotifications = () => {

    document.addEventListener("message", (event =>{

        let notification = document.querySelector(".notification");
        let notificationText = document.getElementById("notification-text");
        
        notificationText.innerHTML = event.detail.text;
        notification.classList.add(event.detail.type);

        setTimeout(() => {
            notification.classList.remove(event.detail.type);
        }, 5000);
    }));

}