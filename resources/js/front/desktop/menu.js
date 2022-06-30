export let renderMenu = () => {

    let viewButtons = document.querySelectorAll(".view-button-menu");
    let mainContainer = document.querySelector("main");

    if(viewButtons) {

        viewButtons.forEach(viewButton => {
            
            viewButton.addEventListener("click", (event) => {

                let url = viewButton.dataset.url;
                let section = viewButton.dataset.section;
                let currentSection = document.querySelector('.page-section').id;
                sessionStorage.setItem('lastSection', currentSection);
                
                let sendMenu = async () => {
                
                    let response = await fetch(url, {
                        headers: {
                            'X-Requested-With': 'XMLHttpRequest',
                        },
                        method: 'GET' 
                    })
                    
                    .then(response => {

                        if (!response.ok) throw response;

                        return response.json();

                    })

                    .then(json => {
                        window.history.pushState('', '', url);
                        mainContainer.innerHTML = json.content;
    
                        document.dispatchEvent(new CustomEvent(section));
                    })
                    .catch ( error =>  {

                        if(error.status == '500'){
                            console.log(error);
                        }
    
                    });
                }
            
                sendMenu();
                
            });
        });
    }
    window.addEventListener('popstate', event => {

        let url = window.location.href;

        let sendIndexRequest = async () => {

            let response = await fetch(url, {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest',
                },
                method: 'GET'
            })
            .then(response => {

                if (!response.ok) throw response;

                return response.json();
            })
            .then(json => {

                mainContainer.innerHTML = json.content;

                document.dispatchEvent(new CustomEvent('loadSection', {
                    detail: {
                        section: sessionStorage.getItem('lastSection')
                    }
                }));

                let currentSection = document.querySelector('.page-section').id;
                sessionStorage.setItem('lastSection', currentSection);
            })
            .catch ( error =>  {

                if(error.status == '500'){
                    console.log(error);
                }

            });
        }

        sendIndexRequest();
        
    });
}