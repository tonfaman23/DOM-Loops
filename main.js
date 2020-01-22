console.log("DOM Loops")

const dinosaurs = [
    {type: 'T-rex', name: 'Wrex'},
    {type: 'Triceratops', name: 'Billy'},
    {type: 'Ptera', name: 'Kira'},
    {type: 'Bracchio', name: 'Tommy'}
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

const dinoCards = () => {
    let domString = '';
    for (let i = 0; i < dinosaurs.length; i++) {
        domString += '<div class="dinosaur">';
        domString +=    `<h3>${dinosaurs[i].type}</h3>`
        domString +=    `<p>Name: ${dinosaurs[i].name}</p>`
        domString += '</div>';
    }
    printToDom('dino-barn', domString);
};

dinoCards();
