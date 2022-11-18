localizePage();

function localizePage () {
    const body = document.URL.split('/'); 
    const bodyEl = document.getElementById('body_background');

    switch (body[body.length-1]) {
        case 'colombia.html':
            bodyEl.style.backgroundImage = "url('../assets/images/colombia.jpg')"
            break;
        case 'argentina.html':
            bodyEl.style.backgroundImage = "url('../assets/images/argentina.jpg')"
            break;
        case 'brasil.html':
            bodyEl.style.backgroundImage = "url('../assets/images/brazil.jpg')"
            break;
        default:
            bodyEl.style.backgroundColor = "green"
            break;
    }    
}
