function loadAbout() {
    event.preventDefault();
    let aboutTitle = $('<h2>').text('About Me');
    let aboutBody = $('<p>').text("about me text");
    $('.container').html(aboutTitle,aboutBody);
}

function loadPortfolio() {
    event.preventDefault();
    let portfolio = $('<div class="" id="portfolio-content">');
    $('.container').html(portfolio);
}

function loadContact() {
    event.preventDefault();
    let form = $('<form>');
    let inputName = $('<input type="text" id="name-input" placeholder="name">');
    let inputEmail = $('<input type="text" id="email-input" placeholder="e-mail address">');
    let inputMessage = $('<input type="textarea" id="message-input" placeholder="Please do not hesitate to reach out with any inquiries!">');
    $('.container').html(form).append(inputName).append(inputEmail).append(inputMessage);
}