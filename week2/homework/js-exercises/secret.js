let texts = ['I love!@#', ' writing ', ' javascript code.', ' Javascript is a lightweight', ' programing language', ' that can be used to manage', ' cookies!@#', ' in the web browser.'];
let secretMessage = [];

let charac = '!@#';

function find(texts, charac) {
    //split the string into an array//
    charac = charac.split('');

    return texts.filter(function(text) {
        return charac.every(function(char) {
            return text.includes(char);
        });
    } );
}

const output = find(texts, charac);
console.log(output);