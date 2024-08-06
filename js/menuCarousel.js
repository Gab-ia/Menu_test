 // Carousel Menu Page d'accueil

 const menus = [
    {date:"2024-07-26", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"},
    {date:"2024-07-27", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"},
    {date:"2024-07-28", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"},
    {date:"2024-07-29", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"},
    {date:"2024-07-30", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"},
    {date:"2024-07-31", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"},
    {date:"2024-08-01", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"},
    {date:"2024-08-02", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"},
    {date:"2024-08-03", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"},
    {date:"2024-08-04", entree: "fsdfgyugggy guyuy sgui zero ij ejoi yutf yt ytv iyytf ytf yvy t  ihfsdff", plat:"fsdfgyugggyguyuyyutf yt yt zegr jozehrg ihergizh gpesf v iyytf ytf yvy t  ihfsdf", dessert:"qfsdfgyugggyguyuy jesrgo jzergj zlesjg pyutf yt ytv iyytf ytf yvy t  ihfsdf"},
    {date:"2024-08-05", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"},
    {date:"2024-08-06", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"},
    {date:"2024-08-07", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"},
    {date:"2024-08-08", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"},
    {date:"2024-08-09", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"},
    {date:"2024-08-10", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"},
    {date:"2024-08-11", entree: "sdfsdfsdf", plat:"fsdfsdf", dessert:"qsdqsqssdqsd"}
];


let currentIndex = menus.findIndex(menu => new Date(menu.date).toDateString() === new Date().toDateString());
console.log(currentIndex);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalizeDate(dateStr) {
    return dateStr.split(' ').map(capitalizeFirstLetter).join(' ');
}

function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('fr-FR', options);
    return capitalizeDate(formattedDate);
}

function renderCards() {
    const carouselInner = document.getElementById('menu-carouselInner');
    carouselInner.innerHTML = '';

    menus.forEach(menu => {
        const card = document.createElement('div');
        card.className = 'menu-card';
        card.innerHTML = `
            <h3>${formatDate(menu.date)}</h3>
            <p class="menu-plat"><strong>Entrée</strong></p>
            <p class="menu-aliment">${menu.entree}</p>
            <p class="menu-plat"><strong>Plat</strong></p>
            <p class="menu-aliment">${menu.plat}</p>
            <p class="menu-plat"><strong>Dessert</strong></p>
            <p class="menu-aliment">${menu.dessert}</p>
        `;
        carouselInner.appendChild(card);
    });

    updateButtons();
    centerCard();
}

function centerCard() {
    const carouselWidth = document.querySelector('.menu-carousel').offsetWidth;
    console.log(carouselWidth);
    const cardWidth = 650; // 300px card width + 16px margin
    const offset = (carouselWidth - cardWidth) / 2;
    document.getElementById('menu-carouselInner').style.transform = `translateX(${-currentIndex*cardWidth +offset}px)`;
}

function prevCard() {
    if (currentIndex > 0) {
        currentIndex--;
        centerCard();
        updateButtons();
    }
}

function nextCard() {
    if (currentIndex < menus.length - 1) {
        currentIndex++;
        centerCard();
        updateButtons();
    }
}

function updateButtons() {
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    
    const prevButtonImg = document.getElementById('prevButton');
    const nextButtonImg = document.getElementById('nextButton');
    
    if (currentIndex === 0) {
        prevButton.disabled = true;
        prevButtonImg.src = '../img/icones/precmange.svg';
    }else {
        prevButton.disabled = false;
        prevButtonImg.src = '../img/icones/precedent.svg';
    }

    if (currentIndex === menus.length - 1) {
        nextButton.disabled = true;
        nextButtonImg.src = '../img/icones/suivmange.svg';
    } else {
        nextButton.disabled = false;
        nextButtonImg.src = '../img/icones/suivant.svg';
    }
}



window.onload = renderCards;
window.onresize = centerCard;