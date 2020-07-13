function loadAbout() {
    event.preventDefault();
    let aboutText = "Andrew Kepson is a web developer from Colorado Springs, Colorado."
    let aboutTitle = $('<h2>').text('About Me');
    let aboutBody = $('<p>').text(aboutText);
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
    let inputName = $('<input type="text" id="name-input" cols="50" placeholder="name">');
    let inputEmail = $('<p>' + '<input type="email" id="email-input" cols="50" placeholder="e-mail address">');
    let inputMessage = $('<p>' + '<textarea id="message-input" rows="5" cols="50" placeholder="Please do not hesitate to reach out with any inquiries!">');
    let submitButton = $('<p>' + '<button type="submit" id="submit-button">');
    $('.container').html(form).append(inputName).append(inputEmail).append(inputMessage).append(submitButton);
}