// Vocabulary and rules
const vocabulary = {
    "i": "yi",
    "am": "es",
    "a": "una",
    "programmer": "dakre",
    "that": "ki",
    "loves": "miru",
    "coding": "kaja",
    "red": "muro",
    "blue": "zevi",
    "green": "rilo",
    "yellow": "flan",
    "black": "doka",
    "white": "jenu",
    "dog": "pluma",
    "cat": "keta",
    "bird": "savi",
    "fish": "vela",
    "horse": "neko",
    "cow": "joko",
    "sheep": "sona",
    "goat": "zama",
    "chicken": "kuka",
    "duck": "duva",
    "house": "havi",
    "tree": "xeno",
    "water": "lura",
    "food": "tasa",
    "sun": "viro",
    "moon": "lino",
    "star": "stera",
    "sky": "kilo",
    "mountain": "mora",
    "river": "riva",
    "hello": "hara",
    "goodbye": "fara",
    "please": "vlas",
    "thank you": "daku",
    "yes": "za",
    "no": "na",
    "friend": "nami",
    "family": "famu",
    "love": "miru",
    "happy": "jari",
    "sad": "naro"
};

const grammarRules = {
    "structure": "SOV",
    "relativePronoun": "ki"
};

// Lirvian script mapping
const scriptMapping = {
    "a": "𐌀",
    "b": "𐌁",
    "d": "𐌃",
    "e": "𐌄",
    "f": "𐌅",
    "g": "𐌆",
    "h": "𐌇",
    "i": "𐌉",
    "k": "𐌊",
    "l": "𐌋",
    "m": "𐌌",
    "n": "𐌍",
    "o": "𐌏",
    "p": "𐌐",
    "r": "𐌓",
    "s": "𐌔",
    "t": "𐌕",
    "u": "𐌖",
    "v": "𐌗",
    "z": "𐌚",
    "y": "𐌈",
    "j": "𐌆"
};

function translate() {
    const inputText = document.getElementById("inputText").value.toLowerCase();
    const words = inputText.split(" ");
    let translatedWords = words.map(word => vocabulary[word] || word);

    // Applying simple SOV structure and relative pronoun rule
    if (translatedWords.includes(grammarRules.relativePronoun)) {
        const index = translatedWords.indexOf(grammarRules.relativePronoun);
        const part1 = translatedWords.slice(0, index);
        const part2 = translatedWords.slice(index + 1);
        translatedWords = [...part1, ...part2, grammarRules.relativePronoun];
    }

    let outputText = translatedWords.join(" ");

    // Convert to Lirvian script if option is checked
    if (document.getElementById("scriptOption").checked) {
        outputText = outputText.split('').map(char => scriptMapping[char] || char).join('');
    }

    document.getElementById("outputText").innerText = outputText;
}
