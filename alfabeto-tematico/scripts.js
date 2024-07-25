document.addEventListener('DOMContentLoaded', function() {
    const alfabeto = [
        "A - Avião", "B - Borboleta", "C - Carro", "D - Dinossauro", "E - Elefante",
        "F - Foca", "G - Girafa", "H - Helicóptero", "I - Índio", "J - Jacaré",
        "K - Koala", "L - Leão", "M - Macaco", "N - Navio", "O - Ovelha",
        "P - Porco", "Q - Queijo", "R - Robô", "S - Sol", "T - Tigre",
        "U - Urso", "V - Vaca", "W - Waffles", "X - Xícara", "Y - Yoyo",
        "Z - Zebra"
    ];

    const alphabetList = document.getElementById('alphabet-list');

    alfabeto.forEach(item => {
        const alphabetItem = document.createElement('div');
        alphabetItem.classList.add('alphabet-item');
        const [letter, theme] = item.split(' - ');
        alphabetItem.textContent = letter;
        alphabetItem.title = theme;
        alphabetList.appendChild(alphabetItem);
    });
});
