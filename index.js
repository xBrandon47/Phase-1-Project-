const test = document.querySelector("DOMContentLoaded", () => {
    fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5")
      .then(response => response.json())
      .then(characters => {
        characters.forEach(objCharacters => showCharacter(objCharacters))
        displayCharacters(characters[0])
      })
});

const characterBar = document.getElementById("#character-bar");
const charactersImage = document.querySelector('#image');
const cuteNames = document.querySelector('#name');
const statusChar = document.querySelector("vote-count");

characterBar.addEventListener("mouseout", (event) => {
    event.target.style.color = "red"
});

characterBar.addEventListener("mouseout", (event) => {
    event.target.style.color = "#78BE21"
});

function displayCharacters(objCharacters) {
    cuteNames.textContent = objCharacters.name;
    charactersImage.src = objCharacters.image;  
    charactersImage.src= objCharacters.image;
}

function showCharacter(objCharacter) {
    const img = document.createElement('span');
    img.textContent = objCharacter.name;
    img.addEventListener('click', () => displayCharacters(objCharacter))
    characterBar.append(img);
 }
