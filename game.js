const cards = [
    { name: 'plastic bottle', type: 'Recycle', src: 'img/botella_plastico.png' },
    { name: 'glass bottle', type: 'Recycle', src: 'img/glass_bottle_icon.png' },
    { name: 'newspaper', type: 'Recycle', src: 'img/newspaper_icon.png' },
    { name: 'yogurt container', type: 'Recycle', src: 'img/yogurt_container_icon.png' },
    { name: 'old shirt', type: 'Reuse', src: 'img/old_shirt_icon.png' },
    { name: 'cardboard box', type: 'Recycle', src: 'img/cardboard_box_icon.png' },
    { name: 'food waste', type: 'Reduce', src: 'img/food_waste_icon.png' },
    { name: 'plastic bag', type: 'Reuse', src: 'img/plastic_bag_icon.png' },
    { name: 'soda can', type: 'Recycle', src: 'img/can_icon.png' },
    { name: 'broken toy', type: 'Reuse', src: 'img/broken_toy_icon.png' },
    { name: 'used batteries', type: 'Recycle', src: 'img/batteries_icon.png' },
    { name: 'old books', type: 'Reuse', src: 'img/old_books_icon.png' },
    { name: 'used oil', type: 'Recycle', src: 'img/used_oil_icon.png' },
    { name: 'broken scissors', type: 'Reuse', src: 'img/broken_scissors_icon.png' },
    { name: 'old magazine', type: 'Recycle', src: 'img/old_magazine_icon.png' },
    { name: 'old appliance', type: 'Reuse', src: 'img/old_appliance_icon.png' },
    { name: 'used shoes', type: 'Reuse', src: 'img/used_shoes_icon.png' },
    { name: 'old towel', type: 'Reuse', src: 'img/old_towel_icon.png' },
    { name: 'old computer', type: 'Recycle', src: 'img/old_computer_icon.png' },
    { name: 'milk container', type: 'Recycle', src: 'img/milk_container_icon.png' },
    { name: 'old toothbrush', type: 'Reduce', src: 'img/old_toothbrush_icon.png' },
    { name: 'light bulb (on)', type: 'Reduce', src: 'img/light_bulb_icon.png' }
];

let currentCards = [];
let selectedCard = '';

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function showCards() {
    const container = document.getElementById('card-container');
    container.innerHTML = '';
    currentCards.forEach(card => {
        const img = document.createElement('img');
        img.src = card.src;
        img.alt = `Icono de ${card.name}`;
        img.onclick = () => selectCard(card);
        container.appendChild(img);
    });
}

function selectCard(card) {
    selectedCard = card;
    document.getElementById('result').innerText = `You have selected: ${card.name}`;
}

function classify(bin) {
    if (!selectedCard) {
        alert('Please, select a card first');
        return;
    }

    let correctClassification = selectedCard.type === bin;

    if (correctClassification) {
        document.getElementById('result').innerText = `Well done: ${selectedCard.name} should be ${bin.toLowerCase()}.`;
        document.getElementById('result').style.color = 'green'; // Cambiar el color a verde
        currentCards = currentCards.filter(card => card !== selectedCard);
        if (cards.length > 0) {
            currentCards.push(cards.pop());
        }
        showCards();
        selectedCard = '';
    } else {
        document.getElementById('result').innerText = `Incorrect: ${selectedCard.name} should not be ${bin.toLowerCase()}, try again.`;
        document.getElementById('result').style.color = 'red'; // Cambiar el color a rojo
    }
}

function startGame() {
    shuffle(cards);
    currentCards = cards.splice(0, 8);
    showCards();
}

window.onload = startGame;
