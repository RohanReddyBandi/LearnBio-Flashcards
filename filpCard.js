function flipCard() {
    let cardButton = document.querySelector('.qcard-front.qcard-front-back.qcard-border-important');
    if (cardButton) 
    {
        cardButton.click();
        setTimeout(clickGotIt, 500);
    } 
    else 
    {
        console.error('Flip card button not found.');
    }
}

function clickGotIt() 
{
    let gotItButton = document.querySelector('.qwiz_button.got_it.got_it-qdeck0');
    if (gotItButton) 
    {
        gotItButton.click();
    } 
    else 
    {
        console.error('"Got it!" button not found.');
    }
}
flipCard();

