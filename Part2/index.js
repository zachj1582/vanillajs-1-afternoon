
const idInput = document.getElementById('idInput');
const colorInput = document.getElementById('colorInput');

function setCard(){
    const card = document.getElementById(idInput.value);
    card.style.color = colorInput.value;
}

function resetCards(){
    const diamonds = document.getElementById('diamonds');
    diamonds.style.color = 'grey';
    const clubs = document.getElementById('clubs');
    clubs.style.color = 'grey';
    const spades = document.getElementById('spades');
    spades.style.color = 'grey';
    const hearts = document.getElementById('hearts');
    hearts.style.color = 'grey';
}