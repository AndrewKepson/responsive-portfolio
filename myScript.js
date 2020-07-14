function loadAbout() {
    event.preventDefault();
    $('#contact-form').hide();
    $('#portfolio-grid').hide();
    $('#about-me').show();
    
}

function loadPortfolio() {
    event.preventDefault();
    $('#contact-form').hide();
    $('#about-me').hide();
    $('#portfolio-grid').show();
}

function loadContact() {
    event.preventDefault();
    $('#about-me').hide();
    $('#portfolio-grid').hide();
    $('#contact-form').show();
}