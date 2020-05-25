const charactersList = document.getElementById('charactersList')
let hpCharacters = []
const loadCharacters = async () => {
	try {
		const response = await fetch('https://hp-api.herokuapp.com/api/characters')
		hpCharacters = await response.json()
		displayCharactes(hpCharacters)
	} catch (error) {
		console.error(error)
	}
}

const displayCharactes = (characters) => {
	const htmlString = characters.map((character) => {
		return `
        <li class="character">
            <h2>${character.name}</h2>
            <p>House: ${character.house}</p>
            <img src="${character.image}"></img>
        </li>
        `
    }).join('')
    charactersList.innerHTML = htmlString
}

loadCharacters()
