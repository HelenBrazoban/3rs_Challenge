let selectedCard = '';

function selectCard(card) {
    selectedCard = card;
    document.getElementById('result').innerText = `Has seleccionado: ${card}`;
}

function classify(bin) {
    if (!selectedCard) {
        alert('Por favor, selecciona una tarjeta primero.');
        return;
    }

    let correctClassification = false;

    switch (selectedCard) {
        case 'botella de plástico':
        case 'botella de vidrio':
        case 'papel de periódico':
        case 'envase de yogur':
        case 'caja de cartón':
        case 'lata de refresco':
        case 'revista vieja':
        case 'computadora vieja':
        case 'envase de leche':
            correctClassification = bin === 'Reciclar';
            break;
        case 'camiseta vieja':
        case 'bolsa de plástico':
        case 'juguete roto':
        case 'libros viejos':
        case 'tijeras rotas':
        case 'electrodoméstico viejo':
        case 'zapatos usados':
        case 'toalla vieja':
            correctClassification = bin === 'Reutilizar';
            break;
        case 'bombilla encendida':
        case 'restos de comida':
        case 'cepillo de dientes viejo':
        
            correctClassification = bin === 'Reducir';
            break;
        // Añade más casos según sea necesario
    }

    if (correctClassification) {
        document.getElementById('result').innerText = `Correcto: ${selectedCard} se debe ${bin.toLowerCase()}.`;
    } else {
        document.getElementById('result').innerText = `Incorrecto: ${selectedCard} no se debe ${bin.toLowerCase()}.`;
    }

    selectedCard = '';
}
