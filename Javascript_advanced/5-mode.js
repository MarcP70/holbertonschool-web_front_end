function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    // Ajouter un paragraphe au corps de la page
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Welcome Holberton!';
    document.body.appendChild(paragraph);

    // Ajouter les boutons au corps de la page
    const buttonSpooky = document.createElement('button');
    buttonSpooky.textContent = 'Spooky';
    document.body.appendChild(buttonSpooky);
    buttonSpooky.addEventListener('click', spooky);

    const buttonDarkMode = document.createElement('button');
    buttonDarkMode.textContent = 'Dark mode';
    document.body.appendChild(buttonDarkMode);
    buttonDarkMode.addEventListener('click', darkMode);

    const buttonScreamMode = document.createElement('button');
    buttonScreamMode.textContent = 'Scream mode';
    document.body.appendChild(buttonScreamMode);
    buttonScreamMode.addEventListener('click', screamMode);
}

main();
